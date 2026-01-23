import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend: {
		fontFamily: {
			sora: 'var(--font-sora)',
			lato: 'var(--font-lato)',
			poppins: 'var(--font-poppins)',
			beVietnamPro: 'var(--font-beVietnamPro)',
			inter: 'var(--font-inter)',
			outfit: 'var(--font-outfit)',
			dmSans: 'var(--font-dmSans)'
		},
		boxShadow: {
			'minimal-card': '0px 30px 100px 0px rgba(17, 23, 41, 0.05)'
		},
		backgroundImage: {
			contact: "url('/images/bg-image.svg')",
			'music-player': "url('/images/bg-music-player.webp')",
			quote: "url('/images/bg-image-random-quote.svg')",
			qr: "url('/images/bg-illustration.svg')",
			cafe: "url('/images/bg-cafe.webp')",
			github: "url('/images/hero-image-github-profile.webp')",
			country: "url('/images/hero-image-wr.webp')",
			quiz: "url('/images/bg.jpg')",
			code: "url('/images/Hero-Background-notecode@2x.webp')",
			collection: "url('/images/hero-image.avif')",
			'collection-gradient': "url('/images/gradiend-bg-unsplash.avif')"
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
		colors: {
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			}
		}
	}
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
export default config;
