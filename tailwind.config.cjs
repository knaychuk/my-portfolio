/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"]
			},
			boxShadow: {
				"project-cards": "0 12px 20px rgba(0,0,0,.35)",
				"navbar": "box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
			},
		},
	},
	plugins: [],
}
