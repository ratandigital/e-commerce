import { Schema, model, models } from 'mongoose';


const ProductSchema = new Schema({

    name: {
        type: String,
        required: [true, 'name is required.'],
    },
    topic: {
        type: String,
        required: [true, 'topic is required.'],
    }
});


const Product = models.Product || model('Product', ProductSchema);


export default Product;
