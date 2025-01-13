const Notification=require("../../Models/User/notificationSchema")

const allNotifications=async (req, res) => {
    try {
      const notifications = await Notification.find().populate("bookingDetails").populate("propertyDetailes").sort({ createdAt: -1 });
      res.status(200).json({ success: true, notifications });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Failed to fetch notifications" });
    }
  }

const RemoveNotification=async(req,res)=>{

    const notification=await Notification.findByIdAndDelete(req.params.id)
    if(!notification){
        res.status(404).json({message:'nofication not found'})
    }
    res.status(200).json({message:'removed notification',notification})
    
}


module.exports={RemoveNotification,allNotifications}