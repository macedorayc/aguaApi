import { insert, update, select, delet } from "../repository/aguaRepository.js";

import { Router } from "express";

const endpoint = Router();

endpoint.get("/agua", async (req, resp) => {
    const resultado = await select();
    resp.status(200).json(resultado);
});
endpoint.post("/agua", async (req, resp) => {
    const agua = req.body;
    const id = await insert(agua);
    resp.status(201).json({ id: id });
});
endpoint.put("/agua/:id", async (req, resp) => {
    const agua = req.body;
    const id = req.params.id;
    const resultado = await update(agua, id);
    resp.status(200).json({ resultado: resultado });
});
endpoint.delete("/agua/del/:id", async (req, resp) => {
    const id = req.params.id;
    const resultado = await delet(id);
    resp.status(200).json({ resultado: resultado });
});













export default endpoint;