import React, { useState, useEffect } from 'react';
import { BsCloudSun } from 'react-icons/bs';
import useDate from '../../hooks/useDate';
import axios from 'axios';


const Footer = (props) => {
    /* eslint-disable */
    const [time, date] = useDate()
    /* eslint-enable */
    const [weather, setWeather] = useState('');
    const [location, setLocation] = useState({
        latitude: "",
        longitude: ""
    });
    const getWeatherdata = async () => {
        let lat = '';
        let long = '';
        navigator.geolocation.getCurrentPosition((position) => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            console.log(position.coords.latitude, position.coords.longitude);
        });
        setLocation({...location, latitude: lat, longitude: long});
        await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat || `8.7064576`}&longitude=${long || `77.7224192`}&timezone=IST&daily=weathercode&current_weather=true&temperature_unit=celsius`).then((res) => {
            setWeather(res.data.current_weather.temperature)
        }).catch(err => {
            console.log(err)
        });
    }
    useEffect(() => {
        getWeatherdata();
    }, []);
  return (
    <React.Fragment>
        <footer className='w-full h-auto p-4 mt-6 flex justify-center items-center'>
            <div className='max-w-[1280px] w-full flex flex-col justify-center items-center'>
                <div className='flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 sm:space-y-4 justify-center items-center mx-auto'>
                    <div className='w-full h-full flex flex-col justify-center items-center p-4   dark:text-white sm:border-b-2 lg:border-r-0 lg:border-b-0 sm:border-r-0 border-[#fd4c74]'>
                        <div className='flex flex-row flex-nowrap justify-center items-center mb-4'>
                            <div className='icon-wrapper w-[50px] h-[50px] mr-3 flex justify-center p-[2px]'>
                                <BsCloudSun className='w-full h-full dark:text-[#ccd6f6] text-[#495670]' />
                            </div>
                            <div className='text-[22px] mt-2 font-medium mono-font dark:text-[#ccd6f6] text-[#495670]'>{weather !== "" ? `${weather} ºC` : `-- ºC` } | {date}</div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[2px] bg-[#0f172a]/10 dark:border-[#cbd5e1] border-t sm:mt-6 lg:mt-12 mb-6'></div>
                <p className='text-base mb-2 dark:text-[#8892b0] text-[#8892b0] w-full text-center'>Designed & Built by CloudBees</p>
            </div>
        </footer>
    </React.Fragment>
  )
}

export default Footer