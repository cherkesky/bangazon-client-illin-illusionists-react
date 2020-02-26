import Settings from './Settings';

// const data = { username: 'example' };

// fetch('https://example.com/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then((response) => response.json())
// .then((data) => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

export default {
	getAll(endpoint) {
		return fetch(`${Settings.remote_URL}/${endpoint}`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${sessionStorage.getItem(Settings.token_name)}`
			}
		}).then((response) => response.json());
	},
	getOne(endpoint, id) {
		return fetch(`${Settings.remote_URL}/${endpoint}/${id}`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${sessionStorage.getItem(Settings.token_name)}`
			}
		}).then((response) => response.json());
	},
	postOne(endpoint, data) {
		return fetch(`${Settings.remote_URL}/${endpoint}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${sessionStorage.getItem(Settings.token_name)}`
			},
			body: JSON.stringify(data)
		}).then((response) => response.json());
	}
};
