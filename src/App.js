import React, { Component } from 'react'
import './App.css';

import Dropdown from './components/dropdown';




class App extends Component {
data= [
    {
        "name": "İstanbul",
        "subElement": [
            {
                "name": "Beşiktaş",
                "subElement": [
                    {
                        "name": "Akaretler"
                    },
                    {
                        "name": "Barbaros"
                    },
                    {
                        "name": "Çarşı"
                    }
                ]
            },
            {
                "name": "Beyoğlu",
                "subElement": [
                    {
                        "name": "Halıcıoğlu"
                    },
                    {
                        "name": "Çukur"
                    },
                    {
                        "name": "Tarlabaşı"
                    }
                ]
            }
        ]
    },
    {
        "name": "Hatay",
        "subElement": [
            {
                "name": "Hassa",
                "subElement": [
                    {
                        "name": "Girne"
                    },
                    {
                        "name": "Yeni Mahalle"
                    },
                    {
                        "name": "Ardıçlı"
                    }
                ]
            },
            {
                "name": "Kırıkhan",
                "subElement": [
                    {
                        "name": "Karadeniz"
                    },
                    {
                        "name": "Gazi Mahallesi"
                    },
                    {
                        "name": "Aktepe Mahallesi"
                    }
                ]
            }
        ]
    },
    {
        "name": "İzmir",
        "subElement": [
            {
                "name": "Güzeltepe",
                "subElement": [
                    {
                        "name": "Cem Mahallesi"
                    },
                    {
                        "name": "Mehmet Mahallesi"
                    },
                    {
                        "name": "Furkan Mahallesi"
                    }
                ]
            },
            {
                "name": "Göztepe",
                "subElement": [
                    {
                        "name": "A mahallesi"
                    },
                    {
                        "name": "B mahallesi"
                    },
                    {
                        "name": "C mahallesi"
                    }
                ]
            }
        ]
    }
]
  render(){
  return (
    <div className="App">
        <div className="container fluid">
            <div className="row">
                <div className="col-sm-12">
                    <Dropdown data = {this.data}/>
                </div>
            </div>
        </div>
    </div>

  )
  }
}

export default App;
