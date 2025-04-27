import { SectionTitle } from "~/components";

const HowItWorks = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="mx-auto text-center">
          <SectionTitle
            subtitle="HOW IT WORKS"
            title={
              <>
                Proses Mudah untuk Mendapatkan <br /> Produk Impian Anda
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
