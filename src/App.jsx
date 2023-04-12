import { Outlet } from "react-router-dom";
import './App.css'
import Header from './components/Header/Header'




function App() {

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      {/* Footer */}
    </div>
  )
}

export default App
