import Container from '../container/Container';
import Divider from '../divider/Divider';
import './AboutBeans.css';


const AboutBeans = () => {

    const img = '/img/Aromistico-Small.jpg'

    return (
        <div className="aboutBeans">
            <Container>
                <div className="aboutBeans__wrap">
                    <div className="aboutBeans__img">
                        <img src={window.location.origin + img} alt="" />
                    </div>
                    <div className="aboutBeans__descr">
                        <h2>About our beans</h2>
                        <Divider/>
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br /><br />
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. 
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AboutBeans;