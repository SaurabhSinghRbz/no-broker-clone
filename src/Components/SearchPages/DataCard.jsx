import React from 'react'
import '../../Styles/SearchPages/searchpage.css'
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import { Button } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FlagTwoToneIcon from '@mui/icons-material/FlagTwoTone';
import IosShareIcon from '@mui/icons-material/IosShare';
import Carousel from 'react-elastic-carousel'

export const DataCard = (props) => {

    const images = props.item.img;

    return (
        <div style={{ backgroundColor: 'white' }}>
            <div>
                <div style={{ paddingLeft: '2%', paddingTop: '2%', paddingBottom: '2%', fontWeight: '600' }} >
                    <div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ fontSize: '100%' }} className='card-house-name-heading'>{props.item.apartment_name}</span>
                            <div><span><IosShareIcon style={{ width: '1rem', color: 'black', marginLeft: '0.5rem' }} /></span></div>
                        </div>
                        <div style={{ color: 'black', fontSize: '90%' }}>{props.item.city}<a href="/" style={{ color: 'black', fontSize: '80%' }}> explore info</a></div>
                    </div>
                </div>
                <div className='price-div'>
                    <span className='price-span'>
                        <div>
                            <center>
                                <p className='var-price-tag'>{props.item.parking}</p>
                                <p className='con-price-tag'>Parking</p>
                            </center>
                        </div>
                    </span>
                    <span className='price-span'>
                        <div>
                            <center>
                                <p className='var-price-tag'>{props.item.emi}</p>
                                <p className='con-price-tag'>Emi</p>
                            </center>
                        </div>
                    </span>
                    <span className='price-span'>
                        <div>
                            <center>
                                <p className='var-price-tag'>₹ {props.item.total_square_feet_price} lacs</p>
                                <p className='con-price-tag'>Price</p>
                            </center>
                        </div>
                    </span>
                </div>
                <div style={{ padding: '2%', display: 'grid', gridTemplateColumns: '35% 65%', height: '11rem' }}>
                    <div className='data-card-image'>
                        <Carousel>
                            <img src={images[0]} alt="" style={{ height: '9rem', width: '15rem' }} />
                            <img src={images[1]} alt="" style={{ height: '9rem', width: '15rem' }} />
                            <img src={images[2]} alt="" style={{ height: '9rem', width: '15rem' }} />
                            <img src={images[3]} alt="" style={{ height: '9rem', width: '15rem' }} />
                            <img src={images[4]} alt="" style={{ height: '9rem', width: '15rem' }} />
                            <img src={images[5]} alt="" style={{ height: '9rem', width: '15rem' }} />
                        </Carousel>
                    </div>
                    <div style={{ paddingLeft: '10%' }}>
                        <div className='card-detail-div'>
                            <div style={{ display: 'grid', gridTemplateColumns: '10% 80%', padding: '6%' }}>
                                <div><ChairOutlinedIcon style={{ marginTop: '15%' }} /></div>
                                <div style={{ marginLeft: '10%' }}>
                                    <div className='var-price-tag'>Semi furnished</div>
                                    <div className='con-price-tag'>Furnishing</div>
                                </div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '10% 80%', padding: '6%' }}>
                                <div><ApartmentOutlinedIcon style={{ marginTop: '15%' }} /></div>
                                <div style={{ marginLeft: '10%' }}>
                                    <div className='var-price-tag'>{props.item.apartment_type}</div>
                                    <div className='con-price-tag'>Apartment Type</div>
                                </div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '10% 80%', padding: '6%' }}>
                                <div><FaceOutlinedIcon style={{ marginTop: '15%' }} /></div>
                                <div style={{ marginLeft: '10%' }}>
                                    <div className='var-price-tag'>All</div>
                                    <div className='con-price-tag'>Preferred Tennant</div>
                                </div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '10% 80%', padding: '6%' }}>
                                <div><KeyOutlinedIcon style={{ marginTop: '15%' }} /></div>
                                <div style={{ marginLeft: '10%' }}>
                                    <div className='var-price-tag'>Ready To Move</div>
                                    <div className='con-price-tag'>Available Form</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingTop: '2%', display: 'grid', gridTemplateColumns: '64% 18% 18%' }}>
                            <div>
                                <Button variant='contained' style={{ paddingTop: '2%', paddingBottom: '2%', paddingLeft: '21%', paddingRight: '21%', backgroundColor: 'red', borderRadius: '0px' }}>Get Owner Details</Button>
                            </div>
                            <div>
                                <Button variant='outlined' style={{ color: 'grey', borderColor: 'grey', marginLeft: '1rem' }}>
                                    <FavoriteBorderOutlinedIcon />
                                </Button>
                            </div>
                            <div>
                                <Button variant='outlined' style={{ color: 'grey', borderColor: 'grey', marginLeft: '1rem' }}>
                                    <FlagTwoToneIcon />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', paddingLeft: '2%', paddingBottom: '2%' }}>
                    <div style={{ padding: '0.3%' }}>Nearby: </div>
                    <div className='nearby'>Q Cinemas</div>
                    <div className='nearby'>Metro Cash And Carry</div>
                    <div className='nearby'>Vishal Mega Mart</div>
                    <div className='nearby'>Janta Eating House</div>
                </div>
            </div>

        </div>
    )
}
