import React from 'react'
import '../../Styles/SearchPages/searchpage.css'
import { DataCard } from '../../Components/SearchPages/DataCard'
import { ResultShower } from '../../Components/SearchPages/ResultShower';
import { SearchBar } from '../../Components/SearchPages/SearchBar';

export const SearchPage = () => {
    const array = ['data1','data2','data3','data4','data5','data6'];



  return (
    <div>
    <SearchBar />    
    <div className='search-page-head-div'>
        <div>
        </div>
        <div>
            <ResultShower />
            {
                array.map(()=>{
                    return(
                    <div className='search-page-card-head'>
                    <div>
                        <DataCard />
                    </div>
                    </div>)
                })
            }
        </div>
        <div></div>
    </div>
    </div>
  )
}
