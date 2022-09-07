import React from 'react'
import '../../Styles/SearchPages/searchpage.css'
import { DataCard } from '../../Components/SearchPages/DataCard'
import { ResultShower } from '../../Components/SearchPages/ResultShower';
import { SearchBar } from '../../Components/SearchPages/SearchBar';
import { FilterForSearchPage } from '../../Components/SearchPages/FilterForSearchPage';
import { AdsSection } from '../../Components/SearchPages/AdsSection';
import { QuickLinksSearchPage } from '../../Components/SearchPages/QuickLinksSearchPage';

export const SearchPage = () => {
    const array = ['data1','data2','data3','data4','data5','data6'];

    const fetchData = () => {
        fetch(`http://localhost:8080/city`)
            .then((res)=>res.json())
            .then((res)=>console.log(res))
            .catch((err)=>console.log(err))
    }
    React.useEffect(()=>{
        fetchData();
    },[])

  return (
    <div>
    <SearchBar />    
    <div className='search-page-head-div'>
        <div>
            <FilterForSearchPage />
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
        <div>
            <QuickLinksSearchPage />
            <AdsSection item={'https://assets.nobroker.in/nb-new/3aa463f50bccb910d6f20439a5e1e052.png'}/>
            <AdsSection item={'https://assets.nobroker.in/nb-new/dda10f7e947145d3d068fcd012dbc3dc.png'}/>
            <AdsSection item={'https://assets.nobroker.in/nb-new/0ab174bed4d7bb23f6403f5a4cf57928.png'}/>
            <AdsSection item={'https://assets.nobroker.in/nb-new/be5fe76ff887fef4396b1f1f81e98117.png'}/>
            <AdsSection item={'https://assets.nobroker.in/nb-new/3aa463f50bccb910d6f20439a5e1e052.png'}/>
            <QuickLinksSearchPage />
            <AdsSection item={'https://assets.nobroker.in/nb-new/be5fe76ff887fef4396b1f1f81e98117.png'}/>
            <AdsSection item={'https://assets.nobroker.in/nb-new/dda10f7e947145d3d068fcd012dbc3dc.png'}/>
            <QuickLinksSearchPage />
        </div>
    </div>
    </div>
  )
}
