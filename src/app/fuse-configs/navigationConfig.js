//import { authRoles } from 'app/auth';
import i18next from 'i18next';
//import en from './navigation-i18n/en';
i18next.addResourceBundle('navigation');
const navigationConfig = [
	{
		id: 'applications',
		title: 'dashboard',
		translate: 'PRINCIPAL',
		type: 'item',
		icon: 'dashboard',
		url: '/apps/dashboards/project'
	},
	{
		id: 'GestionGAES',
		title: 'Gestion GAES',
		translate: 'Gestion GAES',
		type: 'item',
		icon: 'group',
		url: '/apps/gestiongaes'
	},
	{
		id: 'GestionTercero',
		title: 'Terceros',
		translate: 'Terceros',
		type: 'item',
		icon: 'person_pin',
		url: '/apps/gestiontercero'
	},
	{
		id: 'crearempresa',
		title: 'Creación Empresa',
		translate: 'Creación Empresa',
		type: 'item',
		icon: 'business',
		url: '/apps/empresa'
	},
	{
		id: 'Contable',
		title: 'Proceso Contable',
		translate: 'Proceso Contable',
		type: 'item',
		icon: 'assessment',
		url: '/apps/academy/courses'
	},
	{
		id: 'gempresa',
		title: 'Gestión Empresa',
		translate: 'Gestión Empresa',
		type: 'item',
		icon: 'all_inbox',
		url: '/apps/scrumboard'
	},
	{
		type: 'divider',
		id: 'divider-1'
	},
	{
		id: 'configuraciogeneral',
		title: 'Configuración',
		translate: 'Configuración',
		type: 'item',
		icon: 'settings',
		url: '/apps/dashboards/project'
	},

	/* {
		id: 'Contable',
		title: 'Gestión Contable',
		type: 'collapse',
		icon: 'assessment',
		children: [
			{
				id: 'style-Ventas',
				title: 'Ventas',
				type: 'item',
				url: '/pages/pricing/style-1'
			},
			{
				id: 'style-Egresos',
				title: 'Egresos',
				type: 'item',
				url: '/pages/pricing/style-2'
			},
			{
				id: 'style-Nomina',
				title: 'Nomina',
				type: 'item',
				url: '/pages/pricing/style-3'
			}
		]
	}, */

/* 	{
		id: 'gContable',
		title: 'Gestión Empresa',
		type: 'collapse',
		icon: 'all_inbox',
		children: [
			{
				id: 'mNegocio',
				title: 'Modelo de Negocio',
				type: 'item',
				url: '/pages/invoices/modern'
			},
			{
				id: 'infBasica',
				title: 'Información Basica',
				type: 'item',
				url: '/pages/invoices/compact'
			},
			{
				id: 'plnEstratégica',
				title: 'Planeación Estratégica',
				type: 'item',
				url: '/pages/invoices/compact'
			},
			{
				id: 'actproservprov',
				title: 'Administración Empresarial',
				type: 'item',
				url: '/apps/gestionempresa'
			},
		]
	}, */
	
];

export default navigationConfig;
