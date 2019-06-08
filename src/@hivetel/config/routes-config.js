import React from 'react';
import HiveUtils from '../utils';
import LoginConfig from '../../auth/components/LoginConfig';
import RegisterConfig from '../../auth/components/RegisterConfig';
import AccountConfig from '../../main/account/AccountConfig';
import PagesConfig from '../../main/pages/PagesConfig';
import {Redirect} from 'react-router-dom';

const routesConfig = [
    LoginConfig,
    RegisterConfig,
    AccountConfig,
    PagesConfig
];

const routes = [
    ...HiveUtils.generateRoutesFromConfig(routesConfig),
    {
        path: '/',
        exact: true,
        component: <Redirect to='/dashboard/app' />
    },
    {
        component: <Redirect to='/pages/404' />
    }
]

export default routes;
