/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Furnish Apart`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-styled-components",
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ["G-78MT0L56SL"],
                pluginConfig: {
                    head: true,
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/utils/imgs/icon.png",
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/utils/imgs/",
            },
            __key: "images",
        },
    ],
}
