/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        TTHovesProTrialDemiBold: ["TT Hoves Pro Trial DemiBold", "monospace"],
        TTHovesProTrialBold: ["TT Hoves Pro Trial Bold", "monospace"],
        TTHovesProTrialMedium: ["TT Hoves Pro Trial Medium", "monospace"],
        TTHovesProTrialRegular: ["TT Hoves Pro Trial Regular", "monospace"],
        TTHovesProTrialLight: ["TT Hoves Pro Trial Light", "monospace"],
      },
      colors: {
        darkblue: "#1C2938",
        lightblue: "#2E89ED",
        bgwhite: "#F6F9FC",
      },
    },
  },
  plugins: [],
};
