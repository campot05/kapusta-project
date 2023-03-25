import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from '@react-oauth/google';
import { google } from 'redux/auth/auth-operations';
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Layout = () => {
  const dispatch = useDispatch();
  const responseMessage = response => {
    console.log(response);
  };
  const errorMessage = error => {
    console.log(error);
  };

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: codeResponse => setUser(codeResponse),
    onError: error => console.log('Login Failed:', error),
  });
  console.log(user);
  useEffect(() => {
    if (user) {
      dispatch(google());
    }
  }, [user]);

  //   useEffect(() => {
  //     if (profile === null) return;
  //     console.log('GOOGLE');
  //     dispatch(google());
  //   }, [profile]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  console.log(profile, 'profile');
  return (
    <div>
      <AppBar />
      {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
      {profile ? (
        <div>
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
