import BookDetail from 'screens/BookDetail';

import Home from '../../screens/Home';
import Login from '../../screens/Login';
import SignUp from '../../screens/SignUp';

const routes = {
  private: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/books/:id',
      name: 'book_detail',
      component: BookDetail
    }
  ],
  public: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      component: SignUp
    }
  ]
};

export default routes;
