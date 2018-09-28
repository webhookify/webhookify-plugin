const packageInfo = require('./package.json');

/**
 * @callback fetchCallback
 * @param {Error} err
 * @param {Object} response
 */

class Plugin {
	constructor(name, config) {
		this._name = name;
		this._config = config;
	}

	get name() {
		return this._name;
	}

	get config() {
		return this._config;
	}

	static get version() {
		return packageInfo.version; //return version from package.json
	}

	/**
	 * Handle a PUSH message coming from the server
	 * @param {Object} payload 
	 */
	handlePush(payload) {
		console.log("PUSH", payload);
	}

	/**
	 * Handle a FETCH message from the server.
	 * Callback needs to be called with
	 * @param {Object} payload 
	 * @param {fetchCallback} callback 
	 */
	handleFetch(payload, callback) {
		console.log("FETCH", payload);
		return callback(null, {});
	}
}

export default Plugin;