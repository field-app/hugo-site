/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'field-black': '#000000',
				'field-white': '#FFFFFF',
				'field-darkgray': '#1E1E1E',
				'field-gray': '#98999A',
				'field-lightgray': '#F2F2F2',
				'field-green': '#1BD760',
			},
		},
	},
	plugins: [],
}
