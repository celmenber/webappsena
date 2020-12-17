import React from 'react';

const gstionempresaAppConfig = {
    settings: {
        layout: {}
    },
    routes: [
        {
            path: '/apps/gestionempresa',
            component: React.lazy(() => import('./gactprovprod'))
        }
    ]
};

export default gstionempresaAppConfig;