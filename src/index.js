//#!/usr/bin/env node

"use strict";

const fs = require("fs");
const exec = require("child_process").exec;



if (require.main === module){
    const config_file = ".jsdoc_config.js"
    console.log("Setting config file");
    fs.writeFileSync(`./${config_file}`, "module.exports = require(\"@cionzo/jsdoc-config/config\")");
    console.log("Installing jsdoc")
    exec("npm install --save-dev jsdoc")
    console.log("Updating package.json");
    const package_json_content = JSON.parse(fs.readFileSync("./package.json").toString())
    package_json_content.scripts.jsdoc = `jsdoc -P package.json -c ${config_file}`
    fs.writeFileSync("./package.json", JSON.stringify(package_json_content, undefined,4))
}