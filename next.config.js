

const withNextra = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.js",
    defaultShowCopyCode: true,
    staticImages: true,
    flexSearch: {
        codeblock: false
    },
    restrictedMode:true,

});

module.exports = withNextra();
