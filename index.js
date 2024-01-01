import fs from 'fs'
import config from './react-18next-validator.js'

/**
 * @function loadTranslation
 * @description Loads the translation file provided in the config
 * @returns {Map} The translation file as an object
 */
function loadTranslation() {
	const file = fs.readFileSync(config.input, 'utf-8')
	return JSON.parse(file)
}

import checkForDuplicateValues from './scripts/duplicates.js'

const translation = loadTranslation()
checkForDuplicateValues(translation, config)
