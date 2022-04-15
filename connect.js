const mongoose= require ('mongoose');
const connect = async () =>{
    try {
         await mongoose.connect(process.env.atlas_URL);
        console.log('database is connected')
    } catch (error) {
        console.log(error)
    }                                                                                                             

};
module.exports= connect;