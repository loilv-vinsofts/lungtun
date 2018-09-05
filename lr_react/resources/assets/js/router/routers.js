
import Home from '../pages/Home';
import About from '../components/About';
import Shop from '../components/Shop';
import Blog from '../components/Blog';

export const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/about',
        component : About,
        exact: false
    },
    {
        path: '/shop',
        component : Shop,
        exact: false
    },
    {
        path: '/blog',
        component : Blog,
        exact: false
    }
];
