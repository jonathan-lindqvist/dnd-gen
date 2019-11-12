import React from 'react'

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
    }
  }
  render(){
    return (
      <div>
        <p>(Leaving stuff blank will generate it for you)</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Character name:
            <input name="name"type="text" value={this.state.value} onChange={this.handleChange} />
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
            <textarea name="background" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}