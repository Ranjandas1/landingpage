const collections = [
  {
    title: "Timeless Treasures: The Ancient World",
    description:
      "Unearth artifacts from ancient civilizations, including tools, pottery, and sculptures that illuminate the daily lives and spiritual beliefs of our ancestors.",
    image:
      "https://images.stockcake.com/public/f/0/3/f031ffc4-063b-4301-89d7-c9c27d406e0d_large/ancient-artifacts-displayed-stockcake.jpg",
  },
  {
    title: "Masters of the Canvas: The Art of the Ages",
    description:
      "Explore a stunning gallery of paintings and drawings from classical to contemporary masters, showcasing the evolution of artistic expression through the centuries.",
    image:
      "https://www.sophieploeg.com/wp-content/uploads/2016/05/queensgallery-2.jpg",
  },
  {
    title: "Nature’s Masterpieces: The Natural History Collection",
    description:
      "Marvel at fossils, gemstones, and preserved specimens that tell the story of Earth’s evolution and its diverse ecosystems..",
    image:
      "https://th-thumbnailer.cdn-si-edu.com/trgQ6zvE1jRDtkGIMUS3EGDjQYA=/1000x750/filters:no_upscale():focal(800x533:801x534)/https%3A%2F%2Ftf-cmsv2-smithsonianmag-media.s3.amazonaws.com%2Ffiler_public%2Fbc%2Fb1%2Fbcb114e8-0659-4b09-80ac-a6ee05f5b1e9%2Fcollections_iz_credit_chip_clark_smithsonian_institution_1.jpg",
  },
];

export default function Collection() {
  return (
    <div className="px-4 py-8 flex items-center justify-center mb-20">
      <div className="container mx-auto">
        <p className="text-2xl font-bold tracking-tight text-gray-900">
          Browse by Collection
        </p>
        <p className="mt-2 text-base text-gray-500">
          Each season, we collaborate with world-class designers to create a
          collection inspired by the natural world.
        </p>
        <div>
          <div className="mt-10 grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
            {collections.map((collection) => (
              <a href="#" className="group block">
                <img
                  alt={collection.title}
                  src={collection.image}
                  className="aspect-w-4 aspect-h-3 h-[30rem] w-full rounded-lg object-cover group-hover:opacity-75"
                />
                <p className="mt-4 text-lg font-medium text-gray-900">
                  {collection.title}
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  {collection.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
