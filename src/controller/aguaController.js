import { insert, update, select, delet } from "../repository/aguaRepository.js";
import { Router } from "express";

const endpoint = Router();

endpoint.get("/agua", async (req, resp) => {
    try {
        const resultado = await select();
        resp.status(200).send(resultado);
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

endpoint.post("/agua", async (req, resp) => {
    try {
        const agua = req.body;
        const id = await insert(agua);
        resp.status(201).send({ id: id });
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

endpoint.put("/agua/:id", async (req, resp) => {
    try {
        const agua = req.body;
        const id = req.params.id;
        const resultado = await update(agua, id);
        resp.status(200).send({ resultado: resultado });
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

endpoint.delete("/agua/:id", async (req, resp) => {
    try {
        const id = req.params.id;
        const resultado = await delet(id);
        resp.status(200).send({ resultado: resultado });
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

export default endpoint;
