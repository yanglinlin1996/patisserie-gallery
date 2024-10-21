"use client"

import React from "react";
import { Switch } from "../../components/ui/switch";
import { Label } from "../../components/ui/label";
import { GridIcon, LayoutListIcon } from "lucide-react";

const ViewToggle = ({ isGalleryView, setIsGalleryView }) => (
  <div className="flex justify-between items-center mb-6">
    <div className="flex items-center space-x-2">
      <Switch
        id="gallery-view"
        checked={isGalleryView}
        onCheckedChange={setIsGalleryView}
      />
      <Label htmlFor="gallery-view">Gallery View</Label>
    </div>
    {isGalleryView ? (
      <GridIcon className="h-6 w-6 text-amber-800" />
    ) : (
      <LayoutListIcon className="h-6 w-6 text-amber-800" />
    )}
  </div>
);

export default ViewToggle;