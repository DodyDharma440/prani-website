import { Link } from "@remix-run/react";
import { ArrowButton, SectionTitle } from "~/components";

const About = () => {
  return (
    <section className="section relative z-[1]" id="about">
      <div className="container">
        <div className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-6">
            <div>
              <div className="max-w-[460px]">
                <SectionTitle
                  title={
                    <>
                      Menghubungkan Petani <br /> dengan Peluang <br /> Lebih
                      Baik
                    </>
                  }
                  subtitle="TENTANG PRANI"
                />
              </div>
              <p className="description mb-6">
                Di Prani, kami percaya bahwa setiap petani berhak mendapatkan
                penghargaan atas kerja kerasnya. Kami hadir untuk mempertemukan
                petani langsung dengan konsumen, tanpa perantara, agar hasil
                terbaik bisa dinikmati dan harga yang adil bisa dinikmati kedua
                belah pihak.
              </p>

              <Link to="#how-it-works">
                <ArrowButton label="Lihat Cara Kami Bekerja" />
              </Link>
            </div>
          </div>
          <div className="col-span-6">
            <div className="grid grid-cols-12 grid-rows-12 gap-4 min-h-[400px]">
              <div className="col-span-4 row-span-12">
                <div className="grid grid-rows-12 gap-4 h-full">
                  <div className="row-span-4">
                    <div className="bg-gray-200 w-full h-full rounded-lg shadow-md"></div>
                  </div>
                  <div className="row-span-8">
                    <div className="bg-gray-200 w-full h-full rounded-lg shadow-md"></div>
                  </div>
                </div>
              </div>
              <div className="col-span-8 row-span-2"></div>
              <div className="col-span-8 row-span-10">
                <div className="bg-gray-200 w-full h-full rounded-lg shadow-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
