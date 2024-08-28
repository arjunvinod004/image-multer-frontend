import React, { useState } from 'react'

function Multile() {
    const [files,setFiles]=useState()
    console.log(files);
    
  return (
    <div class="container">
        <h1>GeeksforGeeks</h1>
        <b>A Computer Science Portal for Geeks</b>
        <br/><br/>
        <div class="property">
            
<p>
                Input Multiple Files using Input Tag, 
                <b>'multiple property'</b>
            </p>

            <form action="/action_page_inputtags_multiplefiles.php">
                <label for="files">Select Multiple files:</label>
                <input type="file" id="files" name="files" multiple onChange={(e)=>setFiles(e.target.files)}/>
            </form>
        </div>
        <div class="attribute">
            

  
        </div>
        </div>
  )
}

export default Multile
