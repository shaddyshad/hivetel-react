import HiveLoader  from "../../@hivetel/components/HiveLoader";

const registerConfig = {
    routes: [
        {
            path: '/register',
            component: HiveLoader({
                loader: () => import('./Register')
            })
        }
    ]
}

export default registerConfig;