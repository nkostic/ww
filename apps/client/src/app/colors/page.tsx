import { ColorPalette } from "@/components/ColorPalette";
import { wwColors } from "@/lib/ww-colors";
import Link from "next/link";

export default function ColorsPage() {
  return (
    <div
      className="font-sans min-h-screen p-8"
      style={{
        background: `linear-gradient(135deg, ${wwColors.oatMilk} 0%, ${wwColors.oyster} 100%)`
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center py-12">
          <Link
            href="/"
            className="inline-block mb-6 px-4 py-2 rounded-lg hover:opacity-80 transition-opacity"
            style={{ backgroundColor: wwColors.blueAgave, color: "white" }}
          >
            ← Back to Components
          </Link>
          <h1 className="text-5xl font-bold mb-4" style={{ color: wwColors.blueberry }}>
            WW Brand Colors
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: wwColors.dinoKale }}>
            Complete palette of WeightWatchers brand colors used throughout the component gallery.
          </p>
        </header>

        {/* Color Palette */}
        <ColorPalette />

        {/* Usage Examples */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-6" style={{ color: wwColors.blueberry }}>
            Usage Examples
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Button Examples */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: wwColors.blueAgave }}>
                Buttons & CTAs
              </h3>
              <div className="space-y-3">
                <button
                  className="px-6 py-3 rounded-lg font-semibold text-white w-full"
                  style={{ backgroundColor: wwColors.blueAgave }}
                >
                  Primary Button
                </button>
                <button
                  className="px-6 py-3 rounded-lg font-semibold text-white w-full"
                  style={{ backgroundColor: wwColors.periPeri }}
                >
                  Alert Button
                </button>
                <button
                  className="px-6 py-3 rounded-lg font-semibold border-2 w-full"
                  style={{
                    borderColor: wwColors.blueAgave,
                    color: wwColors.blueAgave
                  }}
                >
                  Secondary Button
                </button>
              </div>
            </div>

            {/* Text Examples */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: wwColors.blueAgave }}>
                Typography
              </h3>
              <div className="space-y-3">
                <h4 className="text-xl font-bold" style={{ color: wwColors.blueberry }}>
                  Heading Text (Blueberry)
                </h4>
                <p style={{ color: wwColors.dinoKale }}>
                  Body text in Dino Kale provides excellent readability while maintaining brand
                  consistency.
                </p>
                <p className="text-sm" style={{ color: wwColors.roastedChestnut }}>
                  Secondary text in Roasted Chestnut for captions and metadata.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
