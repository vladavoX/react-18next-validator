import fs from 'fs'
import config from './react-18next-validator.js'
import checkForDuplicateValues from './scripts/duplicates.js'

/**
 * @function loadTranslation
 * @description Loads the translation file provided in the config
 * @returns {Map} The translation file as an object
 */
function loadTranslation() {
	const file = fs.readFileSync(config.input, 'utf-8')
	return JSON.parse(file)
}

const translation = loadTranslation()
checkForDuplicateValues(translation, config)

/**
 * @function readFiles
 * @description Read all files in the given directory
 * @param {string} dir The directory to read
 * @returns {Array<string>} Returns an array with all .jsx and .tsx files
 */
function readFiles(dir) {
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

const files = readFiles(config.src)

/**
 * @function getCodeKeys
 * @description Get all code keys from the given file using the regexes from the config
 * @param {string} file The file to check
 * @returns {Array<string>} Returns an array with all matches
 */
function getCodeKeys(file) {
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

const codeKeys = files.map(file => getCodeKeys(file)).flat()
