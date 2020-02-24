import Home from '../components/Home';
import Launch from "../components/Launch";
export default ({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/launch',
      name: 'Launch',
      component: Launch,
    }

  ],
  mode: 'history',
});
