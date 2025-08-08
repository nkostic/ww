import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import classNames from "classnames";
import * as React from "react";

export interface GridProps {
  blok: {
    columns: number;
    gap?: string;
    items: Array<{
      _uid?: string;
      component?: string;
      [key: string]: unknown;
    }>;
    responsive?: boolean;
  };
}

export const Grid: React.FC<GridProps> = ({ blok }) => {
  const { columns = 3, gap = "md", items, responsive = true } = blok;

  const gridClasses = classNames("sb-grid", "grid", {
    "grid-cols-1": !responsive,
    "grid-cols-1 md:grid-cols-2 lg:grid-cols-3": responsive && columns === 3,
    "grid-cols-1 md:grid-cols-2": responsive && columns === 2,
    "grid-cols-1 md:grid-cols-4": responsive && columns === 4,
    [`grid-cols-${columns}`]: !responsive,
    "gap-4": gap === "sm",
    "gap-8": gap === "md",
    "gap-12": gap === "lg"
  });

  return (
    <div {...storyblokEditable(blok)} className={gridClasses}>
      {items.map((item, index) => (
        <StoryblokComponent blok={item} key={item._uid || index} />
      ))}
    </div>
  );
};
