const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
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


const answerSchema = new Schema({
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

const questionModel = mongoose.model('question',questionSchema);
const answerModel = mongoose.model('answer',answerSchema);

module.exports = {questionModel,answerModel};