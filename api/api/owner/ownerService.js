const Owner = require('./owner');

//Create REST API, adds CRUD to Mongog's schema
Owner.methods(['get', 'post', 'put', 'delete']);

//Return post/put methods updated
Owner.updateOptions({new: true, runValidators: true});

module.exports = Owner