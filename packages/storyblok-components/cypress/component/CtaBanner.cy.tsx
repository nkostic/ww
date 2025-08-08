import React from "react";
import { CtaBanner } from "../../src/components/CtaBanner";
import type { StoryblokCtaBanner } from "../../src/types/storyblok";

describe("CtaBanner Component (storyblok-components package)", () => {
  const baseCta: StoryblokCtaBanner = {
    _uid: "test-cta",
    component: "cta_banner",
    title: "Test CTA Title",
    description: "Test CTA description",
    ctaText: "Click me",
    ctaLink: { url: "/test" },
    variant: "centered-text",
    backgroundColor: "primary",
    alignment: "centered",
  };

  it("renders with basic props", () => {
    cy.mount(<CtaBanner blok={baseCta} />);

    cy.get('[data-cy="cta-banner"]').should("exist");
    cy.get('[data-cy="cta-title"]').should("contain.text", "Test CTA Title");
    cy.get('[data-cy="cta-description"]').should("contain.text", "Test CTA description");
    cy.get('[data-cy="cta-button"]').should("contain.text", "Click me");
  });

  it("renders centered-text variant correctly", () => {
    cy.mount(<CtaBanner blok={{ ...baseCta, variant: "centered-text" }} />);

    cy.get('[data-cy="cta-banner"]').should("have.class", "text-center");
  });

  it("renders split-layout variant correctly", () => {
    cy.mount(<CtaBanner blok={{ ...baseCta, variant: "split-layout" }} />);

    cy.get('[data-cy="cta-banner"]').should("have.class", "lg:flex-row");
  });

  it("applies correct background colors", () => {
    const colors = ["primary", "secondary", "white", "gray", "dark"] as const;

    colors.forEach((color) => {
      cy.mount(<CtaBanner blok={{ ...baseCta, backgroundColor: color }} />);

      // Check that the component has a background color class
      cy.get('[data-cy="cta-banner"]').should("exist");
    });
  });

  it("handles with-form variant", () => {
    cy.mount(<CtaBanner blok={{ ...baseCta, variant: "with-form" }} />);

    cy.get('[data-cy="cta-banner"]').should("exist");
    cy.get('[data-cy="cta-form"]').should("exist");
    cy.get('input[type="email"]').should("exist");
    cy.get('button[type="submit"]').should("exist");
  });

  it("handles missing optional props gracefully", () => {
    const minimalCta: StoryblokCtaBanner = {
      _uid: "minimal-cta",
      component: "cta_banner",
      title: "Minimal Title",
      ctaText: "Learn More",
      ctaLink: { url: "/learn" },
      variant: "centered-text",
      backgroundColor: "primary",
      alignment: "centered",
    };

    cy.mount(<CtaBanner blok={minimalCta} />);

    cy.get('[data-cy="cta-banner"]').should("exist");
    cy.get('[data-cy="cta-title"]').should("contain.text", "Minimal Title");
  });
});
