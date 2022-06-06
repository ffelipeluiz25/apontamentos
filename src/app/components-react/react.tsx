import * as React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Router  from "react-router";
const ReactComponent = () => {
    return (
        <App></App>
    )
}
export default ReactComponent;


function App() {
    return (
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    );
}

function Root() {
    return (
        <div>
            <button onClick={() => window.location.href = '/apontamentos'}>Mudar pra o Angular</button>
        </div>
    );
}