const Saved=require("../../Models/User/savedSchema")
const Users=require("../../Models/User/userSchema")
const {UnauthorizedError} =require("../../utils/CustomError")
const addToSaved=async(req,res)=>{



    const propertyID = req.params.id;
    let saved = await Saved.findOne({ guest:req.user.id });

    if (!saved) {
        const newSaved = new Saved({
            guest: req.user.id,
            savedProperty: [propertyID]
        });
        await newSaved.save();

    const savedPopulation = await newSaved.populate('savedProperty');
    return res.status(200).json({ status: 'success', message: 'saved created', savedPopulation });
}
    
const isPropertyInSaved = saved.savedProperty.some(property => property.equals(propertyID));
    console.log('cgjds', isPropertyInSaved);


    if (!isPropertyInSaved) {

        saved.savedProperty.push(propertyID);
        await saved.save();
        saved = await saved.populate('savedProperty');
        return res.status(200).json({ status: 'success', message: 'property added to saved', saved });
    }

    res.status(200).json({ status: 'success', message: 'property already added to saved' });
}


const removeFromSaved=async(req,res)=>{
    const propertyID=req.params.id
    
    const saved=await Saved.findOne({guest:req.user.id})
console.log("saved",saved);
const propertyindex = saved.savedProperty.findIndex(property => property._id.toString() == propertyID.toString())
console.log("propertyindex",propertyindex);

    if (propertyindex === -1) {
        return res.status(404).json({ status: 'fail', message: 'item not found in saved' });
    }
    saved.savedProperty.splice(propertyindex, 1)
    await saved.save()
    


    return res.status(200).json({message:'deleted successfully',deleted:saved})
}


const SavedProperties=async(req,res)=>{

    const allSaved=await Saved.findOne({guest:req.user.id}).populate("savedProperty")

    return res.status(200).json({message:'saved properties', allSaved})

}

module.exports={addToSaved,removeFromSaved,SavedProperties}