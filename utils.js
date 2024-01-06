import fs from 'fs'
import * as Types from './ri18next.config.js'

/**
 * @function readFiles
 * @description Read all files in the given directory
 * @param {string} dir The directory to read
 * @returns {Array<string>} Returns an array with all .jsx and .tsx files
 */
export const readFiles = dir => {
	const files = []
	fs.readdirSync(dir).forEach(file => {
		const filePath = `${dir}/${file}`
		const stat = fs.statSync(filePath)
		if (stat && stat.isDirectory()) {
			files.push(...readFiles(filePath))
		} else if (file.endsWith('.jsx') || file.endsWith('.tsx')) {
			files.push(filePath)
		}
	})
	return files
}

/**
 * @function getCodeKeys
 * @description Get all code keys from the given file using the regexes from the config
 * @param {string} file The file to check
 * @param {Types.Config} config The config for the validator
 * @returns {Array<string>} Returns an array with all matches
 */
export const getCodeKeys = (file, config) => {
	const fileContent = fs.readFileSync(file, 'utf-8')
	const regexes = config.regex.map(regex => new RegExp(regex, 'g'))
	const codeKeys = []
	regexes.forEach(regex => {
		let match
		while ((match = regex.exec(fileContent)) !== null) {
			codeKeys.push(match[1])
		}
	})
	return codeKeys
}

/**
 * @function loadJsonFiles
 * @description returns all json files locales directory
 * @param {Types.Config} config The config for the validator
 * @returns {Array<string>} Returns an array with all json files
 */
export const loadJsonFiles = config => {
	const localeDirs = fs.readdirSync(config.directory).map(dir => `${config.directory}${dir}`)
	const translationFiles = localeDirs
		.map(dir => fs.readdirSync(dir).map(file => `${dir}/${file}`))
		.flat()
		.filter(file => file.endsWith('.json'))
	return translationFiles
}

/**
 * @function loadTranslation
 * @description Load the translation file and return it as a Map
 * @param {string} translationFile // Location of the translation file
 * @returns {Map} Returns the translation
 */
export const loadTranslation = translationFile => {
	const translation = fs.readFileSync(translationFile, 'utf-8')
	console.info(`[✅] Translation file loaded. File: ${translationFile}`)
	console.info('----------------------------------------')
	return JSON.parse(translation)
}
