/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const path = require('path');

const getConfigurationByFile = (file) => {
    const pathToConfigFile = path.resolve('config', `${file}.js`);
    return require(pathToConfigFile);
}

const setConfig = (on, config) => {
    const file = config.env.configFile || 'local.config';
    return getConfigurationByFile(file);
}

module.exports = setConfig;
