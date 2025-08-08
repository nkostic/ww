import Link from "next/link";

// Internal Hero Component (built directly in client app)
const InternalHero = ({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle?: string;
  description?: string;
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-8 rounded-xl mb-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <h2 className="text-2xl text-blue-100 mb-6">{subtitle}</h2>}
        {description && <p className="text-xl text-blue-50 max-w-2xl mx-auto">{description}</p>}
        <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

// Internal Feature Component (built directly in client app)
const InternalFeature = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

// Internal RichText Component (built directly in client app)
const InternalRichText = ({ content }: { content: string }) => {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

// Internal Grid Component (built directly in client app)
const InternalGrid = ({
  children,
  columns = 3,
}: {
  children: React.ReactNode;
  columns?: number;
}) => {
  return (
    <div
      className={`grid gap-6 ${
        columns === 2
          ? "md:grid-cols-2"
          : columns === 3
            ? "md:grid-cols-2 lg:grid-cols-3"
            : "md:grid-cols-2 lg:grid-cols-4"
      }`}
    >
      {children}
    </div>
  );
};

export default function StoryblokInternal() {
  const sampleRichTextContent = `
    <h3>Rich Text Content</h3>
    <p>This is a sample rich text content rendered by our internal RichText component. It supports:</p>
    <ul>
      <li><strong>Bold text</strong> and <em>italic text</em></li>
      <li>Lists and structured content</li>
      <li>Links and other HTML elements</li>
    </ul>
    <p>Perfect for blog posts, articles, and content management.</p>
  `;

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
            Internal Storyblok Components
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            These components are built directly within the client application using traditional
            React patterns. They demonstrate how you can create Storyblok-compatible components
            using the Storyblok React SDK.
          </p>
        </div>

        {/* Hero Component Demo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Hero Component</h2>
          <InternalHero
            title="Welcome to WW Platform"
            subtitle="Transform Your Health Journey"
            description="Our internal hero component showcases how you can build engaging landing sections directly within your client application."
          />

          {/* Code Preview */}
          <div className="bg-gray-900 rounded-lg p-6 mt-6">
            <h3 className="text-white text-lg font-semibold mb-4">Component Usage:</h3>
            <pre className="text-green-300 text-sm overflow-x-auto">
              {`<InternalHero
  title="Welcome to WW Platform"
  subtitle="Transform Your Health Journey"
  description="Our internal hero component showcases..."
/>`}
            </pre>
          </div>
        </section>

        {/* Feature Grid Demo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Feature Grid</h2>
          <InternalGrid columns={3}>
            <InternalFeature
              icon="🎯"
              title="Goal Tracking"
              description="Set and track your health goals with our intuitive dashboard and progress monitoring tools."
            />
            <InternalFeature
              icon="📊"
              title="Analytics"
              description="Get detailed insights into your progress with comprehensive analytics and reporting features."
            />
            <InternalFeature
              icon="🤝"
              title="Community"
              description="Connect with like-minded individuals and share your journey with our supportive community."
            />
            <InternalFeature
              icon="📱"
              title="Mobile App"
              description="Access your account and track progress on-the-go with our fully featured mobile application."
            />
            <InternalFeature
              icon="🔔"
              title="Notifications"
              description="Stay motivated with personalized reminders and achievement notifications."
            />
            <InternalFeature
              icon="🏆"
              title="Achievements"
              description="Earn badges and rewards as you reach milestones and complete challenges."
            />
          </InternalGrid>

          {/* Code Preview */}
          <div className="bg-gray-900 rounded-lg p-6 mt-6">
            <h3 className="text-white text-lg font-semibold mb-4">Component Usage:</h3>
            <pre className="text-green-300 text-sm overflow-x-auto">
              {`<InternalGrid columns={3}>
  <InternalFeature
    icon="🎯"
    title="Goal Tracking"
    description="Set and track your health goals..."
  />
  {/* More features */}
</InternalGrid>`}
            </pre>
          </div>
        </section>

        {/* Rich Text Demo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Rich Text Content
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <InternalRichText content={sampleRichTextContent} />
          </div>

          {/* Code Preview */}
          <div className="bg-gray-900 rounded-lg p-6 mt-6">
            <h3 className="text-white text-lg font-semibold mb-4">Component Usage:</h3>
            <pre className="text-green-300 text-sm overflow-x-auto">
              {`<InternalRichText content={richTextFromStoryblok} />`}
            </pre>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Internal Component Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Advantages</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Full control over component logic</li>
                <li>• Direct access to app state and context</li>
                <li>• Easy integration with existing codebase</li>
                <li>• No external package dependencies</li>
                <li>• Custom styling and behavior</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ⚠️ Considerations
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Components are app-specific</li>
                <li>• Requires duplication across apps</li>
                <li>• Maintenance overhead per app</li>
                <li>• No cross-app consistency guarantees</li>
                <li>• Larger client bundle size</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
