import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '101fd0025bf245b1acdcdb07f8f92d65',
  },
});
