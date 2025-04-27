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
      </div>
    </section>
  );
};

export default Products;
