const user = require('./../models/userModel');
exports.getAllDetails = async(req, res)=>{
    try{
        const use = await user.find(req.params.id);
        res.status(200).json({
            status: 'success'.
            data: {
                use
            }
        });

    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err
        });
    }
}
exports.changeUserDetail = async(req, res)=>{
    try{
        const update_user = await user.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
            });
        res.status(200).json({
            status: 'failed',
            data: {
                update_user
            }
        });

    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err
        });
    }
}
exports.deleteUser = async(req, res)=>{
    try{
        const delete_user = await user.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status:'success',
            data: null
        });
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err
        });
    }
}
exports.newUser = async(req, res)=>{
    try{
        const new_user = await user.create(req.body);
        res.status(200).json({
            status: 'success',
            data: {
                user: new_user
            }
        });

    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err
        });
    }
}