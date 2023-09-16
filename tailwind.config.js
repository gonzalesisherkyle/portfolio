const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,html}',
    ],

    theme: {
        fontFamily: {
            primary: "Playfair Display",
            body: "Work Sans",
        },
        container: {
            padding: {
                DEFAULT: "1rem",
                lg: "3rem",
            },
        },
        extend: {
            colors: {
                "light-primary": "#fcfffd",
                "light-secondary": "#c0fdfb",
                "light-tail-100": "#64b6ac",
                "light-tail-500": "#5d737e",
                "dark-primary": "#191308",
                "dark-secondary": "#454b66",
                "dark-navy-100": "#677db7",
                "dark-navy-500": "#9ca3db",
                accent: {
                    DEFAULT: "#ac6b34",
                    hover: "#925a2b",
                },
                paragraph: "#878e99",
                blue: colors.blue,
                indigo: colors.indigo,
                green: colors.green,
                red: colors.red,
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
