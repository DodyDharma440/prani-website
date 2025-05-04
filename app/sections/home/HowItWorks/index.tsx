import { SectionTitle } from "~/components";
import { howItWorks } from "~/constants/data";

const HowItWorks = () => {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="mx-auto text-center mb-8">
          <SectionTitle
            subtitle="CARA KERJA"
            title={
              <>
                Proses Mudah untuk Mendapatkan <br /> Produk Impian Anda
              </>
            }
          />
        </div>

        <div className="relative">
          <div className="rounded-full w-[400px] h-[400px] bg-primary/20 blur-3xl absolute -left-[200px] -top-[100px]" />
          <div className="grid grid-cols-12 gap-4 md:gap-8 max-w-5xl mx-auto relative z-[2]">
            {howItWorks.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="col-span-12 lg:col-span-6" key={index}>
                  <div className="bg-gray-100/35 backdrop-blur-md rounded-3xl py-6 px-8 shadow-md transform transition-transform duration-500 hover:-translate-y-1">
                    <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-4">
                      <Icon className="text-primary" size={50} />
                    </div>
                    <h5 className="text-2xl font-bold mb-2">{item.title}</h5>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
