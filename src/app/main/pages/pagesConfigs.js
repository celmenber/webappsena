
import Error404PageConfig from './errors/404/Error404PageConfig';
import Error500PageConfig from './errors/500/Error500PageConfig';
import ProfilePageConfig from './profile/ProfilePageConfig';
import MenuContabilidadeConfig from './menucontable/MenucontablePageConfig';


/* import ForgotPassword2PageConfig from './auth/forgot-password-2/ForgotPassword2PageConfig';
import ForgotPasswordPageConfig from './auth/forgot-password/ForgotPasswordPageConfig';
import LockPageConfig from './auth/lock/LockPageConfig';

import LoginPageConfig from './auth/login/LoginPageConfig';
import Login2PageConfig from './auth/login-2/Login2PageConfig';
import Login3PageConfig from './auth/login-3/Login3PageConfig';

import ResetPassword2PageConfig from './auth/reset-password-2/ResetPassword2PageConfig';
import ResetPasswordPageConfig from './auth/reset-password/ResetPasswordPageConfig'; */


const pagesConfigs = [
	Error404PageConfig,
	Error500PageConfig,
	ProfilePageConfig,
	MenuContabilidadeConfig

	/* LoginPageConfig,
	ForgotPasswordPageConfig,
	LockPageConfig,
	Login2PageConfig,
	Login3PageConfig,
	ForgotPassword2PageConfig,
	ResetPasswordPageConfig,
	ResetPassword2PageConfig, */
];

export default pagesConfigs;
