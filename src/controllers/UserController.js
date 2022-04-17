const User = require("../models/User");


module.exports = class UserController {

    static userAll = async(req, res)=>{
        try{
            const Users = await User.find().lean().exec();
            return res.status(200).json({
              code: 200,
              message: "Users List",
              data: Users,
            });
  
        }catch(error){
          res.status(501).json({
            code: 501,
            message: error.message,
            error: true,
          });
        }
    }
}