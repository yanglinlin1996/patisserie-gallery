"use client"

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { CakeIcon, WheatIcon, CookieIcon } from "lucide-react";
import BakedGoodsList from "./bakedgoodslist";

const BakeryTabs = ({ bakedGoods, isGalleryView }) => (
  <Tabs defaultValue="cakes" className="w-full">
    <TabsList className="w-full justify-center mb-8">
      <TabsTrigger value="cakes" className="flex items-center">
        <CakeIcon className="mr-2 h-5 w-5" />
        Cakes
      </TabsTrigger>
      <TabsTrigger value="breads" className="flex items-center">
        <WheatIcon className="mr-2 h-5 w-5" />
        Breads
      </TabsTrigger>
      <TabsTrigger value="cookies" className="flex items-center">
        <CookieIcon className="mr-2 h-5 w-5" />
        Cookies
      </TabsTrigger>
    </TabsList>
    {Object.entries(bakedGoods).map(([category, items]) => (
      <TabsContent key={category} value={category}>
        <BakedGoodsList items={items} isGalleryView={isGalleryView} />
      </TabsContent>
    ))}
  </Tabs>
);

export default BakeryTabs;