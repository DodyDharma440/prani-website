const Hero = () => {
  return (
    <section className="section">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary/55 to-green-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="container lg:max-w-3xl py-24 md:py-32">
          <div className="mb-4 md:mb-8 flex justify-center">
            <div className="relative rounded-full px-4 py-1 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Harga <span className="text-primary font-bold">Adil</span>, Hasil{" "}
              <span className="text-primary font-bold">Maksimal</span>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-gray-900">
              Menghubungkan Petani Langsung ke Pembeli.
            </h1>
            <p className="mt-8 text-pretty text-base md:text-lg font-medium text-gray-500 sm:text-xl/8">
              Beli hasil petani tanpa perantara. Dengan Prani, hasil kerja keras
              petani dihargai sepenuhnya dan kamu mendapat hasil terbaik
              langsung dari sumbernya.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="btn btn-primary text-base md:text-lg md:!px-6 md:!py-3">
                Lihat Produk
              </button>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
