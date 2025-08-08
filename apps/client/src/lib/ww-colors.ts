// WW Brand Colors
export const wwColors = {
  blueAgave: "#3B70B5", // Primary blue
  blueberry: "#182C55", // Dark blue
  roastedChestnut: "#822F03", // Brown/orange
  dinoKale: "#00351C", // Dark green
  oatMilk: "#FBF3EB", // Light cream
  oyster: "#F1F3F4", // Light gray
  periPeri: "#FF5E3B", // Orange/red
  ube: "#B9B1FA", // Light purple
  yuzu: "#F6FD35" // Bright yellow
} as const;

// Color combinations for gradients and components
export const wwColorCombinations = {
  blueAgave: "from-[#3B70B5] to-[#2d5a94]",
  blueberry: "from-[#182C55] to-[#0f1d3a]",
  roastedChestnut: "from-[#822F03] to-[#5d2202]",
  dinoKale: "from-[#00351C] to-[#002414]",
  periPeri: "from-[#FF5E3B] to-[#e6432a]",
  ube: "from-[#B9B1FA] to-[#a098f0]",
  yuzu: "from-[#F6FD35] to-[#e6e922]",
  neutral: "from-[#F1F3F4] to-[#e1e3e4]"
} as const;

// Text colors that work well with each background
export const wwTextColors = {
  blueAgave: "text-white",
  blueberry: "text-white",
  roastedChestnut: "text-white",
  dinoKale: "text-white",
  periPeri: "text-white",
  ube: "text-gray-900",
  yuzu: "text-gray-900",
  neutral: "text-gray-900"
} as const;

export type WWColorKey = keyof typeof wwColors;
