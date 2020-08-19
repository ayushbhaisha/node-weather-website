const request = require("request")

const forecast = (address,callback) => {
    const url = 'http://api.weatherstack.com/forecast?access_key=8dd287b2cea7c22335304a7bf98412d3&query='+encodeURIComponent(address)

    request ({url, json :true},(error, {body}) => {
        if(error){
            callback('Unable to find location...',undefined)
        }else if(body.error){
            callback('Missing location...',undefined)
        }else{
            callback(undefined,body.current.weather_descriptions+'. It is currently '+body.current.temperature+' outside. It is '+ body.current.precip+'% chance of rain.')
        }
    })

    
}

module.exports = forecast