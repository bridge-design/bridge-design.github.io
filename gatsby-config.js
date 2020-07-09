module.exports = {
  siteMetadata: {
    name: 'Bridge, the Tool',
    basepath: 'https://bridgetool.io',
    description: 'Bridge is a tool to bridge the gap between design and development. Build your brand and design system together!',
    keywords: ['design systems', 'design', 'development', 'ui', 'brand book', 'documenting design'],
    type: 'website',
    image: 'https://bridgetool.io/logo.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          pages: require.resolve('./src/templates/Page.js'),
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/logo.png', // This path is relative to the root of the site
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /src/
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Rubik',
            variable: true,
            weights: ['500', '700']
          },
          {
            family: 'Roboto',
            variable: true,
            weights: ['400', '500']
          },
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: false
      }
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        javascriptEnabled: true,
      },
    },
    {
      resolve: `gatsby-plugin-amplitude-analytics`,
      options: {
        // Specify the API key for your Amplitude Project (required)
        apiKey: "e5cd9cd75ff2d223b53ad095852a677a",
        // Puts tracking script in the head instead of the body (optional)
        head: false,
        // Prevents loading Amplitude and logging events if visitors have "Do Not Track" enabled (optional)
        respectDNT: true,
        // Avoids sending pageview hits from custom paths (optional)
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Override the default event types (optional)
        // eventTypes: {
        //   outboundLinkClick: 'OUTBOUND_LINK_CLICK',
        //   pageView: 'PAGE_VIEW',
        // },
        // Amplitude JS SDK configuration options (optional)
        amplitudeConfig: {
          saveEvents: true,
          includeUtm: true,
          includeReferrer: true
        }
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-172126555-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "UA-172126555-1",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "bridgetool.io",
      },
    },

    // The following are all optional plugins that you may find useful.
    // If you choose not to use them, consider removing them from your package.json!

    // This plugin enables Progressive Web App + Offline functionality
    // https://gatsby.app/offline
    // 'gatsby-plugin-offline',

    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
    //     head: false,
    //     anonymize: false,
    //     respectDNT: false,
    //   },
    // },

    // (optional) Enable the following for Google tag manager
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-tagmanager/
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: 'YOUR_GOOGLE_TAGMANAGER_ID',
    //     defaultDataLayer: { platform: "gatsby" },
    //   },
    // },

    // (optional) Enable the following for generation of an XML sitemap
    // https://www.gatsbyjs.org/packages/gatsby-plugin-advanced-sitemap/
    // 'gatsby-plugin-advanced-sitemap',
  ],
};
