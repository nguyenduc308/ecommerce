const mongoose = require('mongoose');

module.exports.connectDB = async (url) => {
   try {

    mongoose.connect(
        url,  
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        }
    )
    console.log('Database connected!')
   } catch (error) {
    console.error(error)
   }
}