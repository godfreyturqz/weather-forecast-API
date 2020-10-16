import React, { useState, useEffect } from 'react';
import axios from "axios";
import './ApiData.css';

const ApiData = () => {
    const [jsondata, setJsondata] = useState([])

    //have used axios to get data from api url
    useEffect( ()=> {
        axios
        .get('https://api.climacell.co/v3/weather/forecast/daily?lat=15.210185&lon=120.581434&unit_system=si&start_time=now&fields=humidity%2Cprecipitation_probability%2Cweather_code%2Ctemp&apikey=cvSzTMRvkYmD0e7ok4nervQCvI0MmAF9')
        .then(response => {
            setJsondata(response.data)
        })
        .catch(error => console.log(error))
    })
    
    return (
        <>
            <div className="container">
                <div className="wrapper">
                    <h1>Daily Weather Forecast</h1>
                    <div className="row rowHead">
                        <p>Date</p>
                        <p>Weather</p>
                        <p>Precipitation Probability</p>
                        <p>Humidity (min.)</p>
                        <p>Humidity (max.)</p>
                        <p>Temp (min.)</p>
                        <p>Temp (max.)</p>
                    </div>
                    {jsondata.map ( obj => {
                        return (
                            <div className="row">
                                <p>{obj.observation_time.value}</p>
                                <p>{obj.weather_code.value}</p>
                                <p>{obj.precipitation_probability.value}</p>
                                <p>{obj.humidity[0].min.value}</p>
                                <p>{obj.humidity[1].max.value}</p>
                                <p>{obj.temp[0].min.value}</p>
                                <p>{obj.temp[1].max.value}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="wrapper">
                    <p>API by ClimaCell</p>
                </div>
            </div>
            
        </>
    )
}

export default ApiData