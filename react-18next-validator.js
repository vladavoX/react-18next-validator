/**
 * @typedef {{input: string, errorLevel: 'warn'|'error'|'off'}} Config
 */

/**
 * @type {Config}
 * @description The config for the validator
 * @property {string} input The path to the translation file
 * @property {'warn'|'error'|'off'} errorLevel The error level
 */
const config = {
	input: '../test/public/locales/en/translation.json',
	errorLevel: 'error'
}

export default config
