const db=require('../config/database')

const registerUser=async(req,res,next)=>{
    const {email,password,name}=req.body;

    try {
        const queryInsert= await db.query (`INSERT INTO users_admin (email,password,name) VALUES ($1,$2,$3) RETURNING *`,[email,password,name]);
        res.status(201).json({ 
            succes:true,
            user:queryInsert.rows[0]});
    } catch (error) {
        next(error);
    }
}

module.exports={registerUser};