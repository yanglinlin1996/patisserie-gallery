import React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "../../components/ui/card";

const BakedGoodCard = ({ item, isGalleryView }) => (
  <Card
    className={`overflow-hidden ${
      isGalleryView
        ? "shadow-none"
        : "shadow-lg hover:shadow-xl transition-shadow duration-300"
    }`}
  >
    <Image
      src={item.image}
      alt={item.name}
      width={300}
      height={400}
      className={`w-full ${isGalleryView ? "h-full" : "h-48"} object-cover`}
    />
    {!isGalleryView && (
      <>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-amber-800">
            {item.name}
          </h3>
          <p className="text-amber-700">{item.description}</p>
        </CardContent>
        <CardFooter className="bg-amber-100 p-4">
          <button className="bg-amber-600 text-amber-50 px-4 py-2 rounded-full hover:bg-amber-700 transition-colors duration-300 w-full">
            View Recipe
          </button>
        </CardFooter>
      </>
    )}
  </Card>
);

export default BakedGoodCard;