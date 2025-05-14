import { Link } from "@remix-run/react";
import { FaInstagram } from "react-icons/fa";
import { navMenus } from "~/constants/menu";

const Footer = () => {
  return (
    <footer className="section">
      <div className="bg-gray-50">
        <div className="container py-10">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="font-bold text-3xl mb-5">Prani</h2>
              <div className="max-w-[400px]">
                <p className="mb-3">
                  Tanpa perantara dan tanpa potongan harga. Dengan Prani, hasil
                  kerja keras petani dihargai sepenuhnya dan kamu mendapat hasil
                  terbaik langsung dari sumbernya.
                </p>
                <p className="text-gray-500">
                  Jl. Tukad Badung No.135, Renon, Denpasar Selatan, Kota
                  Denpasar, Bali 80226
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <h5 className="text-lg font-bold mb-4 text-secondary">Company</h5>
              <ul>
                {navMenus.map((menu, i) => {
                  return (
                    <li className="mb-3" key={i}>
                      <Link
                        to={menu.href}
                        className="transition-colors duration-300 hover:text-secondary"
                      >
                        {menu.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <h5 className="text-lg font-bold mb-4 text-secondary">
                Get in Touch
              </h5>
              <ul>
                <li className="mb-3">
                  <a href="mailto:" target="_blank" rel="noreferrer">
                    prani@gmail.com
                  </a>
                </li>
                <li className="mb-3">
                  <a href="tel:" target="_blank" rel="noreferrer">
                    +62 899-9999-999
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://instagram.com/prani_id"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex items-center gap-2">
                      <FaInstagram size={18} />
                      <span>Instagram</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary flex items-center justify-center">
        <div className="container py-6">
          <div className="flex items-center justify-center text-white text-sm">
            <p>
              Copyright &copy; 2025 Powered by{" "}
              <span className="font-bold">Prani</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
