import LeftSide from './components/Left_Side_Part/LeftSide'
import RightSide from './components/Right_Side_Part/RightSide'
import MiddleSide from './components/Middle_Part/MiddleSide'
import './App.css'

function App() {

  return (
    <>
      <div id='main'>
          <LeftSide />
        
          {/* <MiddleSide/> */}
       
        <div id='right_side'>
          {/* <RightSide/> */}
        </div>

      </div>
    </>
  )
}

export default App
