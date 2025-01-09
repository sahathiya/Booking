const Review=require("../../Models/User/reviewSchema")
const Booking=require("../../Models/User/bookingSchema")
const createReview= async(req,res)=>{

    console.log("createReview");
    // const propertyid=req.params.id
    const {bookedproperty,rating,comment,Staffrating,
      Facilitiesrating,
      Cleanlinessrating,}= req.body

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
        Staffrating,
        Facilitiesrating,
        Cleanlinessrating,
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



const calculateFacilityRating = async (req, res) => {
  try {
    
    const result = await Review.aggregate([
      {
        $group: {
          _id: "$property", 
          averageFacilityRating: { $avg: "$Facilitiesrating" },
          averageStaffRating: { $avg: "$Staffrating" },
          averageCleanlinessRating: { $avg: "$Cleanlinessrating" },
          averageRating:{$avg:"$rating"}
        },
      },
    ]);

    console.log("result", result);

    if (!result.length) {
      return res.status(200).json({
        message: "No reviews found",
        properties: [],
      });
    }

    
    const formattedResult = result.map((group) => ({
      property: group._id,
      averageFacilityRating: group.averageFacilityRating.toFixed(1),
      averageStaffRating: group.averageStaffRating.toFixed(1),
      averageCleanlinessRating: group.averageCleanlinessRating.toFixed(1),
      averageRating:group.averageRating.toFixed(1)
    }));

    res.status(200).json({
      success: true,
      properties: formattedResult,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error calculating ratings", error });
  }
};



const getReviewsbypropertyId= async(req,res)=>{
    
    
    const review =await Review.find({property:req.params.id}).populate("guest","firstname lastname profileImage").populate("bookedproperty").populate("property")
    if(review==[]){
        return res.status(404).json({message:'review not found',review})
    }
const countOfReview=review.length
  return  res.status(200).json({review,"countOfReview":countOfReview})
}



const LikeReview=async(req,res)=>{
  const { userId } = req.body;
  const reviewId  = req.params.id;

  try {
    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

   
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
  const { userId } = req.body; 
  const reviewId  = req.params.id;

  try {
    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    
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






const getUserTotalReviews = async (req, res) => {
  
   
   

    
    const totalReviews = await Review.countDocuments({ guest: req.user.id });
    console.log("User",totalReviews);
    

    res.status(200).json({
      success: true,
      totalReviews,
    });
 
};

const TotalPropertyReviews=async(req,res)=>{
  const userId = req.user.id;
  const userReviews=await Review.find({guest:userId})

  const uniqueProperties = new Set();

   
    userReviews.forEach((review) => {
      uniqueProperties.add(review.property); 
    });

   
    const totalUniqueProperties = uniqueProperties.size;

    console.log("Total Unique Properties Reviewed by User:", totalUniqueProperties);
  
  res.status(200).json({
    success: true,
    userReviews,
    totalUniqueProperties
  });
}
module.exports={createReview,getReviewsbypropertyId,LikeReview,DislikeReview,calculateFacilityRating,getUserTotalReviews,TotalPropertyReviews}