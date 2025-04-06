import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Prani" },
    { name: "description", content: "Coming Soon - Prani" },
  ];
};

export default function Index() {
  return (
    <main className="font-sans relative overflow-hidden w-screen bg-gradient-to-bl from-[#8dc864] to-[#285b02] text-white">
      <div className="flex items-center justify-center text-center flex-col min-h-screen p-4 relative z-50">
        <img
          src="/logo.png"
          alt="Logo Prani"
          className="h-[60px] object-contain mb-10"
        />
        <h1 className="text-[4.5rem] leading-tight md:leading-normal tracking-wide font-bold mb-10">
          Coming Soon
        </h1>
        <h3 className="max-w-[700px] mx-auto text-xl leading-relaxed tracking-wide mb-10">
          Platform kami akan segera hadir untuk mendukung petani lokal dan
          nikmati produk berkualitas langsung dari sumbernya.
        </h3>
        <a
          href="https://www.instagram.com/prani_id"
          target="_blank"
          rel="noreferrer"
        >
          <button className="border border-white rounded-md px-6 py-4 text-lg min-w-[200px] hover:bg-white transition-colors duration-300 hover:text-[#285b02]">
            Instagram Kami
          </button>
        </a>
      </div>

      <div className="w-[500px] h-[500px] rounded-full bg-white/10 absolute -bottom-[150px] -left-[200px] animate-[bounce_10s_ease-in-out_infinite]" />
      <div className="w-[600px] h-[600px] rounded-full bg-white/10 absolute -bottom-[380px] -left-[100px] animate-[bounce_10s_0.5s_ease-in-out_infinite]" />

      <div className="hidden lg:block w-[500px] h-[500px] rounded-full bg-white/10 absolute -bottom-[150px] -right-[200px] animate-[bounce_10s_ease-in-out_infinite]" />
      <div className="hidden lg:block w-[600px] h-[600px] rounded-full bg-white/10 absolute -bottom-[380px] -right-[100px] animate-[bounce_10s_0.5s_ease-in-out_infinite]" />
    </main>
  );
}
