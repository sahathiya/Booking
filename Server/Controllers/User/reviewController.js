const Review=require("../../Models/User/reviewSchema")
const Booking=require("../../Models/User/bookingSchema")
const createReview= async(req,res)=>{

    console.log("createReview");
    // const propertyid=req.params.id
    const {bookedproperty,rating,comment}= req.body

    if (!bookedproperty||!rating){
        return res.status(400).json({message:'all fields are required'})
    }
   const booking=await Booking.findOne({_id:bookedproperty})
   console.log("booking",booking);
   

    let reviewLabel = "";
  if (rating >= 4.5) {
    reviewLabel = "Excellent";
  } else if (rating >= 4) {
    reviewLabel = "Really enjoyed";
  } else if (rating >= 3) {
    reviewLabel = "Average";
  } else if (rating >= 2) {
    reviewLabel = "Disappointing";
  } else {
    reviewLabel = "Bad";
  }

    const newReview= new Review({
        guest:req.user.id,
        bookedproperty,
        rating,
        comment,
        property:booking.PropertyDetailes,
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
    
    
    const review =await Review.find({property:req.params.id}).populate("guest","firstname lastname profileImage").populate("bookedproperty").populate("property")
    if(review==[]){
        return res.status(404).json({message:'review not found',review})
    }
const countOfReview=review.length
  return  res.status(200).json({review,"countOfReview":countOfReview})
}

const LikeReview=async(req,res)=>{
  const { userId } = req.body; // assuming userId is passed from the frontend
  const reviewId  = req.params.id;

  try {
    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // If the user has already disliked, remove dislike and add like
    if (review.dislikes.includes(userId)) {
      review.dislikes = review.dislikes.filter(user => user.toString() !== userId);
    }

    if (!review.likes.includes(userId)) {
      review.likes.push(userId);
    }

    await review.save();
    res.status(200).json({ message: "Review liked successfully", review });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}


const DislikeReview=async(req,res)=>{
  const { userId } = req.body; // assuming userId is passed from the frontend
  const reviewId  = req.params.id;

  try {
    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // If the user has already liked, remove like and add dislike
    if (review.likes.includes(userId)) {
      review.likes = review.likes.filter(user => user.toString() !== userId);
    }

    if (!review.dislikes.includes(userId)) {
      review.dislikes.push(userId);
    }

    await review.save();
    res.status(200).json({ message: "Review disliked successfully", review });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
module.exports={createReview,getReviewsbypropertyId,LikeReview,DislikeReview}