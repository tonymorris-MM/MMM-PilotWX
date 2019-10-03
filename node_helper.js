const NodeHelper = require('node_helper');
const request = require('request');
const parser = require('xml2js').parseString;


module.exports = NodeHelper.create({
	  
    start: function() {
    	console.log("Starting module: " + this.name);
    },
    
    getMetar: function(site) {
        request(site, function(error, response, body) {
            return body;
        });
    }
});
