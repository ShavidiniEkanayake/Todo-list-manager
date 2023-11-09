import { useDispatch } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { login } from '../redux/actions/AuthActions';

export default function Home() {
  const dispatch = useDispatch();

  const handleLogin = (credentials) => {
    dispatch(login(credentials));
  };

  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
