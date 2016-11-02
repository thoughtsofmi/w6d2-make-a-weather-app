import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class Current extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           city: 'Indianapolis',
           temp: '--',
           cond: ''
        }
    }
    
    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Indianapolis,us&units=imperial&APPID=b6238132eb70860247b18cda03735702')

       .then(response => response.json())
       .then((data)=>{
           this.setState({
               temp: Math.round(data.main.temp),
               cond: data.weather[0].description
           })
           console.log(data)

       })

   }
    render() {
   var date = moment().format("LLL")

    return <div>
    <div className="row text-center">
      <div className="col-sm-12">
        <h1 className="blue text-uppercase">{this.state.city}</h1>
        <h4 className="blue"> {date}</h4>
        <br />
        <br />
        <br />
        <p className="bigNumbers blue">
          {this.state.temp}&deg;
        </p>
        <p className="weatherDescription">{this.state.cond}</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>

    </div>

    }
}


export default Current
