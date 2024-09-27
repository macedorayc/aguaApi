
import con from "./connetion.js";

 export async function insert(agua) {
        const comando= 'INSERT INTO agua (nm_classificacao, ds_salinidade, ds_uso) VALUES (?, ?, ?)';
        const info= await con.query(comando, [agua.classificacao, agua.salinidade, agua.uso]);
         let result = info[0];

        return result.insertId;
    }


    export async function update(agua, id) {
        const comando= 'UPDATE agua SET nm_classificacao = ?, ds_salinidade = ?, ds_uso = ? WHERE id = ?';
        const result = await con.query(comando, [agua.classificacao, agua.salinidade, agua.uso, id]);

        let resultado = result[0]
        return resultado.affectedRows;
    }


    export async function select() {
        const comando= `SELECT 
        id                  id,
        nm_classificacao  classificacao,
        ds_salinidade      salinidade,
        ds_uso             uso
         FROM agua `;
        const result = await con.query(comando);
        let resultado = result[0]
        return resultado
    }



    export async function delet(id) {
        const comando= `
        DELETE FROM agua
        WHERE id = ?;
        `
        const result = await con.query(comando, [id]);
        let resultado = result[0]
        return resultado.affectedRows;
    }