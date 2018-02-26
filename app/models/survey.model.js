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
    enterpriseId: String,
    section: String,
    type: String,
    title: String,
    options: {
        type: [option],
        default: [{option: 'Not this type of question'}]
    },
    ratings: {
        type: [field],
        default: [{field: 'Not this type of question'}]
    }
});


var answerSchema = new Schema({
    revieweeId: String,
    enterpriseId: String,
    section: String,
    type: String,
    title: String,
    text: {
        type: String,
        default: 'Not a text question'
        },
    options: {
        type: [option],
        default: [{option: 'Not this type of question'}]
    },
    choice: {
        type: String,
        default: 'Not a text question'
        },
    ratings: {
        type: [field],
        default: [{field: 'Not this type of question'}]
    }
});

questionSchema.set('timestamps',true);
answerSchema.set('timestamps',true);

var questionModel = mongoose.model('question',questionSchema);
var answerModel = mongoose.model('answer',answerSchema);

module.exports = {questionModel,answerModel};