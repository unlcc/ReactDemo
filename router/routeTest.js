import Root from '../src/routerTest/Root.jsx';
import Home from '../src/routerTest/Home.jsx';
import Child from '../src/routerTest/Child.jsx';
import GrandChild from '../src/routerTest/GrandChild.jsx';

export const routes = [
    { 
        component: Root,
        routes: [
        { 
            path: '/home',
            exact: true,
            component: Home
        },
        { 
            path: '/child',
            component: Child,
            routes: [
                { 
                    path: '/child/a',
                    component: GrandChild
                }
            ]
        }
        ]
    }
]