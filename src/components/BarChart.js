import React from 'react'
import * as d3 from 'd3'

class BarChart extends React.Component {
    constructor(props) {
        super(props)
        this.chartRef = React.createRef()
    }

    componentDidMount() {
        console.log(this.chartRef)

        d3.select(this.chartRef.current)
            .append('p')
            .text("Hello from D32")
    }

    render() {
        return (
            <div ref={this.chartRef}>
            </div>
        )
    }
}

export default BarChart