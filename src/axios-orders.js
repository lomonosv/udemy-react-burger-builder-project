import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://udemy-react-my-burger-builder.firebaseio.com/'
});

// Specific for firebase
instance.interceptors.request.use(request => {
	request.url += '.json';
	return request;
});

export default instance;
