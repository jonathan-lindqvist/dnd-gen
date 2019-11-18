import React from 'react'
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer'
import {capitalize} from './helpers/helpers'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10
  },
  stats: {
    fontSize: '12pt',
    
  },
  border:{
    border: true,
  }
});

export class Pdf extends React.Component {

  styleString(string){
    return JSON.stringify(string).substring(1, string.length+1) // I do not understand why it needs +1
  }

  render(){
    // refactor
    const name = this.styleString(this.props.location.state.name)
    const race = this.props.location.state.race
    const str = this.styleString(this.props.location.state.str)
    const dex = this.styleString(this.props.location.state.dex)
    const con = this.styleString(this.props.location.state.con)
    const int = this.styleString(this.props.location.state.int)
    const wis = this.styleString(this.props.location.state.wis)
    const cha = this.styleString(this.props.location.state.cha)
    const background = this.styleString(this.props.location.state.background)
    return (
      <div>
        <PDFViewer>
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text>{name}</Text>
                <Text style={styles.stats}>{capitalize(race)}</Text>
              </View>
              <View style={[styles.section, styles.border]}>
                <Text>Stats</Text>
                <View>
                  <Text style={styles.stats}>STR: {str}</Text>
                  <Text style={styles.stats}>DEX: {dex}</Text>
                  <Text style={styles.stats}>CON: {con}</Text>
                  <Text style={styles.stats}>INT: {int}</Text>
                  <Text style={styles.stats}>WIS: {wis}</Text>
                  <Text style={styles.stats}>CHA: {cha}</Text>
                </View>
              </View>
              <View style={[styles.section, styles.border]}>
                <Text>Background</Text>
                <Text style={styles.stats}>{background}</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      </div>
    )
  }
}