import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
    if (req.method !== "PUT") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { id } = req.query; 
    const updatedData = req.body; 

    const client = await MongoClient.connect(
        "mongodb+srv://admin:0dDXKLu97PJuxyhR@cluster0.yg0xi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    try {
        const db = client.db();
        const todoCollection = db.collection("task-manage");

        const result = await todoCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updatedData }
        );

    

        res.status(200).json({ message: "Task updated successfully!" });
    } catch (err) {
        console.error( err);
    
    } finally {
        client.close();
    }
}

export default handler;
