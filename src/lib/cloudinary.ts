import { Cloudinary } from '@cloudinary/url-gen';

export const cld = new Cloudinary({
  cloud: {
    cloudName: 'ldn-img',
  },
});

export const getImageByCloudinary = (imageURL: string): string =>
  cld.image(imageURL).toURL();
