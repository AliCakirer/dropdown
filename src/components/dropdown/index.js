import React, { Component } from 'react'

import Box from './box'

export default class index extends Component {
    render() {
        return (
            <div>
                <Box
                handleClick = {this.onSelect}
                data = {this.state.data}
                />
            </div>
        )
    }
}
