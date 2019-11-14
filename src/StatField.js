import React from 'react'

export class StatField extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { target } = e
    const { name } = target
    this.props.onChange(name, target.value);
  }

  render(){
    return(
      <label>
        {this.props.name.toUpperCase()}:
        <input
          type="number"
          name={this.props.name}
          value={this.props.value}
          onChange={this.handleChange}
        />
      </label>
    )
  }
}