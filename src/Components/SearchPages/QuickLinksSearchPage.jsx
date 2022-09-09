import React from 'react'

export const QuickLinksSearchPage = () => {
  return (
    <div style={{backgroundColor:'white',marginLeft:'1rem',marginTop:'1rem',width:'112%',padding:'0.5rem'}}>
        <div>
            <div style={{color:'tomato'}}>Quick Links</div>
        </div>
        <hr/>
        <div style={{fontSize:'14px'}}>
            People also searched for
        </div>
        <div style={{fontSize:'14px'}}>
            <ul>
                <li>Flats in Malka Ganj for rent</li>
                <li>Flats in Jhandewalan for rent</li>
                <li>Flats in Sadar Bazaar for rent</li>
                <li>Flats in Chandni Chowk for rent</li>
                <li>Flats in Thaane for rent</li>
                <li>Flats in Bengaluru for rent</li>
            </ul>
        </div>
    </div>
  )
}
