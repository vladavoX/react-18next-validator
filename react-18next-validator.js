/**
 * @typedef {{input: string, errorLevel: 'warn'|'error'|'off', src: string}} Config
 * @description The config for the validator
 * @property {string} input The path to the translation file
 * @property {'warn'|'error'|'off'} errorLevel The error level
 * @property {string} src The path to the source files
 * @property {Array<string>} regex The regex to find the translation keys in the source files
 */

export const Types = {}

/**
 * @type {Config}
 */
const config = {
	input: '../test/public/locales/en/translation.json',
	errorLevel: 'error',
	src: '../test/src',
	regex: ["t[(][`']([a-zA-z0-9.]*)[`'][,)]", "i18nKey=[`'\"]([^']+)[`'\"]"]
}

export default config
