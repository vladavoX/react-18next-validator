/**
 * @typedef {{errorLevel: 'warn'|'error'|'off', regex: Array<RegExp>, src: string, directory: string, ignoreKeys: string[]}} Config
 * @description The default config for the validator
 * @property {'warn'|'error'|'off'} [errorLevel] The error level
 * @property {Array<RegExp>} [regex] The regex to find the translation keys in the source files
 * @property {string} src The source folder
 * @property {string} directory The directory of the translation files
 * @property {string[]} [ignoreKeys] The keys to ignore
 */

export const Types = {}

/**
 * @type {Config}
 */
export const defaultConfig = {
	errorLevel: 'error',
	regex: [/[ {()]t\(['`]([a-zA-Z0-9.]*)['`][,)]/g, /i18nKey=[`'"]([^'"]+)[`'"]/g]
}
