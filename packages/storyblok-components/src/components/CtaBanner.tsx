import React from "react";
import { StoryblokCtaBanner } from "../types/storyblok";

export interface CtaBannerProps {
  blok: StoryblokCtaBanner;
}

// Background color mappings
const backgroundColors = {
  primary: "bg-blue-600 text-white",
  secondary: "bg-purple-600 text-white",
  white: "bg-white text-gray-900",
  gray: "bg-gray-100 text-gray-900",
  dark: "bg-gray-900 text-white",
};

// CTA button styles based on background
const ctaButtonStyles = {
  primary: "bg-white text-blue-600 hover:bg-gray-100",
  secondary: "bg-white text-purple-600 hover:bg-gray-100",
  white: "bg-blue-600 text-white hover:bg-blue-700",
  gray: "bg-blue-600 text-white hover:bg-blue-700",
  dark: "bg-blue-600 text-white hover:bg-blue-700",
};

export function CtaBanner({ blok }: CtaBannerProps) {
  const {
    title,
    description,
    ctaText,
    ctaLink,
    image,
    formEmbedCode,
    backgroundColor = "primary",
    alignment = "centered",
    variant = "centered-text",
  } = blok;

  const bgColorClass = backgroundColors[backgroundColor];
  const buttonClass = ctaButtonStyles[backgroundColor];

  // Render different variants
  const renderCenteredText = () => (
    <div data-cy="cta-banner" className={`py-16 px-4 ${bgColorClass} text-center`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 data-cy="cta-title" className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {description && (
          <p data-cy="cta-description" className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">{description}</p>
        )}
        <a
          data-cy="cta-button"
          href={ctaLink.url}
          target={ctaLink.target || "_self"}
          className={`inline-block px-8 py-3 rounded-lg font-semibold text-lg transition-colors ${buttonClass}`}
        >
          {ctaText}
        </a>
      </div>
    </div>
  );

  const renderSplitLayout = () => (
    <div data-cy="cta-banner" className={`${bgColorClass} lg:flex-row`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
          {/* Content Side */}
          <div className="flex items-center justify-center p-8 lg:p-12">
            <div className="max-w-lg">
              <h2 data-cy="cta-title" className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
              {description && <p data-cy="cta-description" className="text-lg mb-8 opacity-90">{description}</p>}
              <a
                data-cy="cta-button"
                href={ctaLink.url}
                target={ctaLink.target || "_self"}
                className={`inline-block px-8 py-3 rounded-lg font-semibold text-lg transition-colors ${buttonClass}`}
              >
                {ctaText}
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative overflow-hidden lg:order-last">
            {image?.filename ? (
              <img
                src={image.filename}
                alt={image.alt || title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white opacity-50">Image Placeholder</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderWithForm = () => (
    <div data-cy="cta-banner" className={`py-16 px-4 ${bgColorClass}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <h2 data-cy="cta-title" className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            {description && <p data-cy="cta-description" className="text-lg mb-8 opacity-90">{description}</p>}

            {/* Fallback CTA if form is not available */}
            <a
              data-cy="cta-button"
              href={ctaLink.url}
              target={ctaLink.target || "_self"}
              className={`inline-block px-8 py-3 rounded-lg font-semibold text-lg transition-colors ${buttonClass}`}
            >
              {ctaText}
            </a>
          </div>

          {/* Form Side */}
          <div data-cy="cta-form" className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            {formEmbedCode ? (
              <div className="form-embed" dangerouslySetInnerHTML={{ __html: formEmbedCode }} />
            ) : (
              // Placeholder form when no embed code is provided
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Start Your Journey</h3>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                  </button>
                </div>
                <p className="text-xs opacity-75 text-center">
                  By submitting, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Render based on variant
  switch (variant) {
    case "split-layout":
      return renderSplitLayout();
    case "with-form":
      return renderWithForm();
    case "centered-text":
    default:
      return renderCenteredText();
  }
}

// Export for use in component registry
export default CtaBanner;
