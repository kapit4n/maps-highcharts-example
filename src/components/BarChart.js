import React from 'react'
import * as d3 from 'd3'

class BarChart extends React.PureComponent {

    constructor(props) {
        super(props)
        this.chartRef = React.createRef()
        this.labelsRef = React.createRef()
        this.dataset = [100, 200, 300, 400, 500]
    }

    componentDidMount() {
        console.log(this.chartRef)

        let size = 500

        const container = d3.select(this.chartRef.current)

        let svg = container
            .append('svg')
            .attr('width', size)
            .attr('height', size)

        let labels = container
            .append('div')
            .attr('width', size)
            .attr('height', 20)
            .style("display", 'flex')

        let rect_width = 95

         svg.selectAll('rect')
             .data(this.dataset)
             .enter()
             .append('rect')
             .attr('x', (d, i) => 5 + i * (rect_width + 5))
             .attr('y', d => size - d)
             .attr('width', rect_width)
             .attr('height', d => d)
             .attr('fill', 'lightblue')

        labels.selectAll('p').data(this.dataset).enter().append("p").text(() => "Text")
            .style('width', `${rect_width + 5}px`)
            .attr('height', d => d)
            .attr('y', d => size - d)

    }

    render() {
        return (
            <div ref={this.chartRef} style={{display: "block"}}>
            </div>
        )
    }
}

export default BarChart