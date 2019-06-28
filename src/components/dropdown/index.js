import React, { Component } from 'react'
import Box from '../box'
class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : this.props.data,
            selectedCity: null,
            selectedDistrict: null
        }
        this.selectCity = this.selectCity.bind(this)
        this.selectDistrict = this.selectDistrict.bind(this)
    }

    selectCity(event) {
        this.setState = ({
            selectedCity: event.target.value
        })
    }
    selectDistrict(event) {
        this.setState = ({
            selectedDistrict: event.target.value
        })
    }


    render() {
        return (
            <div>
                <Box
                    handleClick={this.selectCity}
                    data={this.state.data}
                />
                {this.selectedCity
                    &&
                    <Box
                        handleClick={this.selectDistrict}
                        data={this.state.selectedCity.subElement}

                    />}
                    {this.state.selectedCity && <h1>{this.state.selectedCity.name}</h1>}
                    {this.state.selectedDistrict && <h1>{this.state.selectedDistrict.name}</h1>}
            </div>

        )
    }
}
export default Dropdown