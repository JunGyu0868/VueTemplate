const setSearchCondition1 = (state, data) => {
	console.log('setSearchCondition1 ' + data);
	state.searchCondition1 = data;
};
const setSearchCondition2 = (state, data) => {
	console.log('setSearchCondition2 ' + data);
	state.searchCondition2 = data;
};

export default {
	setSearchCondition1,
	setSearchCondition2,
};
