import { Schema, model, models } from 'mongoose';


const ProductSchema = new Schema({

    title: {
        type: String,
        required: [true, 'Title is required.'],
    },
    review: {
        type: String,
        required: [true, 'Review is required.'],
    },
    availability: {
        type: String,
        required: [true, 'Availability is required.'],
    },
 
    vendor: {
        type: String,
        required: [true, 'Vendor is required.'],
    },
    product_type: {
        type: String,
        required: [true, 'Product type is required.'],
    },
    prices: {
        type: String,
        required: [true, 'Prices is required.'],
    },
    shoert_des: {
        type: String,
        required: [true, 'Description is required.'],
    },
    color: {
        type: String,
        required: [true, 'Color is required.'],
    },
    color_pic: {
        type: String,
        
    },
    size: {
        type: String,
        required: [true, 'Size is required.'],
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
    },
    additional_info: {
        type: String,
       
    },
    photo: {
        type: String,
       
    }
});


const Product = models.Product || model('Product', ProductSchema);


export default Product;
