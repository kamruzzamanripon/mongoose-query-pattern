const mongoose = require('mongoose');


const dbConnection = async () =>  {
      const URI  = await "mongodb://localhost:27017/mongoose_query_pattern";
      mongoose.connect(URI,
        err => {
            if(err) throw err;
            console.log('connected to MongoDB')
        });

}

module.exports = dbConnection;