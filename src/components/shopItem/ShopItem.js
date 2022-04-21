import { Component } from "react";


import './ShopItem.css';

class ShopItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemId: ''
        }

    }
    
    onItemClick = (e) => {
        console.dir(e.target);
    }


    render() {

        const {name, price, img, country} = this.props;
        const {itemId} = this.props;

        return (
            <div className="shop-item" data-id={itemId} onClick={this.onItemClick} >
                <div className="shop-item__img"><img src={window.location.origin + img} alt="img" /></div>
                <h2 className="shop-item__name">{name}</h2>
                <div className="shop-item__country">{country}</div>
                <span className="shop-item__price">{price + '$'}</span>
            </div>
        )
    }
}

export default ShopItem;

