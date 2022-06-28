module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: "#A39660",
                purple: "#360242",
                cream: "#f0eee2",
            },
        },
    },
    plugins: [require("daisyui")],
};
