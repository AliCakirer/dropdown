import React, { Component } from 'react'
import Box from '../box'
class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : this.props.data,
            selectedCity: null,
            selectedDistrict: null,
            selectedNeighbor:null
        }
        this.selectCity = this.selectCity.bind(this)
        this.selectDistrict = this.selectDistrict.bind(this)
        this.selectNeighbor = this.selectNeighbor.bind(this)
    }

    selectCity(item) {
    //    console.log(item.name)
        this.setState ({
            selectedCity:item,
            selectedDistrict:null,
            selectedNeighbor:null
        })
    }
    selectDistrict(item) {
        this.setState({
            selectedDistrict:item,
            selectedNeighbor:null
        })
    }
    selectNeighbor(item){
        this.setState({
            selectedNeighbor:item
        }) 
    }


    render() {
        console.log(this.state.selectedCity)
        return (
            <div>
                <Box
                    handleClick={this.selectCity}
                    data={this.state.data}
                />
                {this.state.selectedCity === null
                 ? null
                 :  <Box
                        handleClick={this.selectDistrict}
                        data={this.state.selectedCity.subElement}    
                    />}

                
                {this.state.selectedDistrict === null
                ? null
                :<Box
                        handleClick={this.selectNeighbor}
                        data = {this.state.selectedDistrict.subElement}
                />}    
                {this.state.selectedCity && <h1>{this.state.selectedCity.name}</h1>}                    
                {this.state.selectedDistrict && <h1>{this.state.selectedDistrict.name}</h1>}
                {this.state.selectedNeighbor && <h4>{this.state.selectedNeighbor.name}</h4>}

            
            </div>

        )
    }
}
export default Dropdown