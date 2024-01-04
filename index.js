import config from './ri18next.config'

import { loadJsonFiles, loadTranslation, readFiles, getCodeKeys } from './utils.js'
import { checkForDuplicateValues } from './scripts/duplicates.js'
import { missingKeysInCode, missingKeysInTranslation } from './scripts/missing.js'

console.info('----------------------------------------')
console.info('[🟡] Starting react-i18next-validator...')
console.info('----------------------------------------')

const files = readFiles(config.src)
const codeKeys = files.map(file => getCodeKeys(file, config)).flat()
const translationFiles = loadJsonFiles(config)

for (const translationFile of translationFiles) {
	const translation = loadTranslation(translationFile)
	console.info('[🟡] Starting comparison...')
	console.info('----------------------------------------')

	checkForDuplicateValues(translation, config)
	missingKeysInCode(translation, codeKeys, config)
	missingKeysInTranslation(translation, codeKeys, config)
}

console.info('[✅] Comparison finished. All good.')
console.info('----------------------------------------')
