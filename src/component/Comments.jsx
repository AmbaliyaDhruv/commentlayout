import React from 'react'
import "./comments.css"
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
function Comments({body,replies,points,author,timestamp}) {
  const children=replies && replies.length

  return (
    <>
    <Box sx={{backgroundColor:"lightgray",margin:"auto",marginTop:"20px",width:"80%",overflowWrap:"anywhere",borderRadius:"20px"}}>
    <details className='body'>
    <summary>Comments</summary>
      <h5>{author+" "}{points+" "}points {new Date(timestamp).toLocaleTimeString()}</h5>
    <h1>{body}</h1>
 
    <ButtonGroup disableElevation variant="contained" sx={{flexWrap:"wrap",gap:"5px"}}>
  <Button disabled sx={{backgroundColor:"gray"}}>Reply</Button>
  <Button disabled sx={{backgroundColor:"gray"}}>Given Award</Button>
  <Button disabled sx={{backgroundColor:"gray"}}>Share</Button>
  <Button disabled sx={{backgroundColor:"gray"}}>Report</Button>
  <Button disabled sx={{backgroundColor:"gray"}}>Save</Button>
  
  </ButtonGroup>
    {children && replies.map((reply,i)=>{
      return <Comments key={i} {...reply}/>
    })}
   
    </details>
    </Box>
  
   
   
   
    </>
    
    
  )
}

export default Comments