import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class Current extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Indianapolis,us&units=imperial&APPID=b6238132eb70860247b18cda03735702')

       .then(response => response.json())
       .then((data)=>{
           this.setState({
               city: data.name,
               temp: Math.round(data.main.temp),
               cond: data.weather[0].description
           })
           console.log(data)

       })

   }
    render() {
        this.state={
            city:'INDIANAPOLIS'
        }
        var date = moment().format("LLL")
    return <div>
    {this.state.city}
    {date}

    <h1>{this.state.temp}</h1>
    <p>{this.state.cond}</p>

    </div>
    }
}


export default Current
