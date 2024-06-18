import model from "./model.js";

export const createCourse = async (course) => {
  return await model.create(course);
};

export const findAllCourses = async () => {
  return await model.find();
};

export const findCourseById = async (id) => {
  return await model.findById(id);
};

export const updateCourse = async (id, course) => {
  return await model.updateOne({ _id: id }, course);
};

export const deleteCourse = async (id) => {
  return await model.deleteOne({ _id: id });
};
