import Link from "next/link";
import { CtaBanner } from "storyblok-components";
import type { CtaBannerProps } from "storyblok-components";

export default function StoryblokExternal() {
  // Sample blok data for CTA Banner component from the shared package
  const centeredCtaBlok: CtaBannerProps["blok"] = {
    _uid: "cta-1",
    component: "cta_banner",
    variant: "centered-text",
    backgroundColor: "primary",
    alignment: "centered",
    title: "Transform Your Life with WW",
    description:
      "Join millions who've discovered a better way to wellness. Start your personalized weight-loss journey today with our science-backed approach.",
    ctaText: "Start Your Journey",
    ctaLink: {
      url: "#signup",
    },
  };

  const splitLayoutCtaBlok: CtaBannerProps["blok"] = {
    _uid: "cta-2",
    component: "cta_banner",
    variant: "split-layout",
    backgroundColor: "secondary",
    alignment: "split",
    title: "Your Personal Coach Awaits",
    description:
      "Get personalized guidance, meal plans, and support from certified wellness coaches. Available 24/7 through our mobile app.",
    ctaText: "Get Coaching",
    ctaLink: {
      url: "#coaching",
    },
    image: {
      filename: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      alt: "Personal wellness coach",
    },
  };

  const formCtaBlok: CtaBannerProps["blok"] = {
    _uid: "cta-3",
    component: "cta_banner",
    variant: "with-form",
    backgroundColor: "white",
    alignment: "centered",
    title: "Start Your Free Assessment",
    description:
      "Get a personalized wellness plan based on your goals, preferences, and lifestyle. Takes less than 3 minutes.",
    ctaText: "Get My Plan",
    ctaLink: {
      url: "#assessment",
    },
    formEmbedCode: `<form class="space-y-4">
      <input type="email" placeholder="Enter your email" class="w-full p-3 border rounded-lg" required />
      <select class="w-full p-3 border rounded-lg" required>
        <option value="">Primary goal</option>
        <option value="weight-loss">Lose weight</option>
        <option value="muscle-gain">Build muscle</option>
        <option value="health">Improve health</option>
        <option value="maintain">Maintain weight</option>
      </select>
      <button type="submit" class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">Get My Plan</button>
    </form>`,
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Gallery
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            External Storyblok Components
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            These components are imported from the shared storyblok-components package. They can be
            reused across multiple applications in the monorepo and provide consistent branding and
            functionality.
          </p>
        </div>

        {/* CTA Banner - Centered Text Variant */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            CTA Banner - Centered Text
          </h2>
          <CtaBanner blok={centeredCtaBlok} />

          {/* Code Preview */}
          <div className="bg-gray-900 rounded-lg p-6 mt-6">
            <h3 className="text-white text-lg font-semibold mb-4">External Component Usage:</h3>
            <pre className="text-green-300 text-sm overflow-x-auto">
              {`import { CtaBanner } from "storyblok-components";

<CtaBanner blok={{
  variant: "centered-text",
  backgroundColor: "primary",
  title: "Transform Your Life with WW",
  description: "Join millions who've discovered...",
  ctaText: "Start Your Journey",
  ctaLink: { url: "#signup" }
}} />`}
            </pre>
          </div>
        </section>

        {/* CTA Banner - Split Layout Variant */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            CTA Banner - Split Layout
          </h2>
          <CtaBanner blok={splitLayoutCtaBlok} />

          {/* Code Preview */}
          <div className="bg-gray-900 rounded-lg p-6 mt-6">
            <h3 className="text-white text-lg font-semibold mb-4">External Component Usage:</h3>
            <pre className="text-green-300 text-sm overflow-x-auto">
              {`<CtaBanner blok={{
  variant: "split-layout",
  backgroundColor: "secondary",
  title: "Your Personal Coach Awaits",
  description: "Get personalized guidance...",
  image: { filename: "...", alt: "Personal wellness coach" },
  ctaText: "Get Coaching",
  ctaLink: { url: "#coaching" }
}} />`}
            </pre>
          </div>
        </section>

        {/* CTA Banner - Form Variant */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            CTA Banner - With Form
          </h2>
          <CtaBanner blok={formCtaBlok} />

          {/* Code Preview */}
          <div className="bg-gray-900 rounded-lg p-6 mt-6">
            <h3 className="text-white text-lg font-semibold mb-4">External Component Usage:</h3>
            <pre className="text-green-300 text-sm overflow-x-auto">
              {`<CtaBanner blok={{
  variant: "with-form",
  backgroundColor: "white",
  title: "Start Your Free Assessment",
  description: "Get a personalized wellness plan...",
  formEmbedCode: "<form>...</form>"
}} />`}
            </pre>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            External Component Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Advantages</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Consistent branding across applications</li>
                <li>• Centralized maintenance and updates</li>
                <li>• Shared TypeScript interfaces</li>
                <li>• Smaller individual app bundle sizes</li>
                <li>• Production-tested components</li>
                <li>• Comprehensive test coverage</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                📦 Package Structure
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Components in storyblok-components</li>
                <li>• TypeScript definitions included</li>
                <li>• Storyblok schema documentation</li>
                <li>• Cypress component tests</li>
                <li>• Easy import and usage</li>
                <li>• Automated build and versioning</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-purple-200 dark:border-purple-700">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">💡 Best Practice</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Use external components from the shared package for consistent UI elements that need
              to be reused across multiple applications. Build internal components when you need
              app-specific functionality or integration with local state and context.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
