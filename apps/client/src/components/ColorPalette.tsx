import { wwColors } from "@/lib/ww-colors";

export function ColorPalette() {
  const colorItems = [
    {
      name: "Blue Agave",
      hex: wwColors.blueAgave,
      description: "Primary blue for headers and CTAs"
    },
    { name: "Blueberry", hex: wwColors.blueberry, description: "Dark blue for text and accents" },
    {
      name: "Roasted Chestnut",
      hex: wwColors.roastedChestnut,
      description: "Brown for secondary elements"
    },
    { name: "Dino Kale", hex: wwColors.dinoKale, description: "Dark green for body text" },
    { name: "Oat Milk", hex: wwColors.oatMilk, description: "Light cream for backgrounds" },
    { name: "Oyster", hex: wwColors.oyster, description: "Light gray for secondary backgrounds" },
    {
      name: "Peri Peri",
      hex: wwColors.periPeri,
      description: "Orange/red for alerts and highlights"
    },
    { name: "Ube", hex: wwColors.ube, description: "Light purple for accents" },
    { name: "Yuzu", hex: wwColors.yuzu, description: "Bright yellow for emphasis" }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: wwColors.blueberry }}>
        WW Brand Colors
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {colorItems.map((color) => (
          <div key={color.name} className="text-center">
            <div
              className="w-20 h-20 rounded-lg mx-auto mb-3 shadow-md border border-gray-200"
              style={{ backgroundColor: color.hex }}
            />
            <h3 className="font-semibold text-lg" style={{ color: wwColors.blueberry }}>
              {color.name}
            </h3>
            <p className="text-sm font-mono mb-2" style={{ color: wwColors.roastedChestnut }}>
              {color.hex}
            </p>
            <p className="text-xs" style={{ color: wwColors.dinoKale }}>
              {color.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 rounded-lg" style={{ backgroundColor: wwColors.oyster }}>
        <p className="text-sm text-center" style={{ color: wwColors.dinoKale }}>
          These colors are now automatically used throughout the component gallery and can be
          extended to the quizes app.
        </p>
      </div>
    </div>
  );
}
