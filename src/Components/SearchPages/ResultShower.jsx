import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const ResultShower = () => {

    const [age, setAge] = React.useState('');

    console.log(age)


    return (
        <div style={{backgroundColor:'white',padding:'1%',marginTop:'1%',borderTop:'0.1px solid gainsboro',marginBottom:'2%'}}>
            <div>
                <span style={{fontSize:'90%',fontWeight:'300'}}>Home / Delhi / Telibara</span>
                <span style={{marginLeft:'50%', fontSize:'90%',fontWeight:'300'}}>
                    Sort By:
                    <Select
                        value={age}
                        style={{width:'9rem',marginLeft:'1%',border:'none'}}
                        label=''
                        onChange={(e)=>setAge(e.target.value)}
                    >
                        <MenuItem value={'increasing'}>Low to High</MenuItem>
                        <MenuItem value={'decreasing'}>High to Low</MenuItem>
                        <MenuItem value={''}>Clear</MenuItem>
                    </Select>
                </span>
            </div>
            <div style={{fontSize:'110%'}}>112 - Flats, Apartments for Rent in Telibara, Delhi | Rental Properties in Telibara</div>
        </div>
    )
}
