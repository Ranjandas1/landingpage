import workspace from "../assets/workspace.jpg";

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
            Level upyour desk
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mb-8">
            Make your desk beautiful and organized. Post a picture to social
            media and watch it get more likes than life-changing announcements.
            Reflect on the shallow nature of existence. At least you have a
            really nice desk setup.
          </p>
          <a
            className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-center text-base font-medium text-black 
          hover:bg-gray-100 transition-colors"
          >
            Shop Workspace
          </a>
        </div>
      </div>
    </div>
  );
}
