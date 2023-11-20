const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
    plugins: [
        require("cssnano")({
            preset: "default",
        }),
        purgecss({
            content: ["./ninacarducci.github.io/index.html", "**/*.js"],
        }),
    ],
};
