import React from 'react'
import {getRandomNumber, getRandomName, getRandomBackground} from './helpers/helpers'

export class CharForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      race: '',
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
      background: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    const { target } = e
    const { name } = target
    this.setState({
      [name]: target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    const entries = Object.entries(this.state)
    entries.map( stateItem => {
      if(stateItem[1] === 0 || stateItem[1] === ""){
        if(stateItem[1] === 0){
          console.log("changing number")
          const newAttribute = {[stateItem[0]]: getRandomNumber(20)}
          console.log(newAttribute)
          this.setState(newAttribute)
        }else if(stateItem[0] === "name" && stateItem[1] === ""){
          this.setState({
            [stateItem[0]]: getRandomName()
          })
        }else if(stateItem[0] === "background" && stateItem[1] === ""){
          this.setState({
            [stateItem[0]]: getRandomBackground()
          })
        }
      }
      return stateItem
    })
  }


  render(){
    return (
      <div>
        <p>(Leaving stuff blank will generate it for you)</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Character name:
            <input name="name"type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Pick your race:
            <select name="race" value={this.state.race} onChange={this.handleChange}>
              <option value="human">Human</option>
              <option value="orc">Orc</option>
              <option value="duck">Duck</option>
              <option value="elf">elf</option>
              <option value="dwarf">dwarf</option>
            </select>
          </label>

          <label>
            STR:
            <input
              type="number"
              name="str"
              value={this.state.str}
              onChange={this.handleChange}
            />
          </label>
          <label>
            DEX:
            <input
              type="number"
              name="dex"
              value={this.state.dex}
              onChange={this.handleChange}
            />
          </label>
          <label>
            CON:
            <input
              type="number"
              name="con"
              value={this.state.con}
              onChange={this.handleChange}
            />
          </label>
          <label>
            INT:
            <input
              type="number"
              name="int"
              value={this.state.int}
              onChange={this.handleChange}
            />
          </label>
          <label>
            WIS:
            <input
              type="number"
              name="wis"
              value={this.state.wis}
              onChange={this.handleChange}
            />
          </label>
          <label>
            CHA:
            <input
              type="number"
              name="cha"
              value={this.state.cha}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Background:
            <textarea name="background" value={this.state.background} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}