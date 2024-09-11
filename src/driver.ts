import { MongoClient, ObjectId } from "mongodb";

export const insertProdotto = async (nome: string, prezzo: number) => {
    const client = new MongoClient(process.env.MONGO_ATLAS_CONNECTION_STRING!);

    try {
        const db = client.db("amazon");
        const collection = db.collection("prodotti");

        const prodotto = {
            nome,
            prezzo
        }

        const r = await collection.insertOne(prodotto);

        return r;

    } catch (error) {
        console.log(error);
    }
    finally {
        // chiude la connessione
        await client.close();
    }
}

export const getProdotti = async (przzoMaggioreDi: number | undefined = undefined) => {
    const client = new MongoClient(process.env.MONGO_ATLAS_CONNECTION_STRING!);

    try {
        const db = client.db("amazon");
        const collection = db.collection("prodotti");

        if (przzoMaggioreDi) {
            const query = {
                prezzo: { $gt: przzoMaggioreDi }
            }

            return await collection.find(query, {
                sort: { prezzo: -1 }
            }).toArray();
        } else {
            return await collection.find().toArray();
        }
    } catch (error) {
        console.log(error);
    }
    finally {
        // chiude la connessione
        await client.close();
    }
}

export const deleteProdotto = async (id: string) => {
    const client = new MongoClient(process.env.MONGO_ATLAS_CONNECTION_STRING!);

    try {
        const db = client.db("amazon");
        const collection = db.collection("prodotti");

        return await collection.deleteOne({
            _id: new ObjectId(id)
        });
    } catch (error) {
        console.log(error);
    }
    finally {
        // chiude la connessione
        await client.close();
    }
}