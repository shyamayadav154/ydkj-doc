/** @type {import('nextra-theme-docs').DocsThemeConfig} */
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const themConfig = {
    docsRepositoryBase: "https://github.com/shyamayadav154/ydkj-doc/tree/main",
    logo: () => (
        <>
            <img
                style={{ marginRight: "1rem" }}
                height="20"
                width="40"
                src="/logo.png"
                alt="logo"
            />
            <h1>You Don't Know JS</h1>
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
    head: () => {
        const { route } = useRouter();
        let { frontMatter, title } = useConfig();
        const titleSuffix = "YDKJ Docs";
        const description = "You Don't Know JS 1st Ed. - Docs";
        const imageUrl = new URL("https://ydkj-doc.vercel.app/logo.png");

        if (!/\/index\.+/.test(route)) {
            imageUrl.searchParams.set("title", title);
        }
        const ogTitle = title
            ? `${title} – YDKJ Docs`
            : `YDKJ Docs: ${titleSuffix}`;
        const ogDescription = frontMatter.description || description;
        const ogImage = frontMatter.image || imageUrl.toString();

        return (
            <>
                {/* Favicons, meta */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/favicon/safari-pinned-tab.svg"
                    color="#000000"
                />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="apple-mobile-web-app-title" content="YDKJ - Docs" />
                <meta name="description" content={ogDescription} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@vercel" />
                <meta name="twitter:image" content={ogImage} />
                <meta property="og:title" content={ogTitle} />
                <meta property="og:description" content={ogDescription} />
                <meta property="og:image" content={ogImage} />
            </>
        );
    },
};

export default themConfig;
