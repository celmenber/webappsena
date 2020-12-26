import EmpresaAppConfig from './empresa';
import gstionempresaAppConfig from './gestionempresa';
import AcademyAppConfig from './academy/AcademyAppConfig';
import terceroAppConfig from './gestiontercero/ContactsAppConfig';
import gaesAppConfig from './gestiongaes/ContactsAppConfig';
import ProjectDashboardAppConfig from './dashboards/project/ProjectDashboardAppConfig';
import ScrumboardAppConfig from './scrumboard/ScrumboardAppConfig';

/* import CalendarAppConfig from './calendar/CalendarAppConfig';
import ChatAppConfig from './chat/ChatAppConfig';
import ContactsAppConfig from './contacts/ContactsAppConfig';
import AnalyticsDashboardAppConfig from './dashboards/analytics/AnalyticsDashboardAppConfig';
import ProjectDashboardAppConfig from './dashboards/project/ProjectDashboardAppConfig';
import ECommerceAppConfig from './e-commerce/ECommerceAppConfig';
import FileManagerAppConfig from './file-manager/FileManagerAppConfig';
import MailAppConfig from './mail/MailAppConfig';
import NotesAppConfig from './notes/NotesAppConfig';
import ScrumboardAppConfig from './scrumboard/ScrumboardAppConfig';
import TodoAppConfig from './todo/TodoAppConfig'; */

const appsConfigs = [
	ProjectDashboardAppConfig,
	EmpresaAppConfig,
	AcademyAppConfig,
	gstionempresaAppConfig,
	terceroAppConfig,
	gaesAppConfig,
	ScrumboardAppConfig
	

/* 	AcademyAppConfig,
   AnalyticsDashboardAppConfig,
	ProjectDashboardAppConfig,
	MailAppConfig,
	 
	FileManagerAppConfig,
	ContactsAppConfig,
	CalendarAppConfig,
	ChatAppConfig,
	ECommerceAppConfig,
	ScrumboardAppConfig, 
	
	NotesAppConfig*/
];

export default appsConfigs;
