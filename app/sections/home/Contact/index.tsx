import { Link } from "@remix-run/react";
import { ArrowButton, SectionTitle } from "~/components";

const Contact = () => {
  return (
    <section
      className="section overflow-hidden md:overflow-visible"
      id="contact"
    >
      <div className="container">
        <div className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-6">
            <div className="relative transform -translate-x-10 group">
              <div className="min-h-[400px] bg-gray-200 rounded-r-2xl relative z-[3] transition-transform duration-700 group-hover:-translate-y-2"></div>
              <div className="absolute w-3/4 h-[300px] bg-primary/10 transition-all duration-700 rounded-2xl -bottom-4 -right-10 group-hover:-bottom-6 group-hover:-right-12"></div>
              <div className="absolute h-3/4 w-[300px] bg-primary/10 transition-all duration-700 rounded-r-2xl -top-8 -left-10 group-hover:-top-10 group-hover:-left-12"></div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <SectionTitle
              subtitle="KONTAK KAMI"
              title={<>Hubungi Kami untuk Informasi Lebih Lanjut</>}
            />
            <p className="description mb-6">
              Punya pertanyaan atau ingin bekerja sama? Jangan ragu untuk
              menghubungi kami. Kami siap membantu Anda kapan saja.
            </p>
            <Link to="#">
              <ArrowButton label="Hubungi Via WhatsApp" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
