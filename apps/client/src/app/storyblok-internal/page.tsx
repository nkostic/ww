import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";

// These interfaces match Storyblok blok structure
interface HeroBlok {
  _uid: string;
  component: "hero";
  title: string;
  subtitle?: string;
  description?: string;
  theme?: "primary" | "secondary" | "dark";
  cta_text?: string;
  cta_link?: { url: string };
}

interface FeatureBlok {
  _uid: string;
  component: "feature";
  icon: string;
  title: string;
  description: string;
}

interface GridBlok {
  _uid: string;
  component: "grid";
  columns: number;
  features: FeatureBlok[];
}

interface RichTextBlok {
  _uid: string;
  component: "richtext";
  content: string;
}

// Internal Hero Component using Storyblok SDK patterns
const Hero = ({ blok }: { blok: HeroBlok }) => {
  const themeClasses = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600",
    secondary: "bg-gradient-to-r from-blue-600 to-teal-600",
    dark: "bg-gradient-to-r from-gray-800 to-gray-900",
  };

  return (
    <div
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...storyblokEditable(blok as any)}
      className={`text-white py-20 px-8 rounded-xl mb-8 ${themeClasses[blok.theme || "primary"]}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">{blok.title}</h1>
        {blok.subtitle && <h2 className="text-2xl text-purple-100 mb-6">{blok.subtitle}</h2>}
        {blok.description && (
          <p className="text-xl text-purple-50 max-w-2xl mx-auto">{blok.description}</p>
        )}
        {blok.cta_text && (
          <a
            href={blok.cta_link?.url || "#"}
            className="inline-block mt-8 bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            {blok.cta_text}
          </a>
        )}
      </div>
    </div>
  );
};

// Internal Feature Component using Storyblok SDK patterns
const Feature = ({ blok }: { blok: FeatureBlok }) => {
  return (
    <div
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...storyblokEditable(blok as any)}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
    >
      <div className="text-4xl mb-4">{blok.icon}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{blok.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{blok.description}</p>
    </div>
  );
};

// Internal Grid Component using Storyblok SDK patterns
const Grid = ({ blok }: { blok: GridBlok }) => {
  return (
    <div
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...storyblokEditable(blok as any)}
      className={`grid gap-6 ${
        blok.columns === 2
          ? "md:grid-cols-2"
          : blok.columns === 3
            ? "md:grid-cols-2 lg:grid-cols-3"
            : "md:grid-cols-2 lg:grid-cols-4"
      }`}
    >
      {blok.features?.map((feature) => (
        <Feature key={feature._uid} blok={feature} />
      ))}
    </div>
  );
};

// Internal RichText Component using Storyblok SDK patterns
const RichText = ({ blok }: { blok: RichTextBlok }) => {
  return (
    <div
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...storyblokEditable(blok as any)}
      className="prose prose-lg dark:prose-invert max-w-none"
    >
      <div dangerouslySetInnerHTML={{ __html: blok.content }} />
    </div>
  );
};

export default function StoryblokInternal() {
  // Sample blok data - in a real app this would come from Storyblok API
  const heroBlok: HeroBlok = {
    _uid: "hero-1",
    component: "hero",
    title: "Welcome to WW Platform",
    subtitle: "Transform Your Health Journey",
    description:
      "Our internal hero component showcases how you can build Storyblok components directly within your client application using the Storyblok React SDK.",
    theme: "primary",
    cta_text: "Get Started",
    cta_link: { url: "#" },
  };

  const gridBlok: GridBlok = {
    _uid: "grid-1",
    component: "grid",
    columns: 3,
    features: [
      {
        _uid: "feature-1",
        component: "feature",
        icon: "🎯",
        title: "Goal Tracking",
        description:
          "Set and track your health goals with our intuitive dashboard and progress monitoring tools.",
      },
      {
        _uid: "feature-2",
        component: "feature",
        icon: "📊",
        title: "Analytics",
        description:
          "Get detailed insights into your progress with comprehensive analytics and reporting features.",
      },
      {
        _uid: "feature-3",
        component: "feature",
        icon: "🤝",
        title: "Community",
        description:
          "Connect with like-minded individuals and share your journey with our supportive community.",
      },
      {
        _uid: "feature-4",
        component: "feature",
        icon: "📱",
        title: "Mobile App",
        description:
          "Access your account and track progress on-the-go with our fully featured mobile application.",
      },
      {
        _uid: "feature-5",
        component: "feature",
        icon: "🔔",
        title: "Notifications",
        description: "Stay motivated with personalized reminders and achievement notifications.",
      },
      {
        _uid: "feature-6",
        component: "feature",
        icon: "🏆",
        title: "Achievements",
        description: "Earn badges and rewards as you reach milestones and complete challenges.",
      },
    ],
  };

  const richTextBlok: RichTextBlok = {
    _uid: "richtext-1",
    component: "richtext",
    content: `
      <h3>Rich Text Content</h3>
      <p>This is a sample rich text content rendered by our internal RichText component. It supports:</p>
      <ul>
        <li><strong>Bold text</strong> and <em>italic text</em></li>
        <li>Lists and structured content</li>
        <li>Links and other HTML elements</li>
      </ul>
      <p>Perfect for blog posts, articles, and content management with Storyblok CMS.</p>
    `,
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
            Storyblok SDK Internal Components
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            These components are built directly within the client application using the Storyblok
            React SDK. They use storyblokEditable() for visual editing and follow Storyblok blok
            data patterns.
          </p>
        </div>

        {/* Hero Component Demo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Hero Component</h2>
          <Hero blok={heroBlok} />

          {/* Code Preview */}
          <div className="bg-gray-900 rounded-lg p-6 mt-6">
            <h3 className="text-white text-lg font-semibold mb-4">Storyblok SDK Usage:</h3>
            <pre className="text-green-300 text-sm overflow-x-auto">
              {`import { storyblokEditable } from "@storyblok/react/rsc";

const Hero = ({ blok }: { blok: HeroBlok }) => {
  return (
    <div {...storyblokEditable(blok)} className="...">
      <h1>{blok.title}</h1>
      {blok.subtitle && <h2>{blok.subtitle}</h2>}
      {blok.description && <p>{blok.description}</p>}
    </div>
  );
};`}
            </pre>
          </div>
        </section>

        {/* Feature Grid Demo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Feature Grid</h2>
          <Grid blok={gridBlok} />

          {/* Code Preview */}
          <div className="bg-gray-900 rounded-lg p-6 mt-6">
            <h3 className="text-white text-lg font-semibold mb-4">Storyblok SDK Usage:</h3>
            <pre className="text-green-300 text-sm overflow-x-auto">
              {`const Grid = ({ blok }: { blok: GridBlok }) => {
  return (
    <div {...storyblokEditable(blok)} className="grid...">
      {blok.features?.map((feature) => (
        <Feature key={feature._uid} blok={feature} />
      ))}
    </div>
  );
};`}
            </pre>
          </div>
        </section>

        {/* Rich Text Demo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Rich Text Content
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <RichText blok={richTextBlok} />
          </div>

          {/* Code Preview */}
          <div className="bg-gray-900 rounded-lg p-6 mt-6">
            <h3 className="text-white text-lg font-semibold mb-4">Storyblok SDK Usage:</h3>
            <pre className="text-green-300 text-sm overflow-x-auto">
              {`const RichText = ({ blok }: { blok: RichTextBlok }) => {
  return (
    <div {...storyblokEditable(blok)} className="prose...">
      <div dangerouslySetInnerHTML={{ __html: blok.content }} />
    </div>
  );
};`}
            </pre>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Storyblok SDK Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Advantages</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Visual editing with storyblokEditable()</li>
                <li>• Direct integration with Storyblok CMS</li>
                <li>• Type-safe blok data structures</li>
                <li>• Live preview in Storyblok editor</li>
                <li>• Full control over component logic</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                📋 Implementation Details
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Uses storyblokEditable() for editor integration</li>
                <li>• Follows Storyblok blok data patterns</li>
                <li>• Components built directly in client app</li>
                <li>• TypeScript interfaces match Storyblok schema</li>
                <li>• Supports nested blok structures</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
