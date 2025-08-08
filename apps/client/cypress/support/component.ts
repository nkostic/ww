// Import commands.js using ES2015 syntax:
import "./commands";

// Import global styles
import "../../src/app/globals.css";

// Import the mount command from @cypress/react
import { mount } from "@cypress/react";

// Augment the Cypress namespace to include type definitions for
// your custom command.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add("mount", mount);
