import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Demo } from "./pages/Demo"
import { Home } from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />}/>
        <Route path='/demo' element={<Demo />}/>
        {/* <Route path='/register' element={<Register />}/> */}
        {/* <Route path='*' element={<None />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
