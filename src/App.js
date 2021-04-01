import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Button} from 'react-bootstrap'
import { Entry } from './pages/entry/Entry.page';
import { DefaultLayout } from "./layout/DefaultLayout";

function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
        main page component
      </DefaultLayout>
    </div>
  );
}

export default App;
