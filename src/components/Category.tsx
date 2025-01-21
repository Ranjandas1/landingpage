import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Photography",
    image:
      "https://content3.jdmagicbox.com/v2/comp/bangalore/p4/080pxx80.xx80.191112210907.h8p4/catalogue/museum-of-art-and-photography-shanthala-nagar-bangalore-museums-in1tr8mvnb.jpg",
  },
  {
    title: "Pre-Mordern Art",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQr8zg-3SIn-EFBlgHqgED8YTzo1bd9CwjvA&s",
  },
  {
    title: "Propular Culture",
    image:
      "https://cdn.artandobject.com/sites/default/files/styles/slideshow_image/public/petrus-christus-goldsmith-his-shop-1449-oil-oak-panel.jpg?itok=yJMLUCKG",
  },
  {
    title: "Texttile,crafts",
    image: "https://www.mashindia.com/wp-content/uploads/2024/08/5.jpg",
  },
  {
    title: "Living Traditions",
    image:
      "https://www.mapinpub.com/cdn/shop/products/LivingTraditionsinIndianArt01_1024x.jpg?v=1664279116",
  },
];

export function Category() {
  return (
    <div className="px-4 py-2 flex items-center justify-center mb-24 mt-28">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="font-semibold text-lg sm:text-2xl">
            Browse by Category
          </p>
          <a
            href="#"
            className="flex items-center text-sm sm:text-lg text-purple-600 hover:text-purple-700"
          >
            Browse all categories
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>

        {/* Category Cards Container */}
        <div className="relative">
          <div className="overflow-x-auto flex justify-between space-x-6 pb-4 ">
            {categories.map((category, index) => (
              <a key={index} href="#" className="group block text-center ">
                {/* Image Wrapper */}
                <div className="relative w-64 overflow-hidden rounded-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-96 w-full object-cover object-center group-hover:opacity-60"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-gray-900/0" />
                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 pb-5">
                    <h3 className="text-xl text-center font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
