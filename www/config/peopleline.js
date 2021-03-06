// user model
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PeopleLine = new Schema({

    email : String,
    position : String,
  	line: String,
  	store: String,
    fullname: String,
    longitude: String,
    latitude: String,
    distance: String,
    notificationkey: {
      type: String
    },
    storeAdmin:{
      type: String
    },
    lineAdmin:{
      type: Number
    },

    created: {
        type: Date,
        default: Date.now
    }

});
/*
created: {
    type: Date,
    default: Date.now
},

*/


module.exports = mongoose.model('peopleLine', PeopleLine);
