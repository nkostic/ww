import Link from "next/link";
import { CtaBanner } from "storyblok-components/components";

// Example data for different CTA Banner variants
const ctaBannerExamples = {
  centeredText: {
    _uid: "cta-1",
    component: "cta_banner" as const,
    title: "Transform Your Health Journey",
    description:
      "Join millions of people who have found their path to wellness with our proven approach to sustainable weight loss.",
    ctaText: "Start Your Journey",
    ctaLink: {
      url: "/signup",
      target: "_self" as const,
    },
    backgroundColor: "primary" as const,
    alignment: "centered" as const,
    variant: "centered-text" as const,
  },

  splitLayout: {
    _uid: "cta-2",
    component: "cta_banner" as const,
    title: "Compare Our Memberships",
    description:
      "Find the perfect plan that fits your lifestyle and budget. All plans include access to our award-winning app and community support.",
    ctaText: "Compare Plans",
    ctaLink: {
      url: "/compare-memberships",
      target: "_self" as const,
    },
    image: {
      filename:
        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Happy woman preparing healthy meal",
    },
    backgroundColor: "white" as const,
    alignment: "split" as const,
    variant: "split-layout" as const,
  },

  withForm: {
    _uid: "cta-3",
    component: "cta_banner" as const,
    title: "Activate Your Membership",
    description:
      "Complete your registration to unlock personalized meal plans, tracking tools, and expert coaching.",
    ctaText: "Activate Now",
    ctaLink: {
      url: "/signup/activate",
      target: "_self" as const,
    },
    backgroundColor: "secondary" as const,
    alignment: "centered" as const,
    variant: "with-form" as const,
    formEmbedCode: `
      <form class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" class="px-4 py-3 rounded-lg border border-gray-300 text-gray-900" required />
          <input type="text" placeholder="Last Name" class="px-4 py-3 rounded-lg border border-gray-300 text-gray-900" required />
        </div>
        <input type="email" placeholder="Email Address" class="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900" required />
        <input type="tel" placeholder="Phone Number" class="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900" />
        <button type="submit" class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Activate Membership
        </button>
        <p class="text-xs opacity-75 text-center">
          By submitting, you agree to our <a href="/terms" class="underline">Terms of Service</a> and <a href="/privacy" class="underline">Privacy Policy</a>.
        </p>
      </form>
    `,
  },

  // Additional examples showing different background colors
  darkTheme: {
    _uid: "cta-4",
    component: "cta_banner" as const,
    title: "Premium Features Await",
    description:
      "Upgrade to Premium and unlock advanced tracking, personalized coaching, and exclusive content.",
    ctaText: "Upgrade Now",
    ctaLink: {
      url: "/premium",
      target: "_self" as const,
    },
    backgroundColor: "dark" as const,
    alignment: "centered" as const,
    variant: "centered-text" as const,
  },

  grayBackground: {
    _uid: "cta-5",
    component: "cta_banner" as const,
    title: "Download Our Mobile App",
    description:
      "Track your progress on the go with our award-winning mobile app. Available on iOS and Android.",
    ctaText: "Download Now",
    ctaLink: {
      url: "/app",
      target: "_self" as const,
    },
    backgroundColor: "gray" as const,
    alignment: "centered" as const,
    variant: "centered-text" as const,
  },
};

