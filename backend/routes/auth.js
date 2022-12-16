const router = require("express").Router();
const { User } = require("../model/user");
const passport = require("passport")

router.get("/google",passport.authenticate("google",{scope:["profile"]}));
router.get("/google/callback",passport.authenticate("google",{
    successRedirect:"http://localhost:3000/",
    failureRedirect:"/login/failed"
}))
router.get("/login/failed",(req,res)=>{
    res.status(401).json({
        success:false,
        message:"failure"
    })
})
router.get("/login/success", (req, res) => {
    if (req.user) {
      res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
        //   cookies: req.cookies
      });
    }
  });
router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("http://localhost:3000/")
})
module.exports = router;