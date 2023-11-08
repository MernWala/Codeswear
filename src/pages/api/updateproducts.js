import Product from "../../../models/Product"
import connectDb from "../../../middleware/db"

const handler = async (req, res) => {
    try {
        if (req.method === 'POST') {
            for (let i = 0; i < req.body.length; i++) {
                await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])
            }

            res.status(200).json({ status: "success" })

        } else {
            return res.status(400).json('Bad Request')
        }
    } catch (error) {
        return res.json(error.message)
    }
}

export default connectDb(handler)