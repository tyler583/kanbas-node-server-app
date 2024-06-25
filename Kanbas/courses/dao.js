import model from "./model.js";

export const findAllCourses = () =>
    model.find();

export const createCourse = (course) => {
    model.create(course);
};

export const deleteCourse = (courseId) =>
    model.deleteOne({ _id: courseId });

export const updateCourse = (courseId, course) =>
    model.updateOne({ _id: courseId }, { $set: course });