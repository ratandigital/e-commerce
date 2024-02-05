import { NextResponse } from "next/server"
import Product from "@/models/product_models"
import { connectToDB } from "@/utils/database"
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'de1ccm1ga',
  api_key: "152337296883443",
  api_secret: "sR5IK9L-S4mmuGMyR5yH8uSTK04",
});
export async function POST(req, res) {
  
  const { title, review, availability, vendor, product_type, prices,
    shoert_des, color, color_pic, size, description, additional_info, upimage } = await req.json()

  try {
  
    const photoUrl = await cloudinary.uploader.upload(upimage);

    console.log(photoUrl.url)
      await connectToDB();
      const newBook = new Product({ title, review, availability, vendor, product_type, prices,
        shoert_des, color, size, description, additional_info, photoUrl });
      
        await newBook.save();
    
      return new Response(JSON.stringify(newBook), { status: 201 })
  }
  catch (error) {
    console.log(error)
      return new Response("Failed to create ", { status: 500 })
  }

}