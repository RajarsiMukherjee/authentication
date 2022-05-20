const mongoose = require("mongoose");

// module.exports = () => {
//   return mongoose.connect(
//     // "mongodb+srv://rajarsi:rajarsi12345@cluster0.gyrpm.mongodb.net/?retryWrites=true&w=majority"
//     "mongodb://localhost:27017/authentication"
//     );
// };



const connect = () => {
    return mongoose.connect(
        "mongodb+srv://rajarsi:rajarsi12345@cluster0.gyrpm.mongodb.net/?retryWrites=true&w=majority"
        //"mongodb://localhost:27017/authentication"
        )
}
module.exports = connect;
