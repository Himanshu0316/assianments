require('dotenv').config();
const express = require("express");
var cookieSession = require('cookie-session');
const passport = require("passport")
const passportSetup = require("./passport")
const cors = require("cors");

const app = express();
require("./storege/db")


 const authRoutes = require("./routes/auth");
 app.use(cookieSession({name:"session",keys:['himanshu'],maxAge:24 * 60 * 60 *100}))

app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );

// app.use("/api/users", userRoutes);
 

app.use(passport.initialize())
app.use(passport.session())
// app.get("/", (req, res) => {

//     res.send("index")
// })

app.use("/auth", authRoutes)
app.listen(8000, () => {
    console.log("started")
})


////////////////////////////

// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const userRouter = require("./routes/user.route");
// const prodRouter = require("./routes/products.routes");
// const cookieParser = require("cookie-parser");

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// const corsOptions = {
//   origin: true,
//   credentials: true, //included credentials as true
// };
// app.use(cors(corsOptions));
// userRouter.get(`/auth/google/callback`, getGoogleUser);
// userRouter.get("/:id", authenticate, getUser);
// app.all("*", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("App working");
// });

// app.use("/users", userRouter);
// app.use("/", prodRouter);

// module.exports = app;