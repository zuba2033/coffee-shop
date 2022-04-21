
import { Component } from 'react';
import './App.css';
import Promo from '../promo/Promo';
import About from '../about/About';
import Best from '../best/Best';
import Footer from '../footer/Footer';
import OurCoffeeHeader from '../ourCoffeeHeader/OurCoffeeHeader';
import AboutBeans from '../aboutBeans/AboutBeans';
import CoffeePage from '../coffeePage/CoffeePage';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
          {
            name: 'Solimo Coffee Beans 2 kg',
            price: 10.73,
            best: false,
            country: '',
            type: 'goods',
            img: '/img/BEST-Solimo.png',
            id: 1
          },
          {
            name: 'Presto Coffee Beans 1 kg',
            price: 15.99,
            best: true,
            country: '',
            type: 'goods',
            img: '/img/BEST-Presto.png',
            id: 2
          },
          {
            name: 'AROMISTICO Coffee 1 kg',
            price: 15.99,
            best: false,
            country: 'brazil',
            type: 'coffee',
            img: '/img/ItemImg.png',
            id: 3
          },
          {
            name: 'Presto Coffee Beans 1 kg',
            price: 15.99,
            best: false,
            country: '',
            type: 'goods',
            img: '/img/BEST-Presto.png',
            id: 4
          },
          {
            name: 'AROMISTICO Coffee 1 kg',
            price: 10.50,
            best: true,
            country: 'colombia',
            type: 'coffee',
            img: '/img/ItemImg.png',
            id: 5
          },
          {
            name: 'AROMISTICO Coffee 1 kg',
            price: 20.95,
            best: true,
            country: 'kenya',
            type: 'coffee',
            img: '/img/ItemImg.png',
            id: 6
          },
      ],
      term : '',
      filterValue: 'all'
    }
  }
  

  searchItem = (items, term) => {
    if (term.length === 0) {
        return items;
    }

    return items.filter(item => {
        term = term.toLowerCase();
        const name = item.name.toLowerCase();
        return name.indexOf(term) > -1;
    })
  }

  onUpdateSearch = (term) => {
      this.setState({term})
  }

  onUpdateFilter = (filterValue) => {
    this.setState({filterValue});
}

  filterItems = (items, filterValue) => {
    if (filterValue === 'all' || filterValue === '') { return items};
    if (filterValue === 'brazil') {return items.filter(item => item.country === 'brazil')} 
    if (filterValue === 'kenya') {return items.filter(item => item.country === 'kenya')};
    if (filterValue === 'colombia') {return items.filter(item => item.country === 'colombia')};
  }

  render() {

    const {data, term, filterValue} = this.state;
    const bestItems = data.filter(item => item.best);
    const coffeeShopItems = this.filterItems((this.searchItem(data.filter(item => item.type === 'coffee'), term)), filterValue);

    return (
      <div className="App">
        <Promo/>
        <About/>
        <Best
        bestItems={bestItems}
        />
        <Footer/>
        <OurCoffeeHeader/>
        <AboutBeans/>
        <CoffeePage
        onUpdateSearch={this.onUpdateSearch}
        onUpdateFilter={this.onUpdateFilter}
        coffeeShopItems={coffeeShopItems}
        filterValue={filterValue}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
