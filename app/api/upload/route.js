// pages/api/upload/route.js

import cloudinary from 'cloudinary';
import { IncomingForm } from 'formidable';

cloudinary.config({
    cloud_name: 'de1ccm1ga',
    api_key: "152337296883443",
    api_secret: "sR5IK9L-S4mmuGMyR5yH8uSTK04",
});

conts config = {
  api: {
    bodyParser: false,
  },
};

export async function POST (req, res) {
    console.log('p')
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const form = new IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    const image = files.file;

    try {
      const result = await cloudinary.uploader.upload(image.path);

      // You can do something with the Cloudinary result here
      console.log('Cloudinary upload result:', result);

      res.status(200).json({ message: 'Image uploaded successfully', result });
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
};
