import _ from '@lodash';
import { blueGrey, amber } from '@material-ui/core/colors';
import mock from '../mock';

const demoSteps = [
	{
		id: '0',
		title: 'Activos de la Empresa',
		content:
			'<h1>Momento 1 - Vamos a crear los activos de la EMPRESA</h1>' 
	},
	{
		id: '1',
		title: 'Productos o servicios de la  Empresa',
		content:
			'<h1>Momento 2 - Vamos a crear los Productos o servicios da la Empresa</h1>' +
			'<br>'
	},
	{
		id: '2',
		title: 'Proveedores de la Empresa',
		content:
			'<h1>Momento 3 - Vamos a crear los proveesores da la Empresa</h1>' +
			'<br>'
	},
];

const academyDB = {
	categories: [
		{
			id: 0,
			value: 'servicios',
			label: 'servicios mercadeo',
			color: blueGrey[500]
		},
		{
			id: 1,
			value: 'firebase',
			label: 'servicios mercadeo2',
			color: amber[500]
		}
	],
	courses: [
		{
			id: '0123456789',
			title: 'Tonly S.A.S',
			slug: 'basics-of-typeScript',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'servicios',
			length: 0,
			totalSteps: 6,
			activeStep: 0,
			updated: 'Nov 01, 2017',
			steps: demoSteps
		},
		{
			id: '0123456790',
			title: 'Mango System S.A.S',
			slug: 'basics-of-typeScript',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'firebase',
			length: 0,
			totalSteps: 6,
			activeStep: 0,
			updated: 'Nov 01, 2020',
			steps: demoSteps
		}
	]
};

mock.onGet('/api/academy-app/categories').reply(() => {
	return [200, academyDB.categories];
});

mock.onGet('/api/academy-app/courses').reply(() => {
	return [200, academyDB.courses.map(_course => _.omit(_course, ['steps']))];
});

mock.onGet('/api/academy-app/course').reply(request => {
	const { courseId } = request.params;
	const response = _.find(academyDB.courses, { id: courseId });
	return [200, response];
});

 mock.onPost('/api/academy-app/course/save').reply(request => {
	const data = JSON.parse(request.data);
	let course = null;

	academyDB.courses = academyDB.courses.map(_course => {
		if (_course.id === data.id) {
			course = data;
			return course;
		}
		return _course;
	});

	if (!course) {
		course = data;
		academyDB.courses = [...academyDB.courses, course];
	}

	return [200, course];
}); 

 mock.onPost('/api/academy-app/course/update').reply(request => {
	const data = JSON.parse(request.data);
	academyDB.courses = academyDB.courses.map(_course => {
		if (_course.id === data.id) {
			return _.merge(_course, data);
		}
		return _course;
	});

	return [200, data];
}); 
