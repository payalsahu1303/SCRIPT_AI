import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UploadPrescription from './UploadPrescription'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <UploadPrescription />
    </div>
  );

}

export default App
