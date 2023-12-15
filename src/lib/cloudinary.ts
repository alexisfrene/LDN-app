import { Cloudinary } from '@cloudinary/url-gen';

export const cld = new Cloudinary({
  cloud: {
    cloudName: 'ldn-img',
    apiKey: '733783188277347',
    apiSecret: '_716bTcADulK_FVJNt21zyCb7OQ',
  },
});
