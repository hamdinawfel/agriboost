var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    name: {
      type: String,
        default: '',
    },
    email:{
      type: String,
      required:true,
      unique:true
    },
    password: {
      type: String,
      // required:true
    },
    phone:{
      type: String,
    },
    admin:   {
      type: Boolean,
      default: true
    },
    root:   {
      type: Boolean,
      default: false
    },
   
  
});

User.plugin(passportLocalMongoose, { usernameField : 'email' });


module.exports = mongoose.model('User', User);
