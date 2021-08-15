import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'

export default class App extends Component {
  data = [
    {
      key: '1',
      value: 'India',
    },
    {
      key: '2',
      value: 'Australia',
    },
    {
      key: '3',
      value: 'Mary Phillips',
    },
    {
      key: '4',
      value: 'Nepal',
    },
    {
      key: '5',
      value: 'Pakistan',
    },
    {
      key: '6',
      value: 'Qatar',
    },
    {
      key: '7',
      value: 'Egypt',
    },
    
    
  ]

  render() {
    return (
      <ReactSearchBox
        placeholder="Nationality"
        value="India"
        data={this.data}
        callback={record => console.log(record)}
      />
    )
  }
}