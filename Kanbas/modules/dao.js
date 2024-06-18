import model from "./model.js";

export const createModule = async (module) => {
  return await model.create(module);
};

export const findModulesByCourseId = async (courseId) => {
  return await model.find({ course: courseId });
};

export const findModuleById = async (id) => {
  return await model.findById(id);
};

export const updateModule = async (id, module) => {
  return await model.updateOne({ _id: id }, module);
};

export const deleteModule = async (id) => {
  return await model.deleteOne({ _id: id });
};
