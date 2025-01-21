import { useState } from "react";
import { NavBar } from "./components/NavBar";

import { Hero } from "./components/Hero";
import { SideBar } from "./components/SideBar";
import { Category } from "./components/Category";
import { Workspace } from "./components/Workspace";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigation = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <div className="min-h-screen">
        <TopBar />
        <NavBar onOpenSidebar={() => setIsSidebarOpen(true)} />
        <SideBar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onNavigate={handleNavigation}
        />
        <Hero />
        <Category />
        <Workspace />
        <Collection />
        <Workspace />
        <Footer />
      </div>
    </>
  );
};

export default App;
