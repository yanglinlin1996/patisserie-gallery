import React from "react";
import BakedGoodCard from "./bakedgoods";

const BakedGoodsList = ({ items, isGalleryView }) => (
  <div
    className={`grid gap-8 ${
      isGalleryView
        ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    }`}
  >
    {items.map((item) => (
      <BakedGoodCard key={item.id} item={item} isGalleryView={isGalleryView} />
    ))}
  </div>
);

export default BakedGoodsList;
