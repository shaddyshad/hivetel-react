import Loadable from 'react-loadable';
import Loader from './Loader';

const HiveLoadable = opts => {
    return Loadable(Object.assign({
        loading: Loading,
        delay: 300,
        timeout: 10000
    }, opts))
}

export default HiveLoadable;