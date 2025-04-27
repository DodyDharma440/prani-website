import { Link } from "@remix-run/react";
import { ArrowButton, SectionTitle } from "~/components";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-6">
            <div className="relative transform -translate-x-10">
              <div className="min-h-[400px] bg-gray-200 rounded-r-2xl relative z-[3]"></div>
              <div className="absolute w-3/4 h-[300px] bg-primary/10 -bottom-4 rounded-2xl -right-10"></div>
              <div className="absolute h-3/4 w-[300px] bg-primary/10 -top-8 rounded-r-2xl -left-10"></div>
            </div>
          </div>
          <div className="col-span-6">
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
