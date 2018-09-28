# webhookify-plugin

This module contains an abstract class, which webhookify plugins should extend to be compatible with the webhookify client.

## Example

```javascript
import Plugin from 'webhookify-plugin'

class MyAwesomePlugin extends Plugin {
	constuctor(config) {
		// plugin name is set in the constructor of the base Plugin class
		super("myawesomeplugin", config);
	}
}
```