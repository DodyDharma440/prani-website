import { data, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "firebase";
import { collection, getDocs } from "firebase/firestore";
import { IProduct } from "~/interfaces/product";
import { About, Contact, Hero, HowItWorks, Products } from "~/sections/home";

export const meta: MetaFunction = () => {
  return [
    { title: "Prani" },
    {
      name: "description",
      content:
        "Menghubungkan Petani Langsung ke Pembeli. Beli hasil petani tanpa perantara. Dengan Prani, hasil kerja keras petani dihargai sepenuhnya dan kamu mendapat hasil terbaik langsung dari sumbernya.",
    },
  ];
};

export const loader = async () => {
  const colRef = collection(db, "products");
  const snapshot = await getDocs(colRef);
  const products = snapshot.docs.map((doc) => doc.data() as IProduct);
  return data({ products });
};

export default function Index() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Products products={products} />
      <Contact />
    </>
  );
}
