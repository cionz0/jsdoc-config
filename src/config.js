module.exports = {
    plugins: ["plugins/markdown"],
    recurseDepth: 10,
    source: {
        include: ["."],
        includePattern: ".+\\.(j|t)s(doc|x)?$",
        excludePattern: "(node_modules|jsdoc|lib)"
    },
    sourceType: "module",
    tags: {
        allowUnknownTags: true,
        dictionaries: ["jsdoc", "closure"]
    },
    // templates: {
    //     cleverLinks: true,
    //     monospaceLinks: true,
    //     collapse: true,
    //     disableSort: true,
    //     // referenceTitle: "Tata Devices"
    // },
    opts: {
        encoding: "utf-8",
        readme: "../README.md",
        destination: "./docs/jsdoc",
        recurse: true,
        verbose: true,
        // reference: "1.0",
        template: "node_modules/clean-jsdoc-theme",
        theme_opts: {
            sort: true,
            search: true,
            default_theme: "dark", // "light", "fallback-dark", "fallback-light"
            // "base_url": "https://ankdev.me/v4/"
            // "favicon": "path/to/img"
            homepageTitle: "Clean JSDoc theme",
            menu: [
                {
                    "title": "Website",
                    "link": "https://ankdev.me/clean-jsdoc-theme/dark/",
                    "target": "_blank",
                    "class": "some-class",
                    "id": "some-id"
                },
                {
                    // more if you want to.
                }
            ],
            "meta": [
                {
                    "name": "author",
                    "content": "Ankit Kumar"
                },
                {
                    "name": "description",
                    "content": "Best Clean and minimal JSDoc 3 Template/Theme"
                }
            ],
            "footer": "This is footer" // or <div class="footer-wrapper">This is a footer </div>
        }
        // hostname: "pippo"
    },
    markdown: {
        hardwrap: false,
        idInHeadings: true,

        // This is important for clean-jsdoc-theme, otherwise some features might not work.
    },
    "cionzo": {
        "source_docs": "https://www.akshatsharma.com/2017/04/22/jsdoc.html",
        "template_taken_from": "cd",
        "template": "node_modules/jsdoc-template",
        "removed": {
            "templates": {
                "resources": {
                    "Firestore Docs<br/>": "https://googleapis.dev/nodejs/firestore/latest",
                    "Google Identity Platform<br/>": "https://cloud.google.com/identity-platform/docs/use-rest-api"
                }
            }
        }
    }
};