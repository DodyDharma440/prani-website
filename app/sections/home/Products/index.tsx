import { SectionTitle } from "~/components";

const Products = () => {
  return (
    <section className="section" id="products">
      <div className="container">
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
          {[...Array(3)].map((_, i) => {
            return (
              <div
                className="col-span-12 lg:col-span-4 rounded-lg overflow-hidden shadow-md"
                key={i}
              >
                <div className="h-[320px] bg-gray-200"></div>
                <div className="bg-white px-5 py-6">
                  <h4 className="font-bold text-2xl">Nama Produk</h4>
                  <p className="text-primary font-bold text-lg">Rp 100.000</p>
                  <p className="mt-2 mb-4 text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button className="btn btn-primary min-w-[100px] text-center">
                    Detail
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <button className="btn btn-primary text-lg !px-6 !py-3 mx-auto">
          Lihat Semua Produk
        </button>
      </div>
    </section>
  );
};

export default Products;
