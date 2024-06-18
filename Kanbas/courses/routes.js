import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const findAllCourses = async (req, res) => {
    try {
      const courses = await dao.findAllCourses();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const createCourse = async (req, res) => {
    try {
      const course = await dao.createCourse(req.body);
      res.json(course);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const deleteCourse = async (req, res) => {
    const { id } = req.params;
    try {
      await dao.deleteCourse(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const findCourseById = async (req, res) => {
    const { id } = req.params;
    try {
      const course = await dao.findCourseById(id);
      res.json(course);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const updateCourse = async (req, res) => {
    const { id } = req.params;
    try {
      await dao.updateCourse(id, req.body);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  app.get("/api/courses", findAllCourses);
  app.post('/api/courses', createCourse);
  app.delete('/api/courses/:id', deleteCourse);
  app.get('/api/courses/:id', findCourseById);
  app.put('/api/courses/:id', updateCourse);
}
