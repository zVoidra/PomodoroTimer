module.exports = {
  mode: "jit",
  darkMode: "media",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",    
  ],
  theme: {
    extend: {
      colors: {
        gcolor1: "#bb7317",
        gcolor2: "#db971f",
        gcolor3: "#f0ba26",
        gcolor4: "#f9d52b"
      }
    },
  },
  plugins: [],
}
