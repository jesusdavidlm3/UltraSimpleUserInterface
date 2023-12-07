import { Button } from './components/Button/Button'
import { TextField } from './components/TextField/TextField'
import { CheckBox } from './components/CheckBox/CheckBox'
import { Title } from './components/Title/Title'
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

        <div className='titles'>
          <h1>Titles</h1>
          <div className='showContainer'>
            <Title color='white' variant='h1' Text='Este es un H1' />
            <Title color='black' variant='h1' Text='Este es un H1' />
            <Title color='white' variant='h2' Text='Este es un H2' />
            <Title color='black' variant='h2' Text='Este es un H2' />
            <Title color='white' variant='h3' Text='Este es un H3' />
            <Title color='black' variant='h3' Text='Este es un H3' />
            <Title color='white' variant='h4' Text='Este es un H4' />
            <Title color='black' variant='h4' Text='Este es un H4' />
            <Title color='white' variant='h5' Text='Este es un H5' />
            <Title color='black' variant='h5' Text='Este es un H5' />
            <Title color='white' variant='h6' Text='Este es un H6' />
            <Title color='black' variant='h6' Text='Este es un H6' />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
