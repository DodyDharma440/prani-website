import { data, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import puppeteer from "puppeteer";
import { IProduct } from "~/interfaces/product";
import { About, Contact, Hero, HowItWorks, Products } from "~/sections/home";

export const meta: MetaFunction = () => {
  return [
    { title: "Prani" },
    { name: "description", content: "Coming Soon - Prani" },
  ];
};

export const loader = async () => {
  const getProducts = async () => {
    // Start a Puppeteer session with:
    // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
    // - no default viewport (`defaultViewport: null` - website page will in full width and height)
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      dumpio: true,
    });

    // Open a new page
    const page = await browser.newPage();

    // On this new page:
    // - open the "http://quotes.toscrape.com/" website
    // - wait until the dom content is loaded (HTML is ready)
    await page.goto("http://lynk.id/praniid", {
      waitUntil: "domcontentloaded",
    });

    const products = await page.evaluate(() => {
      const productEls = document.querySelectorAll(".grid-layout");

      const products: IProduct[] = [];

      productEls.forEach((e) => {
        const url = (e as HTMLAnchorElement).href;
        const thumbnail = e.getElementsByTagName("img")?.[0]?.src;
        const title = e.getElementsByTagName("p")?.[0]?.innerHTML;
        const price = e.getElementsByTagName("p")?.[1]?.innerHTML;
        products.push({ thumbnail, title, price, url });
      });

      return products;
    });
    await browser.close();

    return products;
  };

  const products = await getProducts();
  return data({ products });
};

export default function Index() {
  const { products } = useLoaderData<typeof loader>();
  console.log("🚀 ~ Index ~ products:", products);

  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Products products={products.filter((p) => p.title)} />
      <Contact />
    </>
  );
}
