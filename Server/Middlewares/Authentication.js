const jwt=require("jsonwebtoken");

const userAuthMiddleware = async (req, res, next) => {
  console.log("hhhhh");
  
    try {
      
      const token=req.cookies.token
      
      console.log("token",token)
     if(!token){
      return res.status(401).send("Authentication token missing");
     }
        
        if (token) {
          jwt.verify(token, process.env.SECRECT_KEY, (err, user) => {
            
            if(err){
                res.send(err)
            }else{
                req.user=user
                console.log("req.user",req.user);
                
                console.log('Decoded User:', req.user);
                
                next()
            }
          });
        } else {
        
        res.status(404).send("not authenticate")
        }
      } catch (error) {
      
        res.send(error)
      }
    };


    const partnerAuthMiddleware=async(req,res,next)=>{

      try {
      
        const token=req.cookies.partnertoken
        console.log("token",token);
        
        console.log(token)
       if(!token){
        return res.status(401).send("Authentication token missing");
       }
          
          if (token) {
            jwt.verify(token, process.env.PARTNER_KEY, (err, user) => {
              
              if(err){
                  res.send(err)
              }else{
                  req.user=user
                  console.log(req.user);
                  
                  next()
              }
            });
          } else {
          
          res.status(404).send("not authenticate")
          }
        } catch (error) {
        
          res.send(error)
        }

    }
    
module.exports={userAuthMiddleware,partnerAuthMiddleware}