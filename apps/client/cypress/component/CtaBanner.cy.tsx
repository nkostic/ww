import React from "react";
import { CtaBanner } from "@repo/storyblok-components/components";
import type { StoryblokCtaBanner } from "@repo/storyblok-components/types";

describe("CtaBanner Component", () => {
  const baseCta: StoryblokCtaBanner = {
    _uid: "test-cta",
    component: "cta_banner",
    title: "Test CTA Title",
    description: "Test CTA description",
    ctaText: "Click Me",
    ctaLink: {
      url: "/test",
      target: "_self",
    },
    backgroundColor: "primary",
    alignment: "centered",
    variant: "centered-text",
  };

  context("Centered Text Variant", () => {
    it("should render centered text variant correctly", () => {
      const centeredCta = { ...baseCta, variant: "centered-text" as const };

      cy.mount(<CtaBanner blok={centeredCta} />);

      cy.contains("Test CTA Title").should("be.visible");
      cy.contains("Test CTA description").should("be.visible");
      cy.contains("Click Me").should("be.visible");
      cy.get('a[href="/test"]').should("exist");
    });

    it("should apply primary background styling", () => {
      cy.mount(<CtaBanner blok={baseCta} />);

      cy.get(".bg-blue-600").should("exist");
      cy.get(".text-white").should("exist");
    });

    it("should render without description", () => {
      const ctaWithoutDesc = { ...baseCta, description: undefined };

      cy.mount(<CtaBanner blok={ctaWithoutDesc} />);

      cy.contains("Test CTA Title").should("be.visible");
      cy.contains("Click Me").should("be.visible");
    });
  });

  context("Split Layout Variant", () => {
    it("should render split layout with image", () => {
      const splitCta: StoryblokCtaBanner = {
        ...baseCta,
        variant: "split-layout",
        image: {
          filename: "https://via.placeholder.com/600x400",
          alt: "Test image",
        },
      };

      cy.mount(<CtaBanner blok={splitCta} />);

      cy.contains("Test CTA Title").should("be.visible");
      cy.get('img[alt="Test image"]').should("exist");
      cy.get(".grid").should("exist");
      cy.get(".lg\\:grid-cols-2").should("exist");
    });

    it("should render split layout without image (placeholder)", () => {
      const splitCta = { ...baseCta, variant: "split-layout" as const };

      cy.mount(<CtaBanner blok={splitCta} />);

      cy.contains("Image Placeholder").should("be.visible");
    });
  });

  context("With Form Variant", () => {
    it("should render with form variant and embedded form", () => {
      const formCta: StoryblokCtaBanner = {
        ...baseCta,
        variant: "with-form",
        formEmbedCode:
          '<form><input type="email" placeholder="Email" /><button type="submit">Submit</button></form>',
      };

      cy.mount(<CtaBanner blok={formCta} />);

      cy.contains("Test CTA Title").should("be.visible");
      cy.get('input[placeholder="Email"]').should("exist");
      cy.get('button[type="submit"]').should("contain", "Submit");
    });

    it("should render placeholder form when no embed code provided", () => {
      const formCta = { ...baseCta, variant: "with-form" as const };

      cy.mount(<CtaBanner blok={formCta} />);

      cy.contains("Start Your Journey").should("be.visible");
      cy.get('input[placeholder="Enter your email"]').should("exist");
      cy.get('input[placeholder="First Name"]').should("exist");
      cy.contains("Get Started").should("be.visible");
    });
  });

  context("Background Color Variants", () => {
    it("should render with white background", () => {
      const whiteCta = { ...baseCta, backgroundColor: "white" as const };

      cy.mount(<CtaBanner blok={whiteCta} />);

      cy.get(".bg-white").should("exist");
      cy.get(".text-gray-900").should("exist");
    });

    it("should render with secondary background", () => {
      const secondaryCta = { ...baseCta, backgroundColor: "secondary" as const };

      cy.mount(<CtaBanner blok={secondaryCta} />);

      cy.get(".bg-purple-600").should("exist");
      cy.get(".text-white").should("exist");
    });

    it("should render with gray background", () => {
      const grayCta = { ...baseCta, backgroundColor: "gray" as const };

      cy.mount(<CtaBanner blok={grayCta} />);

      cy.get(".bg-gray-100").should("exist");
      cy.get(".text-gray-900").should("exist");
    });

    it("should render with dark background", () => {
      const darkCta = { ...baseCta, backgroundColor: "dark" as const };

      cy.mount(<CtaBanner blok={darkCta} />);

      cy.get(".bg-gray-900").should("exist");
      cy.get(".text-white").should("exist");
    });
  });

  context("CTA Button Behavior", () => {
    it("should have correct href and target attributes", () => {
      cy.mount(<CtaBanner blok={baseCta} />);

      cy.get('a[href="/test"]').should("exist");
      cy.get('a[target="_self"]').should("exist");
    });

    it("should handle external links with _blank target", () => {
      const externalCta = {
        ...baseCta,
        ctaLink: {
          url: "https://external.com",
          target: "_blank" as const,
        },
      };

      cy.mount(<CtaBanner blok={externalCta} />);

      cy.get('a[href="https://external.com"]').should("exist");
      cy.get('a[target="_blank"]').should("exist");
    });

    it("should have proper button styling based on background", () => {
      cy.mount(<CtaBanner blok={baseCta} />);

      // Primary background should have white button
      cy.get("a").should("have.class", "bg-white");
      cy.get("a").should("have.class", "text-blue-600");
    });
  });

  context("Responsive Design", () => {
    it("should have responsive classes", () => {
      cy.mount(<CtaBanner blok={baseCta} />);

      cy.get(".text-3xl").should("exist");
      cy.get(".md\\:text-4xl").should("exist");
    });

    it("should work on different viewport sizes", () => {
      cy.viewport(375, 667); // Mobile
      cy.mount(<CtaBanner blok={baseCta} />);
      cy.contains("Test CTA Title").should("be.visible");

      cy.viewport(768, 1024); // Tablet
      cy.contains("Test CTA Title").should("be.visible");

      cy.viewport(1280, 720); // Desktop
      cy.contains("Test CTA Title").should("be.visible");
    });
  });

  context("Accessibility", () => {
    it("should have proper semantic structure", () => {
      cy.mount(<CtaBanner blok={baseCta} />);

      cy.get("h2").should("contain", "Test CTA Title");
      cy.get("p").should("contain", "Test CTA description");
      cy.get("a").should("exist");
    });

    it("should have accessible image alt text", () => {
      const splitCta: StoryblokCtaBanner = {
        ...baseCta,
        variant: "split-layout",
        image: {
          filename: "https://via.placeholder.com/600x400",
          alt: "Descriptive alt text",
        },
      };

      cy.mount(<CtaBanner blok={splitCta} />);

      cy.get('img[alt="Descriptive alt text"]').should("exist");
    });

    it("should be keyboard navigable", () => {
      cy.mount(<CtaBanner blok={baseCta} />);

      cy.get("a").focus().should("be.focused");
    });
  });

  context("Edge Cases", () => {
    it("should handle missing optional props gracefully", () => {
      const minimalCta: StoryblokCtaBanner = {
        _uid: "minimal",
        component: "cta_banner",
        title: "Minimal CTA",
        ctaText: "Click",
        ctaLink: { url: "/test" },
        backgroundColor: "primary",
        alignment: "centered",
        variant: "centered-text",
      };

      cy.mount(<CtaBanner blok={minimalCta} />);

      cy.contains("Minimal CTA").should("be.visible");
      cy.contains("Click").should("be.visible");
    });

    it("should handle long text content", () => {
      const longTextCta = {
        ...baseCta,
        title:
          "This is a very long title that should wrap properly on multiple lines and not break the layout",
        description:
          "This is a very long description that contains a lot of text and should wrap properly without breaking the overall component layout or causing any visual issues.",
      };

      cy.mount(<CtaBanner blok={longTextCta} />);

      cy.contains("This is a very long title").should("be.visible");
      cy.contains("This is a very long description").should("be.visible");
    });

    it("should handle special characters in content", () => {
      const specialCharCta = {
        ...baseCta,
        title: 'Special Characters: áéíóú ñ ¿¡ & < > "quotes"',
        description: "Testing special chars: @#$%^&*()_+-=[]{}|;:,.<>?",
      };

      cy.mount(<CtaBanner blok={specialCharCta} />);

      cy.contains("Special Characters").should("be.visible");
      cy.contains("Testing special chars").should("be.visible");
    });
  });
});
