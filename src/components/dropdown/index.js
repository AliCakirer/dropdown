import React, { Component } from 'react'
import Box from '../box'
import './style.css'
class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showItems:false,
            data : this.props.data,
            selectedCity: null,
            selectedDistrict: null,
            selectedNeighbor:null
        }
        this.selectCity = this.selectCity.bind(this)
        this.selectDistrict = this.selectDistrict.bind(this)
        this.selectNeighbor= this.selectNeighbor.bind(this)
    }

    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems,
        }))
    }


    selectCity(item)   {
  
        this.setState  ({
          
            selectedCity: item,
            selectedDistrict:null,
            selectedNeighbor:null

        })
    }
    selectDistrict(item) {
        this.setState  ({
           
            selectedDistrict: item,
            selectedNeighbor:null

        })
    }
    selectNeighbor(item) {
        this.setState ({
          
            selectedNeighbor:item
        })
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="input-group input-group-sm search-input-group">
                            {/* City Input */}
                            <input className="inputCity dropdown-input" type="text" placeholder="Şehir seçiniz :" onClick={this.dropDown}
                            value={this.state.selectedCity !== null
                            ?this.state.selectedCity.name
                            :null
                            }
                            />

                            {/* District Input */}
                            <input className="inputDistrict dropdown-input" type="text" placeholder="İlçe seçiniz :" placeholder="İlçe seçiniz :"
                            value={this.state.selectedDistrict !== null
                            ?this.state.selectedDistrict.name
                            :null
                            }
                            />
                            
                            {/* Neighbor Input */}
                            <input className="inputNeighbor dropdown-input" type="text"  placeholder="Mahalle seçiniz :"

                            value={this.state.selectedNeighbor !== null
                            ?this.state.selectedNeighbor.name
                            :null
                            }
                            />
                        </div>   
                    </div>
                </div>
                    
                <div className="row box-row">
                    <div className="col-4">
                        {
                            this.state.showItems===true
                        ?<Box
                            handleClick={this.selectCity}
                            data={this.state.data}
                        />
                        
                        :null
                        }
                    </div>
                    <div className="col-4">
                        {this.state.selectedCity !== null && this.state.showItems===true
                            ?<Box
                                handleClick={this.selectDistrict}
                                data={this.state.selectedCity.subElement}

                            />
                        :null
                        }
                    </div>
                    <div className="col-4">
                        {this.state.selectedDistrict !== null && this.state.showItems===true
                        ?<Box
                        handleClick={this.selectNeighbor}
                        data={this.state.selectedDistrict.subElement}
                        />
                        :null
                        }
                    </div>
                </div> 
            </div>

        )
    }
}
export default Dropdown