import { Component } from 'react';
import BestItem from '../best-item/BestItem';
import Container from '../container/Container';

import './Best.css';

class Best extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {bestItems} = this.props;
        
        const elements = bestItems.map(item => {
            const {id, ...itemProps} = item
            return (
            <BestItem
            key={id}
            {...itemProps}/>
            );
        });    

        return(
            <section className="best">
                <Container>
                    <h2 className="best__title">Our Best</h2>
                    <div className="best__wrapper">
                        {elements}
                    </div>
                </Container>
            </section>
        )
    }
}

export default Best;