import { MongoClient } from "mongodb";


async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const client = await MongoClient.connect(
        "mongodb+srv://admin:0dDXKLu97PJuxyhR@cluster0.yg0xi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    try {
        const db = client.db();
        const todoCollection = db.collection("task-manage");

        const result = await todoCollection.insertOne(req.body);
        client.close();
        res.status(201).json({ message: "Todo added!", data: result });
    } catch (err) {
        console.error(err);
        
    } 
}

export default handler;
