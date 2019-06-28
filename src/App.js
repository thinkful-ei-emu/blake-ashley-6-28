import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import CustomizationForm from './components/customization-form';
import CheckoutSummary from './components/checkout-summary';
import FEATURES from './components/features';


class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      features: FEATURES,        
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature = (feature, newValue) => {
    console.log('before update', this.state.selected)
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    console.log('after', selected)
    this.setState({
      selected
    });
  }
  

  render() {
    console.log(this.state.selected);
    const summary = Object.keys(this.state.selected).map(key => <div className="summary__option" key={key}>
    <div className="summary__option__label">{key}  </div>
    <div className="summary__option__value">{this.state.selected[key].name}</div>
    <div className="summary__option__cost">
      { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
          .format(this.state.selected[key].cost) }
    </div>
    </div>);

    

    
      
    const total = Object.keys(this.state.selected)
    .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0); 
    console.log(total); 

    return (
      <div className="App">
        <Header />
        <main>
          <CustomizationForm features={this.state.features} selected={this.state.selected} updateFeature={this.updateFeature} />
          <CheckoutSummary selected={this.state.selected} summary={summary} total={total}/>
        </main>
      </div>
    );
  }
}

export default App;  
