import { config } from "dotenv";
config();

import * as driver from "./driver";
import * as orm from "./orm";

const mainDriver = async () => {
    // console.log(await driver.insertProdotto("Cipolle", 7));
    console.log(await driver.deleteProdotto("66e1d5a19f9e71e1a38c7761"));
    console.log(await driver.getProdotti(4));
}

const mainORM = async () => {
    console.log(await orm.insertCategoria("Strumenti Musicali", "Strumenti", "Categoria di strumenti musicali."));
}

// mainDriver();
mainORM();


// TYPESCRIPT NULL/UNDEFINED
// let pippo: string | undefined;

// function saluta(nome: string) {
//     console.log(nome);
// }

// saluta(pippo!);

// class PippoComponent {
//     prodotto?: string;
// }
