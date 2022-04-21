import { Component } from "react";
import NavPanel from '../nav-panel/Nav-panel';
import Divider from "../divider/Divider";

import './Footer.css';


class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                <NavPanel/>
                <Divider/>
            </footer>
        )
    }
}

export default Footer;