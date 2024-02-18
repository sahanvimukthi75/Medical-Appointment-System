import Review from "../models/ReviewShema.js";
import Doctor from "../models/DoctorShema.js"

// get all reviews-==============

export const getAllReviews =async(req,res)=>{
    try {
        const reviews =await Review.find({})
        res.status(200).json({success:true,message:"seccesssful",data:reviews})
    } catch (err) {
        res.status(404).json({success:false,message:"not found"})

        
    }
}

// create review    

export const createReview =async(req,res)=>{
    if(!req.body.doctor) req.body.doctor=req.params.doctorId
    if(!req.body.user) req.body.user=req.userId

    const newReview=new Review(req.body)

    try {
        const saveReview =await newReview.save()
        await Doctor.findByIdAndUpdate(req.body.doctor,{
            $push:{reviews:saveReview._id}

        })

        res.status(200).json({success:true,message:"review submited",date:saveReview})
    } catch (err) {
        
        res.status(500).json({success:false,message:err.message})

    }
}