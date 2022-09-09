import React from 'react'

export const AdsSection = (props) => {
   const url = props.item;
  return (
    <div>
        <img src={url} alt=""  style={{width:'125%',marginLeft:'1rem', marginTop:'1rem'}}/>
    </div>
  )
}
