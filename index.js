#!/usr/bin/env node
import path from 'path'
import * as Types from './ri18next.config.js'

const CONFIG_FILE_NAME = 'ri18next-v.config.js'
const configFilePath = path.resolve(CONFIG_FILE_NAME)

const { config } = await import(configFilePath)

import { defaultConfig } from './ri18next.config.js'
import { loadJsonFiles, loadTranslation, readFiles, getCodeKeys } from './utils.js'
import { checkForDuplicateValues } from './scripts/duplicates.js'
import { missingKeysInCode, missingKeysInTranslation } from './scripts/missing.js'

console.info('----------------------------------------')
console.info('[🟡] Starting react-i18next-validator...')
console.info('----------------------------------------')

/**
 * @type {Types.Config}
 */
const mergedConfig = {
	errorLevel: config?.errorLevel || defaultConfig.errorLevel,
	src: config.src,
	directory: config.directory,
	regex: config?.regex ? [...config.regex, ...defaultConfig.regex] : defaultConfig.regex,
	ignoreKeys: config?.ignoreKeys || []
}

const files = readFiles(mergedConfig.src)
const codeKeys = files.map(file => getCodeKeys(file, mergedConfig)).flat()
const translationFiles = loadJsonFiles(mergedConfig)

for (const translationFile of translationFiles) {
	const translation = loadTranslation(translationFile)
	console.info('[🟡] Starting comparison...')
	console.info('----------------------------------------')

	checkForDuplicateValues(translation, mergedConfig)
	missingKeysInTranslation(translation, codeKeys, mergedConfig)
	missingKeysInCode(translation, codeKeys, mergedConfig)
}

console.info('[✅] Comparison finished. All good.')
console.info('----------------------------------------')
