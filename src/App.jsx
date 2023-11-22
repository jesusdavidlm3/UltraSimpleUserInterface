import { Button } from './components/Button/Button'
import { TextField } from './components/TextField/TextField'
import { CheckBox } from './components/CheckBox/CheckBox'
import './App.css'

function App() {
  return (
    <>
      <div className='header'>
        <h1>Ultra Simple User Interface</h1>
        <h1>USUI</h1>
      </div>

      <div className='container'>
        <div className='buttons'>
          <h1>Buttons</h1>
          <div className='showContainer'>
            <Button label='Action Button' variant='action'></Button>
            <Button label='Allow Button' variant='allow'></Button>
            <Button label='Deny Button' variant='deny'></Button>
            <Button label='Default Button'></Button>
          </div>
          
        </div>

        <div className='textfields'>
          <h1>Text Fields</h1>
          <div className='showContainer'>
            <TextField label='Normal Text Field'></TextField>
          </div>
        </div>

        <div className='checkBoxes'>
          <h1>CheckBox</h1>
          <div className='showContainer'>
            <CheckBox label='Check Box'></CheckBox>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
