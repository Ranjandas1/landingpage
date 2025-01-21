import workspace from "../assets/workspace.jpeg";

export function Workspace() {
  return (
    <div className="h-[70vh] px-4 py-2 flex mb-20">
      <div className=" relative container mx-auto">
        <div className="absolute inset-0">
          <img
            src={workspace}
            alt="Hero background"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 bg-gray-900/80 rounded-lg">
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold mb-6">
            Where History, Art, and Innovation Meet.
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mb-8">
            At Museum, we believe every artifact has a story, every exhibit
            sparks curiosity, and every visitor becomes part of a larger
            journey. Step into our carefully curated spaces and uncover the
            connections between the past, present, and future.
          </p>
          <a
            className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-center text-base font-medium text-black 
          hover:bg-gray-100 transition-colors"
          >
            Discover
          </a>
        </div>
      </div>
    </div>
  );
}
