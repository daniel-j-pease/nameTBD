import React, { Component } from 'react';
import './StorefrontDD.css'

export default class StorefrontDD extends Component {

  test() {
    let createStore = document.querySelector('#createStoreDiv');
    createStore.style.display = 'block';
  }

  render() {
    return(
      <div onClick={this.test}>Create Storefront</div>
    )
  }
}
