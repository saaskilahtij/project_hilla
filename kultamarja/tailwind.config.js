/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    fontFamily: {
      PlayFairDisplay: ["PlayfairDisplay-VariableFont", "serif"],
      PlayFairDisplayItalic: ["PlayFairDisplay-Italic-VariableFont", "serif"],
      Lora: ["Lora-VariableFont", "sans-serif"],
      LoraItalic: ["Lora-Italic-VariableFont", "sans-serif"],
    },
    colors : {
      darkGreen: "#013220",
      cloudberry: "#FF9204",
      vanilla: "#F3E5AB",
    },
    screens : {
      md: "768px",
      360: "360px",
    },
  },
  plugins: [],
}
