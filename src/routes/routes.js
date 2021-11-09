const DefaultLayout = () => import('@/views/Layout/DefaultLayout');
const SamplePage = () => import('@/views/Sample/SamplePage');

const routes = [
	// {
	// 	path: '/SamplePage',
	// 	component: SamplePage,
	// },
	{
		path: '/',
		component: DefaultLayout,
		children: [
			{
				path: '/SamplePage',
				component: SamplePage,
			},
		],
	},
];

export default routes;
