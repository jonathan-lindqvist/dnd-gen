import React from 'react'
import {capitalize} from './helpers/helpers'

export class SelectField extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { target } = e
    const { name } = target
    this.props.onChange(name, target.value);
  }

  listOptions(array) {
    const options = array.map((optionName) => {
      return <option key={optionName} value={optionName}>{capitalize(optionName)}</option>
    })
    return options
  }

  render(){
    return(
       <label>
        {this.props.text}:
        <select name={this.props.name} value={this.props.value} onChange={this.handleChange}>
          {this.listOptions(this.props.options)}
        </select>
      </label>
    )
  }
}