/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		  colors: {
  			primary: '#733DF3',
  			dark_primary: '#0a0617',
			light_primary: '#7b4cea',
			dark_primary: '#5b29d0',
  			light: '#fff',
  			dark: '#000',
  			muted: '#c1bebe',
		  },
			 fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
  	}
  },
	plugins: [
		require("tailwindcss-animate"),
		require('tailwindcss-animated')
	],
};
