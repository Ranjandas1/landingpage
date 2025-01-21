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
          New arrivals are here
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl">
          The new arrivals have, well, newly arrived. Check out the latest
          options from our summer small-batch release while they're still in
          stock.
        </p>
        <a
          className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-center text-base font-medium text-black 
          hover:bg-gray-100 transition-colors"
        >
          Shop New Arrivals
        </a>
      </div>
    </div>
  );
}
