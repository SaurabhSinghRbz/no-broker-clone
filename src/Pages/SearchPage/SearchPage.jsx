import React, { useState } from 'react'
import '../../Styles/SearchPages/searchpage.css'
import { DataCard } from '../../Components/SearchPages/DataCard'
import { ResultShower } from '../../Components/SearchPages/ResultShower';
import { SearchBar } from '../../Components/SearchPages/SearchBar';
import { FilterForSearchPage } from '../../Components/SearchPages/FilterForSearchPage';
import { AdsSection } from '../../Components/SearchPages/AdsSection';
import { QuickLinksSearchPage } from '../../Components/SearchPages/QuickLinksSearchPage';

export const SearchPage = () => {
    const [apartType,setApartType] = useState('');

    const [order,setOrder] = useState('');

    const handleOrder = (orderType) => {
        setOrder(orderType);
        console.log('setting order');
    }

    const [searchedCity,setSearchedCity] = useState('');
    const handleApartmentType = (type) => {
        setApartType(type);
        console.log(type)
        console.log(data);
    }
    const handleSearchedCity = (cityName) => {
        setSearchedCity(cityName);
        console.log('inside handleSearchedCity');
    }
    const tempData = 'thane'
    const [data,setData] = useState([])
    const fetchData = () => {
        if(searchedCity===''){
            fetch(`http://localhost:8080/houses?_sort=total_square_feet_price&_order=${order}`)
            .then((res)=>res.json())
            .then((res)=>setData(res))
            .catch((err)=>console.log(err))    
        }
        else{
            fetch(`http://localhost:8080/houses?city=${searchedCity}&_sort=total_square_feet_price&_order=${order}`)
                .then((res)=>res.json())
                .then((res)=>setData(res))
                .catch((err)=>console.log(err))
        }
        console.log(data);
    }
    React.useEffect(()=>{
        fetchData();
    },[searchedCity,order])

  return (
    <div>
    <SearchBar func={handleSearchedCity}/>    
    <div className='search-page-head-div'>
        <div>
            <FilterForSearchPage setType={handleApartmentType}/>
        </div>
        <div>
            <ResultShower item={data} func={handleOrder} label={order}/>
            {
                data.filter((el)=>{
                    if(apartType===''){
                        return el
                    }
                    else{
                        if(el.apartment_type===apartType){
                            return el
                        }
                    }
                    
                }).map((el)=>{
                    return(
                    <div className='search-page-card-head' key={el.id}>
                    <div>
                        <DataCard item={el}/>
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
