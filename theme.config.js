/** @type {import('nextra-theme-docs').DocsThemeConfig} */

const themConfig = {
    logo: () => (
        <>
            <img
                style={{ marginRight: "1rem" }}
                height="20"
                width="40"
                src="/logo.png"
                alt="logo"
            />
            <h1>You Don't Know JS 1st Ed.</h1>
        </>
    ),
    footer: {
        text: "YDKJ Docs 2023",
    },
    project: {
        link: "https://github.com/shyamayadav154/ydkj-doc",
    },
    useNextSeoProps() {
        return {
            titleTemplate: "%s - YDKJ Docs",
        };
    },
    sidebar: {
        defaultMenuCollapseLevel: 1,
    },
};

export default themConfig;
