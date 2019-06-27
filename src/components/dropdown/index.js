import React, { Component } from 'react'
import Box from './box'
class Dropdown extends Component {
constructor(props){
    super(props)
    this.state={
    selectedCity:null  
    }
    this.selectCity = this.selectCity.bind(this)
}

selectCity(event) {
    this.setState=({
        selectedCity:event.target.value
    })
}


    render() {
        return (
            <div>
                <Box
                handleClick = {this.onSelect}
                data = {this.state.data}
                onClick={this.selectCity}
                />
            </div>

        )
    }
}
export default Dropdown