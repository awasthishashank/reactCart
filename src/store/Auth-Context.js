import React, { useState, useEffect, useCallback } from "react";
let logoutTimer;

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime)=>{
  const currenttime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remaingDuration = adjExpirationTime-currenttime;
  return remaingDuration;
}
 const retriveStoredToken = () =>{
  const storedToken =localStorage.getItem('token')
  const storedExpirationdate = localStorage.getItem('expirationTime')
  const remaingTime = calculateRemainingTime(storedExpirationdate)
  if(remaingTime<=3600){
    localStorage.removeItem('token')
    localStorage.removeItem("expirationTime")
    return null
  }
   return {
    token : storedToken,
    duration : remaingTime
   }
}

export const AuthContextProvider = (props) => {
  const tokenData = retriveStoredToken();
  let initialToken ;
  if(tokenData){
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(()=>{
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    if(logoutTimer){
      clearTimeout(logoutTimer)
    }
  },[])
    
    
   

  const loginHandler = (token, expirationTime) => {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime' , expirationTime)
    setToken(token);
    const remaingTime = calculateRemainingTime(expirationTime)
    logoutTimer = setTimeout(logoutHandler,remaingTime)
  };

 useEffect (()=>{
  if(tokenData){
    logoutTimer = setTimeout(logoutHandler,tokenData.duration)
  }
 },[tokenData ,logoutHandler])
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
