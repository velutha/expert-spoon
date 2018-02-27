var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var option = new Schema({
    option: String,
    _id: false
});

var field = new Schema({
    field: String,
    _id: false
});

var rating = new Schema({
    field: String,
    rating: Number,
    _id: false
});

var questionSchema = new Schema({
    enterpriseId: {
        type:String,
        default: ''
    },
    section: {
        type:String,
        default: ''
    },
    type: {
        type:String,
        enum: ['Text','Choice','Rating'],
        default: ''
    },
    title: {
        type:String,
        default: ''
    },
    options: {
        type: [{
            option: String,
            _id: false
        }],
        default: [{option: ''}]
    },
    ratings: {
        type: [{
            field: String,
            _id: false
        }],
        default: [{field: ''}]
    }
});


var answerSchema = new Schema({
    revieweeId: {
        type:String,
        default: ''
    },
    enterpriseId: {
        type:String,
        default: ''
    },
    section: {
        type:String,
        default: ''
    },
    type: {
        type:String,
        enum: ['Text','Choice','Rating'],
        default: ''
    },
    title: {
        type:String,
        default: ''
    },
    text: {
        type: String,
        default: ''
        },
    options: {
        type: [{
            option: String,
            _id: false
        }],
        default: [{option: ''}]
    },
    choice: {
        type: String,
        default: ''
        },
    ratings: {
        type: [{
            field: String,
            rating: String,
            _id: false
        }],
        default: [{
            field: '',
            rating: ''
        }]
    }
});

questionSchema.set('timestamps',true);
answerSchema.set('timestamps',true);

var questionModel = mongoose.model('question',questionSchema);
var answerModel = mongoose.model('answer',answerSchema);

module.exports = {questionModel,answerModel};