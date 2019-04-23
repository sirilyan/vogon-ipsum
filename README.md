# Introduction

This is an adaptation of the PRODUCE-GIBBERISH function from Infocom's text adventure The Hitchhiker's Guide To The Galaxy. In-game, this function is used to replace Vogon speech with random garbage if you are unable to understand it.

# Usage

```javascript
let vogon = require('vogon-ipsum')
process.stdout.write(vogon.produceGibberish(10))
```

# Acknowledgements

Without the work of Steve Meretzky and Douglas Adams, this would all be a bunch of dumb fake Latin.
