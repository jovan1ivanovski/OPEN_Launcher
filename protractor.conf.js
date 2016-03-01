var path = require('path');
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [path.normalize("app/tests/e2e/example.js")]
};