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
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter character name (leaving it blank will generate one):
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
            Background:
            <textarea name="background" value={this.state.value} onChange={this.handleChange} />
            (Leaving it blank will generate one)
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}