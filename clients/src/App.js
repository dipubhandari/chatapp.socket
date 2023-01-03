
import { BrowserRouter, routes, route, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Chat from './components/Chat/Chat';
import Home from './components/Home/Home';

function App() {


  // getting the username from the input field

  const [username, setUsername] = useState('')

  const getUsername = function (username) {
    setUsername(username)
  }

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home username={getUsername} />} />
        <Route path='/chat' element={<Chat username={username} />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
