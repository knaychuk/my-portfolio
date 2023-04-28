/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"]
			},
			boxShadow: {
				"custom": "0 12px 20px rgba(0,0,0,.35)"
			},
		},
	},
	plugins: [],
}
