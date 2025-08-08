describe("CTA Banner Component Tests", () => {
  beforeEach(() => {
    cy.visit("/cta-banner-demo");
  });

  context("Page Navigation and Structure", () => {
    it("should have the correct page title and navigation", () => {
      cy.contains("CTA Banner Component Demo").should("be.visible");
      cy.contains("Back to Home").should("be.visible").and("have.attr", "href", "/");

      // Check quick navigation links
      cy.contains("Centered Text").should("be.visible").and("have.attr", "href", "#centered-text");
      cy.contains("Split Layout").should("be.visible").and("have.attr", "href", "#split-layout");
      cy.contains("With Form").should("be.visible").and("have.attr", "href", "#with-form");
      cy.contains("Color Variations").should("be.visible").and("have.attr", "href", "#variations");
    });

    it("should navigate back to home page", () => {
      cy.contains("Back to Home").click();
      cy.url().should("eq", Cypress.config().baseUrl + "/");
      cy.contains("Storyblok Components Gallery").should("be.visible");
    });
  });

  context("Centered Text Variant", () => {
    beforeEach(() => {
      cy.get("#centered-text").scrollIntoView();
    });

    it("should display centered text variant correctly", () => {
      // Check section title and description
      cy.contains("Centered Text Variant").should("be.visible");
      cy.contains("Full-width panel with headline, subhead, and CTA centered").should("be.visible");
      cy.contains("weightwatchers.com/us/oprah").should("be.visible");

      // Check the actual component content
      cy.contains("Transform Your Health Journey").should("be.visible");
      cy.contains("Join millions of people who have found their path to wellness").should(
        "be.visible",
      );

      // Check CTA button
      const ctaButton = cy.contains("Start Your Journey");
      ctaButton.should("be.visible");
      ctaButton.should("have.attr", "href", "/signup");
      ctaButton.should("have.class", "bg-white");
    });

    it("should have correct styling for primary background", () => {
      // Check background color class
      cy.get("#centered-text")
        .next()
        .within(() => {
          cy.get(".bg-blue-600").should("exist");
          cy.get(".text-white").should("exist");
        });
    });

    it("should have responsive design elements", () => {
      // Check for responsive text classes on the title
      cy.contains("Transform Your Health Journey")
        .should("have.class", "text-3xl")
        .and("have.class", "md:text-4xl");
    });
  });

  context("Split Layout Variant", () => {
    beforeEach(() => {
      cy.get("#split-layout").scrollIntoView();
    });

    it("should display split layout variant correctly", () => {
      // Check section title and description
      cy.contains("Split Layout Variant").should("be.visible");
      cy.contains("Side-by-side layout with text on one side and image on the other").should(
        "be.visible",
      );
      cy.contains("weightwatchers.com/us/compare-memberships").should("be.visible");

      // Check the actual component content
      cy.contains("Compare Our Memberships").should("be.visible");
      cy.contains("Find the perfect plan that fits your lifestyle and budget").should("be.visible");

      // Check CTA button
      const ctaButton = cy.contains("Compare Plans");
      ctaButton.should("be.visible");
      ctaButton.should("have.attr", "href", "/compare-memberships");
    });

    it("should display image in split layout", () => {
      cy.get("#split-layout")
        .next()
        .within(() => {
          // Check for grid layout
          cy.get(".grid").should("exist");
          cy.get(".lg\\:grid-cols-2").should("exist");

          // Check for image
          cy.get("img")
            .should("exist")
            .and("have.attr", "alt", "Happy woman preparing healthy meal");
        });
    });

    it("should have white background styling", () => {
      cy.get("#split-layout")
        .next()
        .within(() => {
          cy.get(".bg-white").should("exist");
          cy.get(".text-gray-900").should("exist");
        });
    });
  });

  context("With Form Variant", () => {
    beforeEach(() => {
      cy.get("#with-form").scrollIntoView();
    });

    it("should display with form variant correctly", () => {
      // Check section title and description
      cy.contains("With Form Variant").should("be.visible");
      cy.contains("Includes embedded form for sign-up or activation flows").should("be.visible");
      cy.contains("weightwatchers.com/us/signup/activate").should("be.visible");

      // Check the actual component content
      cy.contains("Activate Your Membership").should("be.visible");
      cy.contains("Complete your registration to unlock personalized meal plans").should(
        "be.visible",
      );

      // Check CTA button (fallback)
      cy.contains("Activate Now").should("be.visible");
    });

    it("should display embedded form", () => {
      cy.get("#with-form")
        .next()
        .within(() => {
          // Check for form elements
          cy.get("form").should("exist");
          cy.get('input[placeholder="First Name"]').should("exist");
          cy.get('input[placeholder="Last Name"]').should("exist");
          cy.get('input[placeholder="Email Address"]').should("exist");
          cy.get('input[placeholder="Phone Number"]').should("exist");
          cy.get('button[type="submit"]').should("exist").and("contain", "Activate Membership");

          // Check privacy policy text
          cy.contains("Terms of Service").should("exist");
          cy.contains("Privacy Policy").should("exist");
        });
    });

    it("should have purple/secondary background styling", () => {
      cy.get("#with-form")
        .next()
        .within(() => {
          cy.get(".bg-purple-600").should("exist");
          cy.get(".text-white").should("exist");
        });
    });

    it("should validate form interaction", () => {
      cy.get("#with-form")
        .next()
        .within(() => {
          // Test form input interaction
          cy.get('input[placeholder="First Name"]').type("John").should("have.value", "John");
          cy.get('input[placeholder="Last Name"]').type("Doe").should("have.value", "Doe");
          cy.get('input[placeholder="Email Address"]')
            .type("john.doe@example.com")
            .should("have.value", "john.doe@example.com");
          cy.get('input[placeholder="Phone Number"]')
            .type("555-123-4567")
            .should("have.value", "555-123-4567");
        });
    });
  });

  context("Color Variations", () => {
    beforeEach(() => {
      cy.get("#variations").scrollIntoView();
    });

    it("should display dark theme variation", () => {
      cy.contains("Premium Features Await").should("be.visible");
      cy.contains("Upgrade to Premium and unlock advanced tracking").should("be.visible");

      const upgradeButton = cy.contains("Upgrade Now");
      upgradeButton.should("be.visible");
      upgradeButton.should("have.attr", "href", "/premium");
    });

    it("should display gray background variation", () => {
      cy.contains("Download Our Mobile App").should("be.visible");
      cy.contains("Track your progress on the go with our award-winning mobile app").should(
        "be.visible",
      );

      const downloadButton = cy.contains("Download Now");
      downloadButton.should("be.visible");
      downloadButton.should("have.attr", "href", "/app");
    });

    it("should have different background colors", () => {
      // Check dark theme
      cy.contains("Premium Features Await").parents(".bg-gray-900").should("exist");

      // Check gray theme
      cy.contains("Download Our Mobile App").parents(".bg-gray-100").should("exist");
    });
  });

  context("Component Documentation", () => {
    it("should display Storyblok schema configuration", () => {
      cy.scrollTo("bottom");

      cy.contains("Storyblok Schema Configuration").should("be.visible");
      cy.contains("Required Fields").should("be.visible");
      cy.contains("Optional Fields").should("be.visible");

      // Check schema details
      cy.contains("Core Content").should("be.visible");
      cy.contains("title (string)").should("be.visible");
      cy.contains("ctaText (string)").should("be.visible");
      cy.contains("ctaLink (link)").should("be.visible");
      cy.contains("variant (option)").should("be.visible");
    });

    it("should display usage examples", () => {
      cy.contains("Usage in React/Next.js").should("be.visible");
      cy.contains("import { CtaBanner }").should("be.visible");
      cy.contains("@repo/storyblok-components/components").should("be.visible");
    });
  });

  context("Responsive Design Tests", () => {
    it("should work on mobile viewport", () => {
      cy.viewport(375, 667); // iPhone SE

      cy.contains("Transform Your Health Journey").should("be.visible");
      cy.contains("Compare Our Memberships").should("be.visible");
      cy.contains("Activate Your Membership").should("be.visible");

      // Check mobile-specific classes are applied
      cy.get(".grid").should("exist");
      cy.get(".md\\:grid-cols-2").should("exist");
    });

    it("should work on tablet viewport", () => {
      cy.viewport(768, 1024); // iPad

      cy.contains("Transform Your Health Journey").should("be.visible");
      cy.contains("Compare Our Memberships").should("be.visible");
      cy.contains("Activate Your Membership").should("be.visible");
    });

    it("should work on desktop viewport", () => {
      cy.viewport(1440, 900); // Desktop

      cy.contains("Transform Your Health Journey").should("be.visible");
      cy.contains("Compare Our Memberships").should("be.visible");
      cy.contains("Activate Your Membership").should("be.visible");
    });
  });

  context("Accessibility Tests", () => {
    it("should have proper heading structure", () => {
      cy.get("h1").should("contain", "CTA Banner Component Demo");
      cy.get("h2").should("exist");
      cy.get("h3").should("exist");
    });

    it("should have accessible links", () => {
      // All CTA buttons should have proper href attributes
      cy.get('a[href="/signup"]').should("exist");
      cy.get('a[href="/compare-memberships"]').should("exist");
      cy.get('a[href="/signup/activate"]').should("exist");
      cy.get('a[href="/premium"]').should("exist");
      cy.get('a[href="/app"]').should("exist");
    });

    it("should have proper image alt attributes", () => {
      cy.get('img[alt="Happy woman preparing healthy meal"]').should("exist");
    });

    it("should be keyboard navigable", () => {
      // Test focus on CTA buttons
      cy.get('a[href="/signup"]').focus().should("be.focused");
      cy.get('a[href="/compare-memberships"]').focus().should("be.focused");
      cy.get('a[href="/signup/activate"]').focus().should("be.focused");
    });
  });

  context("Performance and Loading", () => {
    it("should load all components within reasonable time", () => {
      const startTime = Date.now();

      cy.contains("Transform Your Health Journey").should("be.visible");
      cy.contains("Compare Our Memberships").should("be.visible");
      cy.contains("Activate Your Membership").should("be.visible");

      cy.then(() => {
        const loadTime = Date.now() - startTime;
        expect(loadTime).to.be.lessThan(3000); // Should load within 3 seconds
      });
    });

    it("should load images properly", () => {
      cy.get("img").each(($img) => {
        cy.wrap($img).should("be.visible");
        cy.wrap($img).should("have.attr", "src");
      });
    });
  });
});
