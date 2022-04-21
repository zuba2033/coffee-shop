import { Component } from 'react';
import './Promo.css'; 
import Container from '../container/Container';
import Divider from '../divider/Divider';
import NavPanel from '../nav-panel/Nav-panel';

class Promo extends Component {

    render() {
        return (
            <section className='promo'>
                <Container>
                    <NavPanel/>
                    <div className="promo__wrapper">
                        <h1>Everything You Love About Coffee</h1>
                        <Divider/>
                        <h2>We makes every day full of energy and taste
                        Want to try our beans?
                        </h2>
                        <button className="promo__button">More</button>
                    </div>
                </Container>
            </section>
        );
    }

    
}

export default Promo; 