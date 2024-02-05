import { NextResponse } from "next/server"
import Product from "@/models/product_models"
import { connectToDB } from "@/utils/database"

export async function GET(req, res) {
  

    
  try {
    
      await connectToDB();
      const products = await Product.find()
      if (!products)
      return new Response("Product not found", { status: 404 })

  return new Response(JSON.stringify(products), { status: 200 })

}
catch (error) {
  return new Response("Failed to fetch data ", { status: 500 })
}

}