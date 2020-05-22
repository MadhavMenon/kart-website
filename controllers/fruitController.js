const product = require('./../models/fruitModel');

exports.getAllProducts = async(req, res)=>{
    try{
        const pro = await product.find();
        res.status(200).json({
            status: 'success',
            data: {
                pro
            }
        })
    }catch(err){
        res.status(404).json({
            status:'failed',
            message: err
        });
    }

}
exports.oneProduct = async(req, res)=>{
    try{

        const pro = await product.find(re.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                pro
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}