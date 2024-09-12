import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema({
    titolo: String,
    sottotitolo: { type: String, required: true },
    descrizione: { type: String },
    dataCreazione: { type: Date, default: Date.now() },
    attiva: { type: Boolean, default: true }
});

export const Categoria = mongoose.model("Categoria", categoriaSchema, "categorie");