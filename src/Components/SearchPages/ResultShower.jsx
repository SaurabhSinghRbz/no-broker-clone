import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const ResultShower = (props) => {



    return (
        <div style={{backgroundColor:'white',padding:'1%',marginTop:'1%',borderTop:'0.1px solid gainsboro',marginBottom:'2%'}}>
            <div>
                <span style={{fontSize:'90%',fontWeight:'300'}}>Home / </span>
                <span style={{marginLeft:'50%', fontSize:'90%',fontWeight:'300'}}>
                    Sort By:
                    <Select
                        value={props.order}
                        style={{width:'9rem',marginLeft:'1%',border:'none'}}
                        label=''
                        onChange={(e)=>props.func(e.target.value)}
                    >
                        <MenuItem value={'asc'}>Low to High</MenuItem>
                        <MenuItem value={'desc'}>High to Low</MenuItem>
                        <MenuItem value={''}>Clear</MenuItem>
                    </Select>
                </span>
            </div>
            <div style={{fontSize:'110%'}}>{props.item.length} - Flats, Apartments for Sale in Your Searched Area | Selling Properties in Your Searched Area</div>
        </div>
    )
}
