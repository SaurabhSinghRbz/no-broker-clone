import { Button } from '@mui/material'
import React from 'react'

export const SearchBar = (props) => {
    const [type,setType] = React.useState('list');
    const [input,setInput] = React.useState('');
  return (
    <div>
        <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
            <div>
                <input type="text" placeholder='Search upto three localities or landmarks' value={input} onChange={(e)=>{setInput(e.target.value)}} style={{padding:'0.7rem',width:'30rem',marginTop:'0.5rem',marginBottom:'0.5rem',marginLeft:'2rem'}}/>
                <Button variant='contained' style={{backgroundColor:'red', borderRadius:'0px',padding:'0.5rem'}} onClick={()=>props.func(input.toLowerCase())}>Search</Button>
            </div>
            <div style={{marginTop:'1rem'}}>
                <Button variant='outlined' style={{backgroundColor:type==='list'?'red':'gainsboro',padding:'0rem',color:type==='list'?'white':'black', border:'none'}} onClick={()=>setType('list')}>List</Button>
                <Button variant='outlined' style={{backgroundColor:type==='map'?'red':'gainsboro',padding:'0rem',color:type==='map'?'white':'black', border:'none'}} onClick={()=>setType('map')}>Map</Button>
            </div>
        </div>
    </div>
  )
}
