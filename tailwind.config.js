/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myPurple: "#2F1444",
        myBlue: "#29C8EF",
        myGray: "rgba(221, 206, 214, 0.41)",
      },
      borderRadius: {
        custome: "6rem",
      },
      animation: {
        pulse_once:
          "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) 0s 1 normal none running",
      },
      animation: {
        pulse_fast: "pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      variants: {
        animation: ["responsive", "motion-safe", "motion-reduce"],
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      height: {
        "100px": "100px",
        "200px": "200px",
        "250px": "250px",
        "300px": "300px",
        "400px": "400px",
        "500px": "500px",
        "600px": "600px",
        "700px": "700px",
        "800px": "800px",
        "900px": "900px",
        "1000px": "1000px",
      },
      width: {
        "100px": "100px",
        "200px": "200px",
        "250px": "250px",
        "300px": "300px",
        "400px": "400px",
        "500px": "500px",
        "600px": "600px",
        "700px": "700px",
        "800px": "800px",
        "900px": "900px",
        "1000px": "1000px",
      },
      maxWidth: {
        "100px": "100px",
        "200px": "200px",
        "300px": "300px",
        "400px": "400px",
        "500px": "500px",
        "600px": "600px",
        "700px": "700px",
        "800px": "800px",
        "900px": "900px",
        "1000px": "1000px",
      },
      minHeight: {
        "100px": "100px",
        "200px": "200px",
        "300px": "300px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
