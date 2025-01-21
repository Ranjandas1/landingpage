import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "New Arrivals",
    image:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-01.jpg",
  },
  {
    title: "Productivity",
    image:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-02.jpg",
  },
  {
    title: "Workspace",
    image:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-04.jpg",
  },
  {
    title: "Accessories",
    image:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-05.jpg",
  },
  {
    title: "Sale",
    image:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-03.jpg",
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
          <div className="overflow-x-auto flex justify-between space-x-6 pb-4">
            {categories.map((category, index) => (
              <a key={index} href="#" className="group block text-center">
                {/* Image Wrapper */}
                <div className="relative w-64 overflow-hidden rounded-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-cover object-center group-hover:opacity-60"
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
