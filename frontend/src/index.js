import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { MenusContextProvider } from './context/MenuContext'

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <MenusContextProvider>
//             <App />
//         </MenusContextProvider>
//     </React.StrictMode>
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MenusContextProvider>
            <App />
        </MenusContextProvider>
    </React.StrictMode>
)