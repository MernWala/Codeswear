import Product from "../../../models/Product"
import connectDb from "../../../middleware/db"

const handler = async (req, res) => {
    if (req.method === 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let product = await Product.create({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                img: req.body[i].img,
                category: req.body[i].category,
                size: req.body[i].size,
                color: req.body[i].color,
                price: req.body[i].price,
                availableQty: req.body[i].availableQty,
            })

            await product.save()
        }

        res.status(200).json({ status: "success" })

    } else {
        return res.status(400).json('Bad Request')
    }
}

export default connectDb(handler)