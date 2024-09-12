import mongoose from "mongoose";


interface ICategoria {
    titolo?: string,
    sottotitolo: string,
    descrizione?: string,
    dataCreazione: Date,
    attiva: boolean
}

const categoriaSchema = new mongoose.Schema<ICategoria>({
    titolo: String,
    sottotitolo: { type: String, required: true },
    descrizione: { type: String },
    dataCreazione: { type: Date, default: Date.now() },
    attiva: { type: Boolean, default: true }
});

export const Categoria = mongoose.model<ICategoria>("Categoria", categoriaSchema, "categorie");