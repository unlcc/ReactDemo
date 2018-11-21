import Home from '../src/Home.jsx';
import Detail from '../src/Hot/component/Detail.jsx'

export const routes = [
    {
        component: Home,
        routes: [
            {
                path: '/detail',
                component: Detail
            }
        ]
    }
]