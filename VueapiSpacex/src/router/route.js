import Home from '../components/Home';
import Launch from "../components/Launch";
import RocketDetail from "../components/RocketDetail";
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
    },
    {
      path: '/:rocket_id',
      name: 'RocketDetail',
      component: RocketDetail,
    }

  ],
  mode: 'history',
});
