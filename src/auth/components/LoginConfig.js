import HiveLoader from '../../@hivetel/components/HiveLoader'

const loginConfig = {
    routes: [
        {
            path: '/login',
            component: HiveLoader({
                loader: () => import('./Login')
            })
        }
    ]
}

export default loginConfig;