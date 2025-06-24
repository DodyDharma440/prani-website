import { Link } from "@remix-run/react";
import React from "react";
import { SectionTitle } from "~/components";
import { IProduct } from "~/interfaces/product";

type ProductsProps = {
  products: IProduct[];
};

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <section className="section overflow-hidden" id="products">
      <div className="container relative">
        <div className="rounded-full w-[420px] h-[420px] bg-primary/20 blur-3xl absolute -right-[100px] bottom-[100px] z-[1]" />
        <div className="relative z-[2]">
          <div className="mx-auto text-center">
            <SectionTitle
              subtitle="PRODUK KAMI"
              title={
                <>
                  Hasil Pertanian Segar Langsung <br /> dari Petani
                </>
              }
            />
          </div>

          <div className="max-w-[1000px] mx-auto grid grid-cols-12 gap-8 mb-10">
            {products.map((product, i) => {
              return (
                <div
                  className="col-span-12 lg:col-span-4 rounded-lg overflow-hidden shadow-md"
                  key={i}
                >
                  <div className="h-[320px] bg-gray-200 relative overflow-hidden">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white px-5 py-6">
                    <h4 className="font-bold text-2xl">{product.title}</h4>
                    <p className="text-primary font-bold text-lg mb-4">
                      {product.price}
                    </p>
                    {/* <p className="mt-2 mb-4 text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p> */}
                    <Link to={product.url} target="_blank" rel="noreferrer">
                      <button className="btn btn-primary min-w-[100px] text-center">
                        Detail
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <Link to="https://lynk.id/praniid" target="_blank" rel="noreferrer">
            <button className="btn btn-primary text-lg !px-6 !py-3 mx-auto">
              Lihat Semua Produk
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
