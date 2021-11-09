import client from '@/store/api/clients';

export default {
	sample: () => {
		return client
			.get(``)
			.then((response) => (response && response.data) || null)
			.catch((error) => {
				throw error;
			});
	},
};