export default function CtaBannerDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">CTA Banner Component Demo</h1>
          <p className="text-gray-600 mb-8">
            Showcasing all variants of the CTA Banner component from{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">storyblok-components</code>
          </p>

          {/* Quick navigation */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#centered-text" className="text-blue-600 hover:text-blue-800">
              Centered Text
            </a>
            <a href="#split-layout" className="text-blue-600 hover:text-blue-800">
              Split Layout
            </a>
            <a href="#with-form" className="text-blue-600 hover:text-blue-800">
              With Form
            </a>
            <a href="#variations" className="text-blue-600 hover:text-blue-800">
              Color Variations
            </a>
          </div>
        </div>
      </div>

      {/* Centered Text Variant */}
      <section id="centered-text" className="mb-16">
        <div className="max-w-4xl mx-auto px-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Centered Text Variant</h2>
          <p className="text-gray-600 mb-4">
            Full-width panel with headline, subhead, and CTA centered. Perfect for hero sections and
            primary calls-to-action.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg text-sm">
            <strong>Use case:</strong> weightwatchers.com/us/oprah
          </div>
        </div>
        <CtaBanner blok={ctaBannerExamples.centeredText} />
      </section>

      {/* Split Layout Variant */}
      <section id="split-layout" className="mb-16">
        <div className="max-w-4xl mx-auto px-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Split Layout Variant</h2>
          <p className="text-gray-600 mb-4">
            Side-by-side layout with text on one side and image on the other. Great for feature
            highlights and comparisons.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg text-sm">
            <strong>Use case:</strong> weightwatchers.com/us/compare-memberships
          </div>
        </div>
        <CtaBanner blok={ctaBannerExamples.splitLayout} />
      </section>

      {/* With Form Variant */}
      <section id="with-form" className="mb-16">
        <div className="max-w-4xl mx-auto px-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">With Form Variant</h2>
          <p className="text-gray-600 mb-4">
            Includes embedded form for sign-up or activation flows. Supports Formstack or any custom
            HTML form.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg text-sm">
            <strong>Use case:</strong> weightwatchers.com/us/signup/activate
          </div>
        </div>
        <CtaBanner blok={ctaBannerExamples.withForm} />
      </section>

      {/* Color Variations */}
      <section id="variations" className="mb-16">
        <div className="max-w-4xl mx-auto px-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Background Color Variations</h2>
          <p className="text-gray-600">
            The component supports multiple background colors to match different page themes and
            brand requirements.
          </p>
        </div>

        <div className="space-y-1">
          <CtaBanner blok={ctaBannerExamples.darkTheme} />
          <CtaBanner blok={ctaBannerExamples.grayBackground} />
        </div>
      </section>

      {/* Component Documentation */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Storyblok Schema Configuration
          </h2>

          <div className="prose prose-gray max-w-none">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Required Fields</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Core Content</h4>
                  <ul className="text-gray-800 space-y-1 text-sm">
                    <li>
                      • <strong>title</strong> (string) - Main headline
                    </li>
                    <li>
                      • <strong>ctaText</strong> (string) - Button text
                    </li>
                    <li>
                      • <strong>ctaLink</strong> (link) - Button destination
                    </li>
                    <li>
                      • <strong>variant</strong> (option) - Layout type
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Optional Fields</h4>
                  <ul className="text-gray-800 space-y-1 text-sm">
                    <li>
                      • <strong>description</strong> (text) - Subheading
                    </li>
                    <li>
                      • <strong>image</strong> (asset) - For split layout
                    </li>
                    <li>
                      • <strong>formEmbedCode</strong> (text) - HTML form
                    </li>
                    <li>
                      • <strong>backgroundColor</strong> (option) - Theme color
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">
                Storyblok Component Schema
              </h3>
              <pre className="bg-blue-100 p-4 rounded text-sm overflow-x-auto text-blue-900">
                {`{
  "name": "cta_banner",
  "display_name": "CTA Banner",
  "schema": {
    "title": {
      "type": "text",
      "required": true,
      "description": "Main headline text"
    },
    "description": {
      "type": "textarea",
      "description": "Optional subheading or description"
    },
    "ctaText": {
      "type": "text",
      "required": true,
      "description": "Call-to-action button text"
    },
    "ctaLink": {
      "type": "multilink",
      "required": true,
      "description": "Call-to-action button destination"
    },
    "image": {
      "type": "asset",
      "filetypes": ["images"],
      "description": "Image for split layout variant"
    },
    "formEmbedCode": {
      "type": "textarea",
      "description": "HTML embed code for forms (Formstack, etc.)"
    },
    "backgroundColor": {
      "type": "option",
      "options": [
        {"name": "Primary Blue", "value": "primary"},
        {"name": "Secondary Purple", "value": "secondary"},
        {"name": "White", "value": "white"},
        {"name": "Light Gray", "value": "gray"},
        {"name": "Dark", "value": "dark"}
      ],
      "default_value": "primary"
    },
    "alignment": {
      "type": "option",
      "options": [
        {"name": "Centered", "value": "centered"},
        {"name": "Split", "value": "split"}
      ],
      "default_value": "centered"
    },
    "variant": {
      "type": "option",
      "options": [
        {"name": "Centered Text", "value": "centered-text"},
        {"name": "Split Layout", "value": "split-layout"},
        {"name": "With Form", "value": "with-form"}
      ],
      "default_value": "centered-text",
      "required": true
    }
  }
}`}
              </pre>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-900">Usage in React/Next.js</h3>
              <pre className="bg-green-100 p-4 rounded text-sm overflow-x-auto text-green-900">
                {`import { CtaBanner } from "storyblok-components/components";

// In your Storyblok page component
<CtaBanner blok={story.content.cta_banner} />

// With storyblok-js
import { StoryblokComponent } from "@storyblok/react";
<StoryblokComponent blok={blok} />`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
