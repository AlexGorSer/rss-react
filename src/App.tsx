import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import PageNotFound from './components/404/PageNotFound';
import MainLayout from './components/layout/MainLayout';
import Main from './components/Main/Main';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank" rel="noreferrer">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
//     </div>
//   );
// }

// type ContentPropApp = { props?: string };

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Main />} />
            <Route path="about" element={<h1 className="container">About</h1>} />
            <Route path="contacts" element={<h1 className="container">Contacts</h1>} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
