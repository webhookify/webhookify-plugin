# webhookify-plugin

This module contains an abstract class, which webhookify plugins should extend to be compatible with the webhookify client.

## Example

```javascript
const { Plugin } = require('webhookify-plugin');

class MyAwesomePlugin extends Plugin {
	constuctor(config) {
		// plugin name is set in the constructor of the base Plugin class
		super("myawesomeplugin", config);

		// the config can be accessed in this.config
	}

	handlePush(payload) {
		// do something with the payload here
	}

	handleFetch(payload, reply) {
		// do something with the payload, then call reply(response) within 5 seconds
	}

	// you can add additional methods and variables
}
```