module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron', 
      secondary: 'Rajdhani', 
      tertiary: 'Aldrich',
    },
    container: {
      center: true, 
      padding: {
        DEFAULT: '1rem', 
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px', 
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: {
          DEFAULT: '#4F46E5', 
          hover: '#4338CA', 
        },
         light: '#F8F9FA',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/avatar.png')",
        services: "url('./assets/services.png')",
      },
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};