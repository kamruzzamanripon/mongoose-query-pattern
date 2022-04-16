

module.exports = class UserController {

    static userAll = (req, res)=>{
        return res.status(200).json({
            code: 200,
            message: "User Create Successfully",
            data: "hello",
          });
    }
}