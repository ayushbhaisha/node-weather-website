const request = require('request')
const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYXl1c2hiaGFpc2hhIiwiYSI6ImNrZHp0YnpuYzNwYzkycXR2ZjU4dWtkOTcifQ.5taA05s3T_BH0mIJKr6DCA'

    request ({url, json : true} , (error,{body}) => {
        if(error){
            callback('Unable to find location...',undefined)
        }else if(body.features.length === 0){
            callback('Missing location...',undefined)
        }else{
            callback(undefined,{
            lan : body.features[0].center[1],
            long : body.features[0].center[0],
            loc : body.features[0].place_name
            })
        }
    })
}

module.exports = geocode