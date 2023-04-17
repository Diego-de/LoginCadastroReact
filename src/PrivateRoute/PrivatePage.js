import { Route, Navigate} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const PrivatePage = ({ element: Component, ...rest }) => {
  
  const { token } = useAuth();

  return token ? (
    <Route {...rest} element={<Component />} />
  ) : (
    <Navigate to="/Logado" replace />
  );

};

