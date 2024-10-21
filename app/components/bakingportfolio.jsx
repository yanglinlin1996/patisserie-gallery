"use client"

import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import ViewToggle from "./viewtoggle";
import BakeryTabs from "./bakerytabs";

// Sample data for baked goods
const bakedGoods = {
  cakes: [
    {
      id: 1,
      name: "Chocolate Cake",
      image: "/images/cake/chocolate_cake.jpg",
      description: "Rich, moist chocolate cake with chocolate frosting",
    },
    {
      id: 2,
      name: "Chocolate Leaves Cake",
      image: "/images/cake/chocolate_leaves_cake.jpg",
      description: "Light sponge cake with fresh strawberries and cream",
    },
    {
      id: 3,
      name: "Lemon Drizzle Cake",
      image: "/placeholder.svg?height=200&width=200",
      description: "Zesty lemon cake with a tangy lemon glaze",
    },
  ],
  breads: [
    {
      id: 4,
      name: "Sourdough Bread",
      image: "/placeholder.svg?height=200&width=200",
      description: "Artisanal sourdough bread with a crispy crust",
    },
    {
      id: 5,
      name: "Banana Bread",
      image: "/placeholder.svg?height=200&width=200",
      description: "Moist banana bread with walnuts",
    },
    {
      id: 6,
      name: "Focaccia",
      image: "/placeholder.svg?height=200&width=200",
      description: "Italian flatbread with rosemary and olive oil",
    },
  ],
  cookies: [
    {
      id: 7,
      name: "Chocolate Chip Cookies",
      image: "/placeholder.svg?height=200&width=200",
      description: "Classic homemade chocolate chip cookies",
    },
    {
      id: 8,
      name: "Oatmeal Raisin Cookies",
      image: "/placeholder.svg?height=200&width=200",
      description: "Chewy oatmeal cookies with plump raisins",
    },
    {
      id: 9,
      name: "Snickerdoodles",
      image: "/placeholder.svg?height=200&width=200",
      description: "Soft cinnamon sugar cookies",
    },
  ],
};

const BakingPortfolio = () => {
  const [isGalleryView, setIsGalleryView] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 to-amber-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-amber-800 mb-8 text-center">
          My Homemade Delights
        </h2>
        <ViewToggle
          isGalleryView={isGalleryView}
          setIsGalleryView={setIsGalleryView}
        />
        <BakeryTabs bakedGoods={bakedGoods} isGalleryView={isGalleryView} />
      </main>
      <Footer />
    </div>
  );
};

export default BakingPortfolio;
