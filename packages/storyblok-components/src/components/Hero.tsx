import * as React from "react";
import { storyblokEditable } from "@storyblok/react";
import classNames from "classnames";

export interface HeroProps {
  blok: {
    title: string;
    subtitle?: string;
    description?: string;
    background_image?: {
      filename: string;
      alt: string;
    };
    cta_text?: string;
    cta_link?: {
      url: string;
      linktype: string;
    };
    theme?: "light" | "dark" | "brand";
  };
}

export const Hero: React.FC<HeroProps> = ({ blok }) => {
  const {
    title,
    subtitle,
    description,
    background_image,
    cta_text,
    cta_link,
    theme = "light",
  } = blok;

  const heroClasses = classNames(
    "sb-hero",
    "relative",
    "overflow-hidden",
    "py-20",
    "px-4",
    {
      "bg-white text-gray-900": theme === "light",
      "bg-gray-900 text-white": theme === "dark",
      "bg-blue-600 text-white": theme === "brand",
    }
  );

  return (
    <section {...storyblokEditable(blok)} className={heroClasses}>
      {background_image?.filename && (
        <div className="absolute inset-0 z-0">
          <img
            src={background_image.filename}
            alt={background_image.alt || "Background"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {subtitle && (
          <p className="text-sm uppercase tracking-wide font-semibold mb-4 opacity-80">
            {subtitle}
          </p>
        )}

        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>

        {description && (
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {description}
          </p>
        )}

        {cta_text && cta_link?.url && (
          <a
            href={cta_link.url}
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            target={cta_link.linktype === "url" ? "_blank" : "_self"}
            rel={
              cta_link.linktype === "url" ? "noopener noreferrer" : undefined
            }
          >
            {cta_text}
          </a>
        )}
      </div>
    </section>
  );
};
