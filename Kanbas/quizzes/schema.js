// import mongoose from "mongoose";

// const quizzesSchema = new mongoose.Schema({
//     _id: { type: String, index: false},
//     title: String,
//     description: String,
//     quizType: {
//         type: String, 
//         default: "graded quiz",
//         enum: ["graded quiz", "practice quiz", "graded survey", "ungraded survey"]
//     },
//     points: Number,
//     assignmentGroup: {
//         type: String, 
//         default: "quizzes",
//         enum: ["quizzes", "exams", "assignments", "project"]
//     },
//     shuffleAnswers: {
//         type: Boolean, 
//         default: true 
//     },
//     timeLimit: {
//         type: Boolean, 
//         default: true
//     },
//     multipleAttempts: {
//         type: Boolean, 
//         default: false
//     },
//     howManyAttempts: {
//         type: Number,
//         default: 1
//     },
//     showCorrectAnswers: Boolean,
//     accessCode: String,
//     oneQuestionAtATime: {
//         type: Boolean, 
//         default: true
//     },
//     webcamRequired: {
//         type: Boolean, 
//         default: false
//     },
//     lockQuestionsAfterAnswering: {
//         type: Boolean, 
//         default: true
//     },
//     dueDate: String,
//     availableDate: String,
//     untilDate: String,

//   },
//   { collection: "quizzes" }
// );
// export default quizzesSchema;

import mongoose from "mongoose";
const quizzesSchema = new mongoose.Schema({
    _id: { type: String, index: false},
    title: { type: String, required: true},
    course: { type: String, required: true},
    due: String,
    availableFrom: String,
    availableUntil: String,
    questions: Array,
    points: Number,
    quizType: {
        type: String, 
        enum: ["graded quiz", "practice quiz", "graded survey", "ungraded survey"],
        default: "graded quiz" 
    },
    assignmentGroup: {
        type: String, 
        enum: ["assignments", "quizzes", "exams", "project"],
        default: "quizzes" 
    },
    instructions: String,
    shuffleAnswers: {
        type: Boolean, 
        default: true 
    },
    timeLimit: {
        type: Boolean, 
        default: true
    },
    minutes: String,
    allowMultipleAttempts: {
        type: Boolean, 
        default: false
    },
    assignTo: String,
    status: String,
    showCorrectAnswers: {
        type: Boolean,
        default: true
    },
    accessCode: String,
    oneQuestionAtATime: {
        type: Boolean, 
        default: true
    },
    webcamRequired: {
        type: Boolean,
        default: false
    },
    lockQuestions: {
        type: Boolean,
        default: false
    },
    requiredToViewResults: {
        type: Boolean, 
        default: false
    },
    requireLockdownBrowser: {
        type: Boolean,
        default: false
    },
    viewResponses: {
        type: Boolean,
        default: true
    },
    attemptsAllowed: {
        type: Number,
        default: 1
    }
  },
  { collection: "quizzes" }
);
export default quizzesSchema;