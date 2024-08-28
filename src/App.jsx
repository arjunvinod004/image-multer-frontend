import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [file, setFile] = useState();
  const [image,setImage]=useState()

useEffect(()=>{
axios.get('http://localhost:8080/getfile')
.then((res)=>{
 setImage(res.data.image)
    })
    .catch(err=>console.log(err)
    )
},[])

const handlesubmit=()=>{
  const formdata= new FormData();
  formdata.append('file',file)
  axios.post('http://localhost:8080/file',formdata)
  .then((res)=>{
    setImage(res.data.image)
     console.log(res);
    

  })
  .catch(err=>console.log(err)
  )
}


  return (
    <>
      <div>
      <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
      <button type='submit' onClick={handlesubmit}>submit</button>
      </div>
     <br />
     <img src={`http://localhost:8080/images/${image}`} alt="" />

    </>
  )
}

export default App
