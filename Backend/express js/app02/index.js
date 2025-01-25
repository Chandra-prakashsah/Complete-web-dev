const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const { dbConnection } = require("./dbConnection");
const { ObjectId } = require("mongodb");

app.get("/student", async (req, res) => {
    const myDb = await dbConnection();
    const stdData = await myDb.collection("students").find().toArray();
    res.send({
        status: 200,
        message: "success",
        data: stdData
    })
})
app.post("/student", async (req, res) => {
    const myDb = await dbConnection();
    const studentCollection = myDb.collection('students');
    const { name, email } = req.body;
    const resObj = {
        name,
        email
    }
    const findEmail = await studentCollection.findOne({ email });
    if (findEmail) {
        res.send({
            status: 201,
            message: `${email} already exists`,
            data: []
        })
    } else {
        const insertRes = await studentCollection.insertOne(resObj);
        res.send({
            status: 201,
            message: "created successfully",
            data: insertRes
        })
    }
})

app.delete("/student/:id", async (req, res) => {
    const db = await dbConnection();
    const stdCollection = await db.collection("students");
    const findId = await stdCollection.findOneAndDelete({ _id: new ObjectId(req.params.id) });
    if (findId) {
        res.send({
            status: 200,
            message: "deleted successfully!",
        })
    } else {
        res.send({
            status: 200,
            message: `${req.params.id} not found! `,
        })
    }
})

app.put("/student/:id", async (req, res) => {
    const {name,email}=req.body;
    const db = await dbConnection();
    const stdCollection = await db.collection("students");
    const checkEmail=await stdCollection.findOne({email});
    if(checkEmail){
        res.send({
            status:200,
            message:`${email} is already exist!`
        })
        return;
    }

    let obj={};
    if(name){
        obj['name']=name;
    }
    if(email){
        obj['email']=email;
    }
    const stdres = await stdCollection.updateOne({ _id: new ObjectId(req.params.id) }, { $set: obj });
    if(stdres){
        res.send({
            status:200,
            message:"updated successfully",
            data:stdres
        })    
    }else{
        res.send({
            status:200,
            message:"invalid id",
        })
    }
})

app.listen(process.env.Port, () => {
    console.log(`Server is running on port ${process.env.Port}`);
})