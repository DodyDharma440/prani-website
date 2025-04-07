import { Link } from "@remix-run/react";
import { navMenus } from "~/constants/menu";
import { SiShopee } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 border-b border-b-gray-200 bg-white/20 backdrop-blur-sm">
      <div className="container mx-auto flex items-center py-5">
        <div>
          <h1 className="font-bold text-2xl">Prani</h1>
        </div>
        <div className="flex-1 flex items-center justify-center gap-8">
          {navMenus.map((menu, i) => {
            return (
              <div key={i}>
                <Link
                  to={menu.href}
                  className=" transition-colors duration-300 hover:text-secondary"
                >
                  {menu.label}
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <a href="https://shopee.co.id" target="_blank" rel="noreferrer">
            <button className="px-4 py-2 rounded-md bg-primary text-white flex items-center gap-2">
              <SiShopee size={18} className="mb-0.5" />
              <span>Lihat Shopee</span>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
