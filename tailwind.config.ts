import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: { max: "767px" },
			// => @media (min-width: 640px and max-width: 767px) { ... }

			md: { max: "632px" },
			// => @media (min-width: 768px and max-width: 1023px) { ... }

			lg: { max: "1279px" },
			// => @media (min-width: 1024px and max-width: 1279px) { ... }

			xl: { max: "1535px" },
			// => @media (min-width: 1280px and max-width: 1535px) { ... }

			"2xl": { min: "633px" },
			// => @media (min-width: 1536px) { ... }
			mx: { min: "633px" },
		},
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": { min: "1535px" },

				xl: { min: "1279px" },

				lg: { min: "1023px" },

				mx: { min: "767px" },

				sm: { min: "639px" },
			},
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
