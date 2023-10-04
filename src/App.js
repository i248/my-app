import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import SideNavbar from './SideNavbar';
import AccountDetailsForm from './AccountDetailsForm';
import SharedFolder from './SharedFolder';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/sidebar"
            element={
              <>
                <SideNavbar/>
              </>
            }
          />
           <Route
            path="/"
            element={
              <>
                {<Login/>}
              </>
            }
          />
           <Route
            path="/account"
            element={
              <>
                <SideNavbar children={<AccountDetailsForm/>} />
              </>
            }
          />
           <Route
            path="/shared"
            element={
              <>
                <SideNavbar children={<SharedFolder/>} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
