import { Link } from "@remix-run/react";
import { CSSProperties, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Transition, TransitionStatus } from "react-transition-group";
import { navMenus } from "~/constants/menu";

const defaultStyle = {
  transition: `transform 500ms ease-in-out`,
  transform: "translateY(-200%)",
};

const transitionStyles: Record<TransitionStatus, CSSProperties> = {
  entering: { transform: "translateY(0%)" },
  entered: { transform: "translateY(0%)" },
  exiting: { transform: "translateY(-200%)" },
  exited: { transform: "translateY(-200%)" },
  unmounted: { transform: "translateY(-200%)" },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <nav className="fixed inset-x-0 top-0 z-10">
      <div className="border-b border-b-gray-200 bg-white/20 backdrop-blur-md relative z-[2]">
        <div className="container mx-auto flex items-center justify-between py-3 md:py-5">
          <div className="w-[125px]">
            <Link to="/">
              <div className="h-10 w-full relative overflow-hidden">
                <img
                  src="/logo-black.png"
                  alt="logo"
                  className="w-full h-full object-contain transform -translate-y-0.5"
                />
              </div>
            </Link>
          </div>
          <div className="flex-1 hidden lg:flex items-center justify-center gap-8">
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
          <div className="w-[125px] hidden lg:block">
            <a href="https://lynk.id/praniid" target="_blank" rel="noreferrer">
              <button className="btn btn-primary">
                <span>Produk Kami</span>
              </button>
            </a>
          </div>
          <div className="block lg:hidden">
            <button
              className="btn bg-gray-50 hover:bg-gray-100 !p-2 text-gray-500"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <Transition unmountOnExit nodeRef={nodeRef} in={isOpen} timeout={500}>
        {(state) => {
          return (
            <div
              ref={nodeRef}
              className="bg-white/20 backdrop-blur-md relative z-[1] lg:hidden"
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <div className="container px-5 py-8">
                <div className="mb-8 w-full flex flex-col items-end gap-8 justify-center">
                  {navMenus.map((menu, index) => {
                    return (
                      <Link
                        key={index}
                        to={menu.href}
                        onClick={() => setIsOpen(false)}
                        className="relative group flex items-center transform translate-y-[2px]"
                      >
                        <span>{menu.label}</span>
                        <div className="w-1 rounded-md bg-primary transition-all duration-300 h-6 ml-6 opacity-0 group-hover:opacity-100" />
                      </Link>
                    );
                  })}
                  <a
                    href="https://lynk.id/praniid"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full"
                  >
                    <button className="btn btn-primary w-full">
                      <span>Produk Kami</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        }}
      </Transition>
    </nav>
  );
};

export default Navbar;
