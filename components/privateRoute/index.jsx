import { useStoreState } from "easy-peasy";
import { useRouter } from "next/router";

const PrivateRoute = ({children}) => {
    const { isAuthenticated } = useStoreState((state) => state.auth);
    route = useRouter();
    if (isAuthenticated) {
        return children;
    }
    
    return route.push('/login');
  
}

export default PrivateRoute