import hero from "../assets/hero.png";

export function Hero() {
  return (
    <div className="relative h-[80vh]">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Hero background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 bg-gray-900/20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Welcome to Museum
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl">
          Step into a world of wonder, where history, art, and culture come to
          life. At Museum, we invite you to explore our rich collection of
          exhibits, curated to ignite your curiosity and spark your imagination.
        </p>
        <a
          className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-center text-base font-medium text-black 
          hover:bg-gray-100 transition-colors"
        >
          Explore
        </a>
      </div>
    </div>
  );
}
