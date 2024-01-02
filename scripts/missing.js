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
			const currentPath = [...path, key]
			keys.push(...traverse(node[key], map, currentPath))
		})
	} else {
		keys.push(path.join('.'))
	}
	return keys
}

function missingKeysInTranslation(translation, codeKeys, config) {
	const translationKeys = traverse(translation, new Map())
}

function missingKeysInCode(translation, codeKeys, config) {
	console.info('Traversal started...')
	const translationKeys = traverse(translation, new Map())
	console.info('Traversal finished. Comparing keys...')
	const missingKeys = translationKeys.filter(key => !codeKeys.includes(key))

	if (config.errorLevel === 'off') return
	if (missingKeys.length > 0) {
		const errorMessage = `Missing keys in code:\n${JSON.stringify(missingKeys, null, 2)}`
		if (config.errorLevel === 'error') throw new Error(errorMessage)
		if (config.errorLevel === 'warn') console.warn(errorMessage)
	} else {
		console.info('No missing keys found.')
	}
}

export { missingKeysInTranslation, missingKeysInCode }
