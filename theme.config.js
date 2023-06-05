/** @type {import('nextra-theme-docs').DocsThemeConfig} */

const themConfig = {
    logo: <span>You Don't Know JS 1st Ed.</span>,
    footer: {
        text: "YDKJ Docs 2023",
    },
    project: {
        link: "https://github.com/shyamayadav154/ydkj-doc",
    },
    useNextSeoProps(){
        return {
            titleTemplate: "%s - YDKJ Docs",
        }
    }
};

export default themConfig;
