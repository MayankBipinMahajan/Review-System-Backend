import express, { response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dbConnect from "./config/database.js";
import userModel from "./models/user.js";
import { createAdmin,createAlumni,createStudent,getAllUsers } from "./controllers/userController.js";
import { createCompany,getCompanies } from "./controllers/companyController.js";
import { createReview,getAllReviews } from "./controllers/reviewsController.js";
import { likeReviews } from "./controllers/likesController.js";
import router from "./routes/FeedbackRoutes.js";

const app=express();

const PORT = 3000;

app.use(express.json())
//mounting api routes
app.use("/api/v1",router)
dotenv.config();

dbConnect();


app.post("/api/v1/admin/create",createAdmin);
app.post("/api/v1/alumni/create",createAlumni);
app.post("/api/v1/student/create",createStudent);
app.post("/api/v1/company/create",createCompany);
app.post("/api/v1/review/create",createReview);
app.post("/api/v1/like/add",likeReviews);

app.get("/api/v1/user/get",getAllUsers);
app.get("/api/v1/company/get",getCompanies);
app.get("/api/v1/review/get",getAllReviews);



app.listen(PORT ,()=>{
    console.log(`Aniket selling his ass at ${PORT}`);
})