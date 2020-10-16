import React, { useState, useEffect } from 'react';
import axios from "axios";
import './ApiData.css'

const ApiData = () => {
    const [jsondata, setJsondata] = useState([])

    //have used axios to get data from requested url
    useEffect( ()=> {
        axios.get('https://api.climacell.co/v3/weather/forecast/daily?lat=15.210185&lon=120.581434&unit_system=si&start_time=now&fields=humidity%2Cprecipitation_probability%2Cweather_code&apikey=cvSzTMRvkYmD0e7ok4nervQCvI0MmAF9')
            .then(response => {
                setJsondata(response.data)
            })
            .catch(error => console.log(error))
    })


    return (
        <>
            <div className="container">
                <h1>Daily Weather Forecast by climacellAPI</h1>
                <div className="row rowHead">
                    <p>Date</p>
                    <p>Weather</p>
                    <p>Precipitation Probability</p>
                    <p>Humidity (min)</p>
                    <p>Humidity (max)</p>
                </div>
                <div className="row">
                    <p>data...</p>
                    <p>data...</p>
                    <p>data...</p>
                    <p>data...</p>
                    <p>data...</p>
                </div>
                {jsondata.map ( jsondata => {
                    return (
                        <div className="row">
                            <p>{jsondata.observation_time.value}</p>
                            <p>{jsondata.weather_code.value}</p>
                            <p>{jsondata.precipitation_probability.value}</p>
                            <p>{jsondata.humidity[0].min.value}</p>
                            <p>{jsondata.humidity[1].max.value}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ApiData