module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        screens: {},
        fontFamily: {},
        extend: {
            colors: {
                'darkblue': '#191923',
                'darkblue-light': '#2c2c38',
                'darkblue-lighter': '#4c4c62',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
