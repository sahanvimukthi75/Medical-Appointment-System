import  Jwt  from "jsonwebtoken";
import Doctor from "../models/DoctorShema.js";
import User from "../models/UserShema.js";

export const authenticate = async (req, res, next) => {
  // get token from header

  const authToken = req.headers.authorization;

  // checking the token exist or not

  if (!authToken || !authToken.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ success: false, message: "no token ,authentication denied" });
  }
  try {
    const token =authToken.split(" ")[1];

    //verify token 

    const decoded = Jwt.verify(token,process.env.JWT_SECRET_KEY)

    req.userId =decoded.id
    req.role =decoded.role
    next();   // must be call the next function==========

  } catch (err) {

    if(err.name==='TokenExpiredError'){

        return res.status(401).json({message:'Token is expired'})


    }
        return res.status(401).json({success:false,message:'Invalid token'}) ;   

  }
};

export const restrict =roles =>async(req,res,next)=>{
    const userId= req.userId

    let user;
   
    const patient =await User.findById(userId)
    const doctor =await Doctor.findById(userId)
    

    if(patient){
        user=patient
    }
    if(doctor){
        user=doctor
    }

    if(!roles.includes(user.role)){

      
        return res.status(401).json({success:false,message:"you are not authorized"})

    }
    next();
}
