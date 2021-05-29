# NODE.JS MODULES

Exploring the features of Node.js through the use of its modules

## How it works:
- Module system
  - Common JS (require / export) - node modules import:

```javascript
const os = require('os');
// importing module from node.js itself through require (it is sported by node.js), so it is possible to have access to the attributes and methods that it offers through this module, calling them through "os", which became object when receiving this module as indicated above
// obs: there are many other modules that can be exported

// it is also possible to import only some specific attributes of some module, with the JS destructuring technique, which basically already takes a specified attribute inside an object:
const const { freemem, totalmem } = os;
```