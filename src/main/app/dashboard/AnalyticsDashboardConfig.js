import authRoles from "../../../@hivetel/config/authRoles";
import HiveLoadable from '../../../@hivetel/components/HiveLoader';

export const AnalyticsDashboardConfig = {
    auth: authRoles.admin,

    routes: [
        {
            path: '/account/app',
            component: HiveLoadable({
                loader: () => import('./AnalyticsDashboard')
            })
        }
    ]
}

export default AnalyticsDashboardConfig;