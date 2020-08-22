import React from 'react';
import { Container } from './style.css';
import logo from '../../images/logo.png'
import sara from '../../images/sara.jpg'
import karenQ from '../../images/karenQ.jpg'
import karenR from '../../images/karenR.jpg'
import mile from '../../images/milexys.jpg'

import Fade from 'react-reveal/Fade';

const Home = () => {
    return (
        <Container>
            <div className="container">
                <Fade bottom cascade duration={3000}>
                    <div className="descripcion">
                        <div>
                            <img src={logo} alt="logo" />
                        </div>
                        <div>
                            <p><span>Violeta</span> nace con la necesidad de ayudar a las mujeres, no sólo a poder dar visibilidad a sus emprendimientos sino también como una herramienta que permita a todas las mujeres crecer como empresarias.</p>
                        </div>
                        <div className="images">
                            <div>
                                <img src={karenQ} alt="logo" />
                                <p>Karen Quezada</p>
                            </div>
                            <div>
                                <img src={karenR} alt="logo" />
                                <p>Karen Reyes</p>
                            </div>
                            <div>
                                <img src={mile} alt="logo" />
                                <p>Milexys Ferrer</p>
                            </div>
                            <div>
                                <img src={sara} alt="logo" />
                                <p>Sarays Guarguana</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>

            <div>

            <div className="items">
                            <div>
                                <img src={karenQ} alt="logo" />
                                <p>Karen Quezada</p>
                            </div>
                            <div>
                                <img src={karenR} alt="logo" />
                                <p>Karen Reyes</p>
                            </div>
                            <div>
                                <img src={mile} alt="logo" />
                                <p>Milexys Ferrer</p>
                            </div>
                            <div>
                                <img src={sara} alt="logo" />
                                <p>Sarays Guarguana</p>
                            </div>
                        </div>
            </div>
        </Container>
    );
}

export default Home;