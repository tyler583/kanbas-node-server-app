import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
    const findModulesByCourseId = async (req, res) => {
        const { cid } = req.params;
        try {
            const modules = await dao.findModulesByCourseId(cid);
            res.json(modules);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    const createModule = async (req, res) => {
        const { cid } = req.params;
        const newModule = { ...req.body, course: cid };
        try {
            const module = await dao.createModule(newModule);
            res.json(module);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    const deleteModule = async (req, res) => {
        const { mid } = req.params;
        try {
            await dao.deleteModule(mid);
            res.sendStatus(200);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    const updateModule = async (req, res) => {
        const { mid } = req.params;
        try {
            await dao.updateModule(mid, req.body);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    app.get("/api/courses/:cid/modules", findModulesByCourseId);
    app.post("/api/courses/:cid/modules", createModule);
    app.delete("/api/modules/:mid", deleteModule);
    app.put("/api/modules/:mid", updateModule);
}
