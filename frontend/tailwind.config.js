/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		'./pages/**/*.{js,jsx}',
	  './components/**/*.{js,jsx}',
	  './app/**/*.{js,jsx}',
	  './src/**/*.{js,jsx}',
	  ],
  theme: {
  	extend: {
  		colors: {
  			color_1: '#25293A', //deep gray
  			color_2: '#2DBEFD', //blue
  			color_3: '#FF0000', //red
  			color_4: '#d1d5db'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [],
}

