import React from 'react';
//import { Redirect } from 'react-router-dom';

const EmpresaAppConfig = {
    settings: {
        layout: {}
    },
    routes: [
        {
            path: '/apps/empresa',
            component: React.lazy(() => import('./empresas'))
        }
    ]
};

export default EmpresaAppConfig;