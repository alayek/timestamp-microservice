'use strict';

var moment = require("moment");

function TimestampHandler(){
    var self = this;
    
    self.generateResult = function(timestamp){
        if (!isNaN(parseInt(timestamp))) {
            // a number, millisecond components won't be present
            return {
                "unix" : moment(parseInt(timestamp) * 1000).unix(),
                "natural" : moment(parseInt(timestamp) * 1000).format("MMMM DD, YYYY")
            }
        }
        // a date timestamp
        return {
            "unix" : moment(new Date(timestamp)).unix(),
            "natural": moment(new Date(timestamp)).format("MMMM DD, YYYY")
        }
    }
}

module.exports = TimestampHandler;