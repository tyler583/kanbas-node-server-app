// import model from "./model.js";


// export const createQuiz = (quiz) => {
//     delete quiz._id;
//     return model.create(quiz);
// }

// export const findAllQuizzes = (cid) => {
//     return model.find({ course: cid });
// }

// export const findQuizById = (qid) => {
//     return model.findById(qid);
// }


// export const deleteQuiz = (qid) => {
//     return model.deleteOne({ _id: qid });
// }
    

// export const updateQuiz = (qid, newQuiz) => {
//     return model.replaceOne({ _id: qid }, newQuiz);
// }

import model from "./model.js";

export const findAllCourseQuizzes = (cid) => model.find({course: cid});
export const createQuiz = (quiz) => {
    return model.create(quiz);
};
export const deleteQuiz = (quizId) => model.deleteOne({_id: quizId});
export const updateQuiz = (quizId, quiz) => model.updateOne({_id: quizId}, {$set: quiz});
export const findOneQuiz = (cid, qid) => model.find({course: cid, _id: qid});