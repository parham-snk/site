const exp = require("express")
const router = exp.Router()


router.get("/", (req, res) => {
    res.redirect("/public/html/index.html")
})

router.get('/s',(req,res)=>{
    res.end('this is 2nd page!')
})

router.get('/login',(req,res)=>{
    res.render('./login.ejs')
})
module.exports = router