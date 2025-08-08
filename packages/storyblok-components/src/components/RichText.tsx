import * as React from "react";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

export interface RichTextProps {
  blok: {
    content: any; // Rich text document
    text_align?: "left" | "center" | "right";
    max_width?: "sm" | "md" | "lg" | "xl" | "full";
  };
}

export const RichText: React.FC<RichTextProps> = ({ blok }) => {
  const { content, text_align = "left", max_width = "full" } = blok;

  if (!content) return null;

  const containerClasses = [
    "sb-rich-text",
    "prose",
    "prose-gray",
    "max-w-none",
    {
      "text-left": text_align === "left",
      "text-center": text_align === "center",
      "text-right": text_align === "right",
      "max-w-sm": max_width === "sm",
      "max-w-md": max_width === "md",
      "max-w-lg": max_width === "lg",
      "max-w-xl": max_width === "xl",
      "max-w-full": max_width === "full",
    },
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div {...storyblokEditable(blok)} className={containerClasses}>
      {render(content)}
    </div>
  );
};
