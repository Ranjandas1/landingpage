import React from "react";

const Collection = () => {
  return (
    <section aria-labelledby="collection-heading" className="container mx-auto">
      <h2
        id="collection-heading"
        className="text-2xl font-bold tracking-tight text-gray-900"
      >
        Shop by Collection
      </h2>
      <p className="mt-2 text-base text-gray-500">
        Each season, we collaborate with world-class designers to create a
        collection inspired by the natural world.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
        <a href="#" className="group block">
          <img
            alt="Brown leather key ring with brass metal loops and rivets on wood table."
            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-01.jpg"
            className="aspect-w-4 aspect-h-3 w-full rounded-lg object-cover group-hover:opacity-75"
          />
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            Handcrafted Collection
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Keep your phone, keys, and wallet together, so you can lose
            everything at once.
          </p>
        </a>
        <a href="#" className="group block">
          <img
            alt="Natural leather mouse pad on white desk next to porcelain mug and keyboard."
            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-02.jpg"
            className="aspect-w-4 aspect-h-3 w-full rounded-lg object-cover group-hover:opacity-75"
          />
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            Organized Desk Collection
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            The rest of the house will still be a mess, but your desk will look
            great.
          </p>
        </a>
        <a href="#" className="group block">
          <img
            alt="Person placing task list card into walnut card holder next to felt carrying case on leather desk pad."
            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-03.jpg"
            className="aspect-w-4 aspect-h-3 w-full rounded-lg object-cover group-hover:opacity-75"
          />
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            Focus Collection
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Be more productive than enterprise project managers with a single
            piece of paper.
          </p>
        </a>
      </div>
    </section>
  );
};

export default Collection;

<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
    New arrivals are here
  </h1>
  <p className="mt-4 text-lg text-gray-500">
    The new arrivals have, well, newly arrived. Check out the latest options
    from our summer small-batch release while they're still in stock.
  </p>
  <a
    href="#"
    className="mt-8 inline-block rounded-md bg-indigo-600 px-6 py-3 text-center text-base font-medium text-white shadow-sm hover:bg-indigo-700"
  >
    Shop New Arrivals
  </a>
</div>;

{
  /* <div className="absolute bottom-0 left-0 right-0 pb-5">
  <h3 className="text-xl text-center font-semibold text-white">
    {category.title}
  </h3>
</div>; */
}

// import React from "react";
// import { ArrowRight } from "lucide-react";

// const categories = [
//   {
//     title: "New Arrivals",
//     image:
//       "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-01.jpg",
//   },
//   {
//     title: "Productivity",
//     image:
//       "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-02.jpg",
//   },
//   {
//     title: "Workspace",
//     image:
//       "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-04.jpg",
//   },
//   {
//     title: "Accessories",
//     image:
//       "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-05.jpg",
//   },
//   {
//     title: "Sale",
//     image:
//       "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-03.jpg",
//   },
// ];

// export function Category() {
//   return (
//     <div className="px-4 py-2 flex items-center justify-center mb-24 mt-28">
//       <div className="container mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <p className="font-semibold text-lg sm:text-2xl">
//             Browse by Category
//           </p>
//           <a
//             href="#"
//             className="flex items-center text-sm sm:text-lg text-purple-600 hover:text-purple-700"
//           >
//             Browse all categories
//             <ArrowRight className="ml-1 h-4 w-4" />
//           </a>
//         </div>

//         {/* Category Cards Container */}
//         <div className="relative">
//           <div className="overflow-x-auto flex justify-between space-x-6 pb-4">
//             {categories.map((category, index) => (
//               <a key={index} href="#" className="group block text-center">
//                 {/* Image Wrapper */}
//                 <div className="relative w-64 overflow-hidden rounded-lg">
//                   <img
//                     src={category.image}
//                     alt={category.title}
//                     className="h-full w-full object-cover object-center group-hover:opacity-60"
//                   />
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-gray-900/0" />
//                   {/* Title */}
//                   <div className="absolute bottom-0 left-0 right-0 pb-5">
//                     <h3 className="text-xl text-center font-semibold text-white">
//                       {category.title}
//                     </h3>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { ArrowRight } from "lucide-react";

// const categories = [
//   {
//     title: "New Arrivals",
//     image:
//       "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-01.jpg",
//   },
//   {
//     title: "Productivity",
//     image:
//       "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-02.jpg",
//   },
//   {
//     title: "Workspace",
//     image:
//       "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-04.jpg",
//   },
//   {
//     title: "Accessories",
//     image:
//       "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-05.jpg",
//   },
//   {
//     title: "Sale",
//     image:
//       "https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-03.jpg",
//   },
// ];

// export function Category() {
//   return (
//     <div className="px-4 py-2 flex items-center justify-center mb-24 mt-28">
//       <div className="container mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <p className="font-semibold text-lg sm:text-2xl">
//             Browse by Category
//           </p>
//           <a
//             href="#"
//             className="flex items-center text-sm sm:text-lg text-purple-600 hover:text-purple-700"
//           >
//             Browse all categories
//             <ArrowRight className="ml-1 h-4 w-4" />
//           </a>
//         </div>

//         {/* Category Cards Container */}
//         <div className="relative">
//           <div className="flex justify-between overflow-x-auto pb-4 snap-x snap-mandatory gap-8 sm:gap-8">
//             {categories.map((category, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className="group relative overflow-hidden flex-none rounded-lg h-[20rem] w-[14rem]"
//               >
//                 {/* Image Wrapper */}
//                 <div className="relative h-full w-full">
//                   <img
//                     src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-01.jpg"
//                     alt={category.title}
//                     className="object-cover group-hover:opacity-70 transition-opacity duration-300 h-full w-full"
//                   />
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-gray-900/0" />
//                   {/* Title */}
//                   <div className="absolute bottom-0 left-0 right-0 pb-5">
//                     <h3 className="text-xl text-center font-semibold text-white">
//                       {category.title}
//                     </h3>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
