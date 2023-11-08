import Link from 'next/link'
import React from 'react'
import mongoose from "mongoose";
import Product from "../../models/Product"

const Tshirt = ({ products }) => {
  return (
    <>
      <div className="mx-auto">
        <section className="text-gray-600 body-font">
          <div className="container py-24 mx-auto">
            <div className="flex flex-wrap justify-center gap-5">
              {products.map((ele) => {
                return <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl" key={ele._id}>
                  <Link href={`/products/${ele.slug}`}>
                    <div className="relative rounded overflow-hidden flex justify-center">
                      <img alt="ecommerce" className='object-contain h-[15rem]' src={ele.img} />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 capitalize">{ele.category}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium capitalize">{ele.title}</h2>
                      <p className="mt-1">₹{ele.price}</p>
                    </div>
                  </Link>
                </div>
              })}

            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  mongoose.set("strictQuery", false);
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  } else {
    await mongoose.connect(process.env.MONGO_URI)
  }

  let products = await Product.find({ category: 'tshirt' })
  return { props: { products: JSON.parse(JSON.stringify(products)) } }
}

export default Tshirt