import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
// import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import '../../Styles/SearchPages/filter.css'
import { Button } from '@mui/material';


export const FilterForSearchPage = (props) => {

  const [value, setValue] = React.useState([20, 37]);

  const [filterType, setFilterType] = React.useState('filter')

  const handleChange = (event, newValue) => {
    setValue(newValue * 5000);
  };


  return (
    <div style={{ backgroundColor: 'white', width: '70%', marginLeft: '20%', padding: '1rem', marginTop: '2rem' }}>
      <div>
        <Button style={{ width: '9.9rem', color: filterType === 'filter' ? 'green' : 'black', borderBottom: filterType === 'filter' ? '3px solid green' : '', }} onClick={() => setFilterType('filter')}>Filter</Button>
        <Button style={{ width: '10rem', color: filterType === 'premium-filter' ? 'green' : 'black', borderBottom: filterType === 'premium-filter' ? '3px solid green' : '' }} onClick={() => setFilterType('premium-filter')} >Premium Filter</Button>
      </div>
      {
        filterType === 'filter' ?
          <div>
            <div style={{ display: 'flex', marginLeft: '80%' }}>
              <div><button style={{ display: 'flex', border: 'none', backgroundColor: 'white' }} onClick={() => props.setType('')}><span></span><span style={{ marginTop: '0.3rem' }}>refresh</span></button></div>
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              Apartment Type
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gridGap: '0.4rem' }}>
              <button className='apartmentType' onClick={() => props.setType('1 RK')}>1RK</button>
              <button className='apartmentType' onClick={() => props.setType('1BHK')}>1BHK</button>
              <button className='apartmentType' onClick={() => props.setType('2BHK')}>2BHK</button>
              <button className='apartmentType' onClick={() => props.setType('3 BHK')}>3BHK</button>
              <button className='apartmentType' onClick={() => props.setType('4 BHK')}>4BHK</button>
              <button className='apartmentType' onClick={() => props.setType('4+ RK')}>4+BHK</button>
            </div>
            <br />
            <div style={{ marginBottom: '0.5rem' }}>Price Range: ₹0 to ₹{value}</div>
            <div>
              <Box width={300}>
                <Slider defaultValue={20} onChange={handleChange} aria-label="Default" valueLabelDisplay="auto" />
              </Box>
            </div>
            <br />
            <div style={{ marginBottom: '0.5rem' }}>Availbility</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }}>
              <label htmlFor="">
                <input type="radio" name='availability' />
                immidiate
              </label>
              <label htmlFor="">
                <input type="radio" name='availability' />
                Within 15 days
              </label>
              <label htmlFor="">
                <input type="radio" name='availability' />
                Within 15 days
              </label>
              <label htmlFor="">
                <input type="radio" name='availability' />
                after 30 days
              </label>
            </div>
            <br />
            <div style={{ marginBottom: '0.5rem' }}>Furnishing</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
              <label htmlFor="">
                <input type="checkbox" name='furnishing' />
                Full
              </label>
              <label htmlFor="">
                <input type="checkbox" name='furnishing' />
                semi
              </label>
              <label htmlFor="">
                <input type="checkbox" name='furnishing' />
                none
              </label>
            </div>
            <br />
            <div style={{ marginBottom: '0.5rem' }}>
              Floor
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gridGap: '0.4rem' }}>
              <button className='apartmentType'>Ground</button>
              <button className='apartmentType'>1 to 3</button>
              <button className='apartmentType'>4 to 6</button>
              <button className='apartmentType'>7 to 9</button>
              <button className='apartmentType'>10 {'&'} above</button>
              <button className='apartmentType'>Custom</button>
            </div>
          </div>



          :



          <div>
            <div style={{ display: 'flex', marginLeft: '80%' }}>
              <div><button style={{ display: 'flex', border: 'none', backgroundColor: 'white' }}><span></span><span style={{ marginTop: '0.3rem' }}>refresh</span></button></div>
            </div>
            <div style={{ marginBottom: '0.5rem' }}>Gated Societies</div>
            <div>
              <label htmlFor="">
                <input type="checkbox" name='gatedSocieties' />
                Gated Societies
              </label>
            </div>
            <br />
            <div style={{ marginBottom: '0.5rem' }}>Show Only</div>
            <div>
              <label htmlFor="">
                <input type="checkbox" name='nonVegAllowed' />
                Non Veg Allowed
              </label>
            </div>
            <br />
            <div style={{ marginBottom: '0.5rem' }}>Property Age</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }}>
              <label htmlFor="">
                <input type="checkbox" name='availability' />
                {'<1 year'}
              </label>
              <label htmlFor="">
                <input type="checkbox" name='availability' />
                {'<3 year'}
              </label>
              <label htmlFor="">
                <input type="checkbox" name='availability' />
                {'<5 year'}
              </label>
              <label htmlFor="">
                <input type="checkbox" name='availability' />
                {'<10 year'}
              </label>
            </div>
          </div>
      }

    </div>
  )
}
