import * as dao from "./dao.js";

export default function CourseRoutes(app) {
    const createCourse = async (req, res) => {
        const newCourse = {
            ...req.body,
            _id: new Date().getTime().toString()
        };
        const course = await dao.createCourse(newCourse);
        res.json(course);
    };

    const deleteCourse = async (req, res) => {
        const status = await dao.deleteCourse(req.params.id);
        res.json(status);
    };

    const findAllCourses = async (req, res) => {
        const courses = await dao.findAllCourses();
        res.json(courses);
    };

    const updateCourse = async (req, res) => {
        const status = await dao.updateCourse(req.params.id, req.body);
        res.json(status);
    };

    app.post("/api/courses", createCourse);
    app.delete("/api/courses/:id", deleteCourse);
    app.get("/api/courses", findAllCourses);
    app.put("/api/courses/:id", updateCourse);
}