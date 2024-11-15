import companyModel from "../models/Company.js";
export const createCompany = async(req,res)=>{
    try{
       const {name,location,industry,email} = req.body;
       const companyObj = new companyModel({
           name ,
           location,
           industry ,
           email
       });
   
       const savedcompanyObj = await companyObj.save();
       res.json({
            savedcompanyObj,
            message:"Company created succesfully"
       })   
    }catch (error){
        res.json({
       error:"Error in creating company"
        }) ;
    }
};

export const getCompanies=async(req,res)=>{
    try {
        const getCompanies = await companyModel.find();
        res.json({
            getCompanies
        })        
    } catch (error) {
        res.json({
            error:"Cannot fetch data"
        })
    }
}