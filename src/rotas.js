import agua from "../src/controller/aguaController.js";


export function adicionarRotas(servidor) {
    servidor.use(agua);
}