import * as Types from '../react-18next-validator'

/**
 * @function traverse
 * @description Traverse the translation object and add the key-value pairs to a map
 * @param {Object} node The current node
 * @param {Map<string, string>} map The map with the key-value pairs
 * @param {Array<string>} path The path of the current node
 * @returns {Map<string, string>} The map with the key-value pairs
 */
function traverse(node, map, path = []) {
	if (typeof node === 'object') {
		Object.entries(node).forEach(([key, value]) => {
			const currentPath = [...path, key]
			if (typeof value === 'string') {
				if (map.has(value)) {
					map.set(value, [...map.get(value), currentPath.join('.')])
				} else {
					map.set(value, [currentPath.join('.')])
				}
			}
			traverse(value, map, currentPath)
		})
	}
	return map
}

/**
 * @function checkForDuplicateValues
 * @description Check for duplicate values in translation file
 * @param {Map} translation The translation file
 * @param {Types.Config} config The config for the validator
 * @returns {void}
 */
function checkForDuplicateValues(translation, config) {
	const keyValueMap = new Map()

	console.info('Traversal started...')
	const traversedMap = traverse(translation, keyValueMap)

	console.info('Traversal finished. Checking for duplicates...')
	const result = []
	traversedMap.forEach((keys, value) => {
		if (keys.length > 1) result.push({ value, keys })
	})

	if (config.errorLevel === 'off') return
	if (result.length > 0) {
		const errorMessage = `Duplicate values found in translation.json:\n${JSON.stringify(result, null, 2)}`
		if (config.errorLevel === 'error') throw new Error(errorMessage)
		if (config.errorLevel === 'warn') console.warn(errorMessage)
	} else {
		console.info('No duplicates found.')
	}
}

export default checkForDuplicateValues
