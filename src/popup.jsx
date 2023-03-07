import React from "react";
import Home from "./components/Home.jsx";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('react-target');
container.style.width = '310px';
container.style.height = '583px';
const root = createRoot(container);

root.render(<Home/>);