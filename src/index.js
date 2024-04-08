#!/usr/bin/env node

"use strict";

const fs = require("fs");
const exec = require("child_process").exec;

module.exports = {
    plugins: ["plugins/markdown"],
    recurseDepth: 10,
    source: {
        include: ["."],
        includePattern: ".+\\.(j|t)s(doc|x)?$",
        excludePattern: "(node_modules|jsdoc)"
    },
    sourceType: "module",
    tags: {
        allowUnknownTags: true,
        dictionaries: ["jsdoc", "closure"]
    },
    templates: {
        cleverLinks: true,
        monospaceLinks: true,
        collapse: true,
        disableSort: true,
        // referenceTitle: "Tata Devices"
    },
    opts: {
        reference: "1.0",
        destination: "./docs/jsdoc",
        recurse: true,
        readme: "../README.md",
        template: "./node_modules/jsdoc-template",
        // hostname: "pippo"
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

if (require.main === module){
    const config_file = ".jsdoc_config.js"
    console.log("Setting config file");
    fs.writeFileSync(`./${config_file}`, "module.exports = require(\"@cionzo/jsdoc-config\")");
    console.log("Installing jsdoc")
    exec("npm install --save-dev jsdoc")
    console.log("Updating package.json");
    const package_json_content = JSON.parse(fs.readFileSync("./package.json").toString())
    package_json_content.scripts.jsdoc = `jsdoc -P package.json -c ${config_file} . `
    fs.writeFileSync("./package.json", JSON.stringify(package_json_content, undefined,4))
}