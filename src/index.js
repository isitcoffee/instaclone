/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

// import { Container } from './styles';

export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
    <Routes />
    </>
  );
}
