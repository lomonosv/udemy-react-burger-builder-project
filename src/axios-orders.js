import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://udemy-react-my-burger-builder.firebaseio.com/'
});

// Specific for firebase
instance.interceptors.request.use(request => {
	const queryParams = request.params ? Object.keys(request.params).map(param => {
		return param + '=' + request.params[param]
	}).join('&') : null;

	request.url += '.json';

	if (queryParams) {
		request.url += '?' + queryParams;
	}

	return request;
});

export default instance;
