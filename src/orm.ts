import mongoose from "mongoose";
import { Categoria } from "./models/categoria";

export const insertCategoria = async (titolo: string, sottotitolo: string, descrizione: string) => {
    try {
        await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, { dbName: "amazon" });

        let cat = new Categoria();
        cat.titolo = titolo;
        cat.sottotitolo = sottotitolo;
        cat.descrizione = descrizione;

        return await cat.save();
    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.disconnect();
    }
}

export const getCategorie = async () => {
    try {
        await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, { dbName: "amazon" });

        return await Categoria.find();
    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.disconnect();
    }
}

export const getCategoriaById = async (id: string) => {
    try {
        await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, { dbName: "amazon" });

        return await Categoria.findById(id);
    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.disconnect();
    }
}

export const deleteCategoriaById = async (id: string) => {
    try {
        await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, { dbName: "amazon" });

        return await Categoria.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.disconnect();
    }
}

export const modificaStatoAttivazioneCategoriaById = async (id: string, attiva: boolean) => {
    try {
        await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, { dbName: "amazon" });

        let cat = await Categoria.findById(id);

        if (!cat) {
            throw new Error("Categoria non trovata");
        }

        cat.attiva = attiva;

        return await cat.save();
    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.disconnect();
    }
}


// OOP: membri statici
// class Persona {
//     nome: string;

//     constructor(nome: string) {
//         this.nome = nome;
//     }

//     saluta() {
//         console.log("Ciao", this.nome)
//     }

//     static doveViviamo() {
//         console.log("Sulla Terra");
//     }

//     static specie = "Mammifero";
// }

// let pippo = new Persona("Pippo");
// let mario = new Persona("Mario");

// mario.saluta();
// pippo.saluta();

// Persona.doveViviamo();