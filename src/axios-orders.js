import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://udemy-react-my-burger-builder.firebaseio.com/'
});

export default instance;
