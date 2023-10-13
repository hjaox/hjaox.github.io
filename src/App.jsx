import './App.css'
import LeftContainer from './components/LeftContainer/LeftContainer'
import RightContainer from './components/RightContainer/RightContainer'

function App() {

  return (
    <div  className="bg-slate-900 text-white w-screen h-screen flex flex-row">
    <LeftContainer/>
    <RightContainer/>
    </div>
  )
}

export default App
