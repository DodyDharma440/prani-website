import { Link } from "@remix-run/react";
import { navMenus } from "~/constants/menu";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 border-b border-b-gray-200 bg-white/20 backdrop-blur-sm z-10">
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
          <a href="https://lynk.id" target="_blank" rel="noreferrer">
            <button className="btn btn-primary">
              <span>Produk Kami</span>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
