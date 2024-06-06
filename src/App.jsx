import LeftSide from './components/Left_Side_Part/LeftSide'
import RightSide from './components/Right_Side_Part/RightSide'
import MiddleSide from './components/Middle_Part/MiddleSide'
import './App.css'

function App() {

  return (
    <>
      <div className='flex h-screen overflow-hidden'>
          <LeftSide />
        
          <MiddleSide/>
       
          <RightSide/>
        

      </div>
    </>
  )
}

export default App
