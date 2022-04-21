import { Component } from "react";

import './BestItem.css';

class BestItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {name, price, img} = this.props;

        return (
            <div className="best__item">
                <div className="best__img"><img src={window.location.origin + img} alt="img" className="best__img" /></div>
                <h2 className="best__name">{name}</h2>
                <span className="best__price">{price + '$'}</span>
            </div>
        )
    }
}

export default BestItem;