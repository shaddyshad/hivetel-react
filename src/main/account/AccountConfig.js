import authRoles from "../../@hivetel/config/authRoles";
import HiveLoadable from "../../@hivetel/components/HiveLoader";

const AccountConfig = {
    auth: authRoles.admin,

    routes: [
       {
        path: '/dashboard',
        routes: [
            {
                path: '/dashboard/app',
                auth: authRoles.admin,
                component: HiveLoadable({
                    loader: () => import('../app/dashboard/AnalyticsDashboard')  
                })
            }
        ]
       }
    ]
}

export default AccountConfig;