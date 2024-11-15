
import userModel from "../models/user.js";
export const createAdmin = async(req,res)=>{
    try{
       const {name,email,password} = req.body;
       const user = new userModel({
           name ,
           email,
           password ,
           role:"Admin"
       })
   
       const savedUser = await user.save();
       res.json({
           savedUser
       })   
    }catch (error){
        res.json({
       error:"Error aala"
        }) ;
    }
};


export const createAlumni = async(req,res)=>{
    try{
       const {name,email,password} = req.body;
       const user = new userModel({
           name ,
           email,
           password ,
           role:"Alumni"
       })
   
       const savedUser = await user.save();
       res.json({
           savedUser
       })   
    }catch (error){
        res.json({
       error:"Error aala"
        }) ;
    }
};


export const createStudent = async(req,res)=>{
    try{
       const {name,email,password} = req.body;
       const user = new userModel({
           name ,
           email,
           password ,
           role:"Student"
       })
   
       const savedUser = await user.save();
       res.json({
           savedUser
       })   
    }catch (error){
        res.json({
       error:"Error aala"
        }) ;
    }
};






export const getAllUsers=async(req,res)=>{
    try {
        const getusers = await userModel.find();
        res.json({
            getusers
        })        
    } catch (error) {
        res.json({
            error:"Cannot fetch data"
        })
    }
}