/**
 * @typedef {{errorLevel: 'warn'|'error'|'off', regex: Array<string>, src: string, directory: string}} Config
 * @description The default config for the validator
 * @property {'warn'|'error'|'off'} [errorLevel] The error level
 * @property {Array<string>} [regex] The regex to find the translation keys in the source files
 * @property {string} src The source folder
 * @property {string} directory The directory of the translation files
 */

export const Types = {}

/**
 * @type {Config}
 */
export const defaultConfig = {
	errorLevel: 'error',
	regex: ["t[(][`']([a-zA-z0-9.]*)[`'][,)]", "i18nKey=[`'\"]([^']+)[`'\"]"]
}
