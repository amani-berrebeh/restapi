const user= require ('../models/user')

const getAllUsers= async (req,res)=>{
    try {
        const  users = await user.find();
        console.log(users)
        res.status(200).send(users);
    } catch (error) {
        console.log(error)
        return res.status(500).send('no user is added yet');
        
    }
}


const addUser= async (req,res)=>{
    const newuser = new user (req.body);
    try {
  
   const found = await user.findOne({email:req.body.email})
    if (found) {
        return res.status(400).send({msg:'email already exists'});
    }
    await newuser.save();
    res.status(200).send({newuser,message:'email is saved'})
    } catch (error) {
        console.log(error)
        return res.status(500).send('try again');
        
    }
}

module.exports= {getAllUsers,addUser};
