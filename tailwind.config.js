module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        screens: {},
        fontFamily: {},
        extend: {
            colors: {
                darkblue: '#191923',
                'darkblue-light': '#2c2c38',
                'darkblue-lighter': '#4c4c62',
            },
            boxShadow: {
                link: '0 -8px 0 0 rgba(69, 72, 105, .6) inset',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
