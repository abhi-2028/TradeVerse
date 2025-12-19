require("dotenv").config();
const connectDB = require('./src/db/db');
const app = require('./src/app');


// app.get("/addPositions", async (req, res) => {
//     let temp =[
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

// temp.forEach((item) => {
//     let newPosition = new PositionsModel({
//         product: item.product,
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//         isLoss: item.isLoss,
//     });
//     newPosition.save();
// });
// res.send("Positions added");
// })


connectDB();
port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});