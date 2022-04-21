import { Component } from 'react';
import ShopItem from '../shopItem/ShopItem';
import Container from '../container/Container';
import SearchPanel from '../search-panel/SearchPanel';
import Filters from '../filters/Filters';

import './CoffeePage.css';

class CoffeePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {coffeeShopItems, onUpdateSearch, onUpdateFilter, filterValue} = this.props;
        
        const elements = coffeeShopItems.map(item => {
            const {id, ...itemProps} = item
            return (
            <ShopItem
            key={id} 
            {...itemProps}
            itemId={id}/>
            );
        });    

        return(
            <section className="coffee-shop">
                <Container>
                    <div className="coffee-shop__search">
                        <SearchPanel
                        onUpdateSearch={onUpdateSearch}
                        />
                        <Filters
                        filterValue={filterValue}
                        onUpdateFilter={onUpdateFilter}/>
                    </div>
                    <div className="coffee-shop__items">
                        {elements}
                    </div>
                </Container>
            </section>
        )
    }
}

export default CoffeePage;
