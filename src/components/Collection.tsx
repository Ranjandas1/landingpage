import React from "react";

const collections = [
  {
    title: "Handcrafted Collection",
    description:
      "Keep your phone, keys, and wallet together, so you can lose everything at once.",
    image:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-01.jpg",
  },
  {
    title: "Organized Desk Collection",
    description:
      "The rest of the house will still be a mess, but your desk will look great.",
    image:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-02.jpg",
  },
  {
    title: "Focus Collection",
    description:
      "Be more productive than enterprise project managers with a single piece of paper.",
    image:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-03.jpg",
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
                  className="aspect-w-4 aspect-h-3 w-full rounded-lg object-cover group-hover:opacity-75"
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
