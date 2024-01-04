import * as Types from '../ri18next.config'

/**
 * @function traverse
 * @description Traverse the translation object and add the key-value pairs to a map
 * @param {Object} node The current node
 * @param {Map<string, string>} map The map with the key-value pairs
 * @param {Array<string>} path The path of the current node
 * @returns {Map<string, string>} The map with the key-value pairs
 */
function traverse(node, map, path = []) {
	const keys = []
	if (typeof node === 'object') {
		Object.keys(node).forEach(key => {
			const currentPath = [...path, key.split('_')[0]]
			keys.push(...traverse(node[key], map, currentPath))
		})
	} else {
		keys.push(path.join('.'))
	}
	return keys
}

/**
 * @function missingKeysInTranslation
 * @description Check for missing keys in translation file
 * @param {Map} translation The translation file
 * @param {Array<string>} codeKeys The keys from the code
 * @param {Types.Config} config The config for the validator
 * @returns {void}
 */
function missingKeysInTranslation(translation, codeKeys, config) {
	console.info('[🟡] Checking for missing keys in translation...')
	const translationKeys = traverse(translation, new Map())
	const missingKeys = codeKeys.filter(key => !translationKeys.includes(key))

	if (config.errorLevel === 'off') return
	if (missingKeys.length > 0) {
		const errorMessage = `[❌] Missing keys in translation:\n${JSON.stringify(missingKeys, null, 2)}`
		if (config.errorLevel === 'error') throw new Error(errorMessage)
		if (config.errorLevel === 'warn') console.warn(errorMessage)
	} else {
		console.info('[✅] No missing keys found.')
	}

	console.info('----------------------------------------')
}

/**
 * @function missingKeysInCode
 * @description Check for missing keys in code
 * @param {Map} translation The translation file
 * @param {Array<string>} codeKeys The keys from the code
 * @param {Types.Config} config The config for the validator
 * @returns {void}
 */
function missingKeysInCode(translation, codeKeys, config) {
	console.info('[🟡] Checking for missing keys in code...')
	const translationKeys = traverse(translation, new Map())
	const missingKeys = translationKeys.filter(key => !codeKeys.includes(key))

	if (config.errorLevel === 'off') return
	if (missingKeys.length > 0) {
		const errorMessage = `[❌] Missing keys in code:\n${JSON.stringify(missingKeys, null, 2)}`
		if (config.errorLevel === 'error') throw new Error(errorMessage)
		if (config.errorLevel === 'warn') console.warn(errorMessage)
	} else {
		console.info('[✅] No missing keys found.')
	}

	console.info('----------------------------------------')
}

export { missingKeysInTranslation, missingKeysInCode }
