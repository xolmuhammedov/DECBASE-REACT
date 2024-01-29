import React from 'react';
import {useState} from "react";
import "./App.css"
import "./Normalize.css"
import Header from "./components/Header";
import Hero from "./components/Hero"

function App() {
    return (

        <div className={"container"}>
            <Header/>
            <Hero/>
        </div>
    );
}

export default App;