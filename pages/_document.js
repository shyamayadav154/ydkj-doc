import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { SkipNavLink } from "nextra-theme-docs";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <script src="https://openchat.so/chat.js"></script>
                    <script>
                        {`
document.addEventListener('DOMContentLoaded', function() {
    var chatConfig = {
    token: "YqCXSKOY9RFBME8p7ZHi",
    };
    initializeChatWidget(chatConfig);
});
`}
                    </script>
                </Head>
                <body>
                    <SkipNavLink styled />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
