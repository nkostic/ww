import * as React from "react";
import { storyblokEditable } from "@storyblok/react";
import classNames from "classnames";

export interface FeatureProps {
  blok: {
    title: string;
    description: string;
    icon?: string;
    image?: {
      filename: string;
      alt: string;
    };
    layout?: "vertical" | "horizontal";
  };
}

export const Feature: React.FC<FeatureProps> = ({ blok }) => {
  const { title, description, icon, image, layout = "vertical" } = blok;

  const featureClasses = classNames(
    "sb-feature",
    "p-6",
    "bg-white",
    "rounded-lg",
    "shadow-sm",
    "border",
    "border-gray-200",
    "hover:shadow-md",
    "transition-shadow",
    {
      "text-center": layout === "vertical",
      "flex items-center space-x-4": layout === "horizontal",
    }
  );

  return (
    <div {...storyblokEditable(blok)} className={featureClasses}>
      {(icon || image) && (
        <div
          className={classNames("mb-4", { "mb-0": layout === "horizontal" })}
        >
          {image?.filename ? (
            <img
              src={image.filename}
              alt={image.alt || title}
              className="w-16 h-16 object-cover rounded-lg mx-auto"
            />
          ) : icon ? (
            <div className="text-4xl">{icon}</div>
          ) : null}
        </div>
      )}

      <div className={layout === "horizontal" ? "flex-1" : ""}>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>

        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
