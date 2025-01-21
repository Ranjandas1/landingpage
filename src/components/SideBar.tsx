import { X } from "lucide-react";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
};

export function SideBar({ isOpen, onClose, onNavigate }: SidebarProps) {
  const handleNavigation = (page: string) => {
    onNavigate(page);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="absolute inset-0 bg-white bg-opacity-50"
        onClick={onClose}
      />
      <div
        className={`absolute top-0 left-0 w-64 h-full bg-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 items-center">
          <div className="flex justify-end">
            <button onClick={onClose} className="mb-4 ">
              <X className="h-6 w-6 " />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            <button
              onClick={() => handleNavigation("Collection")}
              className=" hover:text-gray-300 text-center"
            >
              Collection
            </button>
            <button
              onClick={() => handleNavigation("Category")}
              className=" hover:text-gray-300 text-center"
            >
              Category
            </button>
            <button
              onClick={() => handleNavigation("company")}
              className=" hover:text-gray-300 text-center"
            >
              Company
            </button>
            <button
              onClick={() => handleNavigation("stores")}
              className=" hover:text-gray-300 text-center"
            >
              Stores
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
