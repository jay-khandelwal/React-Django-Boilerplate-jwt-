import React, {useEffect} from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Authentication from './Pages/Authentication';


const BaseRouter = () => {  
    const location = useLocation();
    
    useEffect(()=>{
        switch (location.pathname){
            case '/accounts/login':
                document.title='Login'
                break;
            case '/accounts/signup':
                document.title='signup'
                break;
            case '/accounts/verify-email':
                document.title='verify-email'
                break;
            case '/accounts/confirm-email/':
                document.title='Confirm E-mail Address'
                break;
            case '/accounts/password/reset':
                document.title='Password Reset'
                break;                
            case '/accounts/password/recovery/':
                document.title='Change Password'
                break;
            default:
                document.title='Authentication system'
            
        }
    }, [location])
    
    return(
      <Switch>
          <Route exact path={['/accounts/login', '/accounts/signup', '/accounts/password/reset', '/accounts/verify-email', '/accounts/confirm-email/:key', '/accounts/password/recovery/:ud/:tkn/']} component={Authentication}/>
      </Switch>
      )
};


export default BaseRouter;