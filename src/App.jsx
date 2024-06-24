import React, { Component } from 'react'
import BasicExample from './Header/Header'
import Footer from './Footer/Footer'
import VariantsExample from './VariantsExample/VariantsExample'
import ContextualExample from './ContextualExample/ContextualExample'
import Example from './Example/Example'
import Table from './Table/Table'
import Acardio from './Acardion/Acardio'







export default class App extends Component {
  render() {
    return (
      <div>
        <BasicExample/>
        <ContextualExample/>
        <Example/>
        <Table/>
        <Acardio/>
        <VariantsExample/>
        <Footer/>
      </div>
    )
  }
}
