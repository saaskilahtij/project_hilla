/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    fontFamily: {
      PlayFairDisplay: ["PlayfairDisplay-VariableFont", "sans-serif"],
      PlayFairDisplayItalic: ["PlayFairDisplay-Italic-VariableFont", "sans-serif"],
      Lora: ["Lora-VariableFont", "sans-serif"],
      LoraItalic: ["Lora-Italic-VariableFont", "sans-serif"],
    },
    colors : {
      darkGreen: "#013220",
      cloudberry: "#FF9204",
    }
  },
  plugins: [],
}
