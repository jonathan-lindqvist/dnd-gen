import React from 'react'

export class TextField extends React.Component {
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
        {this.props.text}:
        <input name={this.props.name} type="text" value={this.props.value} onChange={this.handleChange} />
      </label>
    )
  }
}