import React, { Component } from 'react'
import D3ChartDropdown from './D3ChartDropdown'
//import D3Chart from './D3Chart'
//import D3ChartInterval from './D3ChartInterval'

export default class ChartWrapper extends Component {

    componentDidMount() {
        //new D3Chart(this.refs.chart)
        //new D3ChartInterval(this.refs.chart)

        this.setState({
            chart: new D3ChartDropdown(this.refs.chart)
        })
    }

    shouldComponentUpdate() {
        return false
    }

    componentWillReceiveProps(nextProps) {
        this.state.chart.update(nextProps.gender)
    }

    render() {
        return <div ref="chart"></div>
    }
}