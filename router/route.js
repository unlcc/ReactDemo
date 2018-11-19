import {App, About, Inbox} from '../src/comp.jsx'

export default [
    {
        path: '/',
        component: App,
        childRoutes: [
            { path: 'about', component: About },
            { path: 'inbox', component: Inbox },
        ]
    }
];