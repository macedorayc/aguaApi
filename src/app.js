import "dotenv/config";
import { adicionarRotas } from "./rotas.js";
import express from "express";
import cors from "cors";

const servidor = express()
servidor.use(cors())
servidor.use(express.json())

adicionarRotas(servidor);


const PORTA = process.env.PORTA 

servidor.listen(PORTA, () => 
    console.log(`--> API subiu na porta ${PORTA}`)
);