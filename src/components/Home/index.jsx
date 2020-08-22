import React from 'react';
import { Container } from './style.css';
import logo from '../../images/logo.png'
import sara from '../../images/sara.jpg'
import karenQ from '../../images/karenQ.jpg'
import karenR from '../../images/karenR.jpg'
import mile from '../../images/milexys.jpg'

import presentacion from '../../images/presentacion.jpeg'
import mobile from '../../images/mobile.jpeg'
import figma from '../../images/figma.png'

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
            <div className="items">
                <div className="contenedor">
                    <div className="card">
                        <div className="img">
                            <img src={presentacion} alt="logo" />
                        </div>
                        <div className="texto">
                            <h4>Research Study</h4>
                            <p>Estudio realizado sobre el proyecto</p>
                            <a href="https://docs.google.com/presentation/d/16WvAp9HeWL6NX0aDEjvqwYu7WApTSjx6juFz-G_4RCQ/edit#slide=id.gc6f80d1ff_0_27" target="_blank">Ver</a>
                        </div>
                    </div>
                    <div className="card">

                        <div className="img">
                            <img src={figma} alt="logo" />
                        </div>
                        <div className="texto">
                            <h4>Figma</h4>
                            <p>Prototipo de alta fidelidad realizado en Figma, versión mobile.</p>
                            <a href="https://www.figma.com/file/8Pkj9sZhr3UYZvxzJRzndl/Violeta?node-id=0%3A1" target="_blank">Ver</a>
                        </div>
                    </div>
                    <div className="card">

                        <div className="img">
                            <img src={mobile} alt="logo" />
                        </div>
                        <div className="texto">
                            <h4>Prototipo de Alta Fidelidad</h4>
                            <p>Prototipo de alta fidelidad realizado en Figma, versión mobile.</p>
                            <a href="https://www.figma.com/proto/8Pkj9sZhr3UYZvxzJRzndl/Violeta?node-id=89%3A124&scaling=scale-down" target="_blank">Ver</a>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
}

export default Home;