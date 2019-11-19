import React from 'react'
import {getRandomNumber, getRandomName, getRandomBackground, countObjects, getRandomRace} from './helpers/helpers'
import { StatField } from './StatField'
import { TextField } from './TextField'
import { SelectField } from './SelectField'
import { TextareaField } from './TextareaField'
import { Redirect } from 'react-router-dom'

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
      redirect: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(name,newValue){
    this.setState({
      [name]: newValue
    })
  }

  handleSubmit(e){
    e.preventDefault()
    const entries = Object.entries(this.state)
    entries.map( stateItem => {
      if(stateItem[1] === 0 || stateItem[1] === ""){
        if(stateItem[1] === 0){
          const newAttribute = {[stateItem[0]]: getRandomNumber(20)}
          this.setState(newAttribute)
        }else if(stateItem[0] === "name" && stateItem[1] === ""){
          this.setState({
            [stateItem[0]]: getRandomName()
          })
        }else if(stateItem[0] === "background" && stateItem[1] === ""){
          this.setState({
            [stateItem[0]]: getRandomBackground()
          })
        }else if(stateItem[0] === "race" && stateItem[1] === ""){
          this.setState({
            [stateItem[0]]: getRandomRace()
          })
        }
      }
      return stateItem
    })
    this.setState({
      redirect: true
    })
  }

  render(){
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: '/pdf',
        state: this.state,
    }}/>;
    }
    return (
      <div className="flex-center column align-items-center">
        <p className="tip">(Leaving stuff blank will generate it for you)</p>
        <form className="flex-center column" onSubmit={this.handleSubmit}>
          <TextField text="Character name" name="name" value={this.state.name} onChange={this.handleChange}/>

          <SelectField text="Pick your race" name="race" value={this.state.race} options={["human", "orc", "duck", "elf", "dwarf"]} onChange={this.handleChange}/>

          <StatField name="str" value={this.state.str} onChange={this.handleChange}/>
          <StatField name="dex" value={this.state.dex} onChange={this.handleChange}/>
          <StatField name="con" value={this.state.con} onChange={this.handleChange}/>
          <StatField name="int" value={this.state.int} onChange={this.handleChange}/>
          <StatField name="wis" value={this.state.wis} onChange={this.handleChange}/>
          <StatField name="cha" value={this.state.cha} onChange={this.handleChange}/>

          <TextareaField text="Background" name="background" value={this.state.background} onChange={this.handleChange}/>
          <input type="submit" value={countObjects(this.state, 8) ? "Randomize & Submit" : "Submit"} />
        </form>
      </div>
    )
  }
}