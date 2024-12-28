const Review=require("../../Models/User/reviewSchema")

const createReview= async(req,res)=>{

    console.log("createReview");
    
    const {bookedproperty,rating,comment,property}= req.body

    if (!bookedproperty||!rating||!property){
        return res.status(400).json({message:'all fields are required'})
    }


    let reviewLabel = "";
  if (rating >= 4.5) {
    reviewLabel = "Excellent";
  } else if (rating >= 4) {
    reviewLabel = "Really enjoyed";
  } else if (rating === 3) {
    reviewLabel = "Average";
  } else if (rating === 2) {
    reviewLabel = "Disappointing";
  } else {
    reviewLabel = "Bad";
  }

    const newReview= new Review({
        guest:req.user.id,
        bookedproperty,
        rating,
        comment,
        property,
        reviewLabel
    })
    await newReview.save()

    res.status(201).json({
        succes:true,
        message:"Review added successfully",
        review:newReview
    })

    
    
}

const getReviewsbypropertyId= async(req,res)=>{
    
    
    const review =await Review.find({property:req.params.id}).populate("guest").populate("bookedproperty").populate("property")
    if(!review){
        return res.status(404).json({message:'review not found'})
    }
const countOfReview=review.length
    res.status(200).json({review,"countOfReview":countOfReview})
}

module.exports={createReview,getReviewsbypropertyId}