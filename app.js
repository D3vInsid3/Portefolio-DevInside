class PresentationSimple extends React.Component {
    render() {
        return (
            <div>
                <div className="center m-3">
                    <img className="rounded img-fluid" src="./src/Photo_1.jpg" alt="photo David" width="100" />
                </div>
                <div className="center text-center">
                    <h1>DUFOUR David</h1>
                    <h2>38 ans</h2>
                    <h2>Groisy 74 - FRANCE</h2>
                </div>
            </div>
        );
    }
}

class PresentationDevInside extends React.Component {
    render() {
        return (
            <div className="">
                <div className="center  m-0 p-0">
                    <img className="rounded img-fluid" src="./src/logo2.png" alt="logo DevInside" width="100" />
                </div>
                <h2 className="text-center">Votre vision, notre expertise.</h2>
            </div>
        );
    }
}

class Reconversion extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid center m-0 p-0">
                    <h2 className="text-dark text-center m-1" style={{ fontSize: "4rem" }}>Ma reconversion</h2>
                </div>
                <a href="https://oclock.io/" target="_blank"><img src="./src/logo_oclock.png" alt="logo O'clock"
                    className="img-fluid mx-auto d-block m-5" width="150" /></a>
                <div className="container">
                    <h2 className="text-center">Formation de concepteur développeur d'application</h2>
                    <p className="text-center m-0">10 mois dont 2 en stage</p>
                    <p className="text-center m-0">RNCP niveau 6 obtenu en Décembre 2024</p>
                </div>
                <div className="text-center mb-3">----</div>
                <div className="container">
                    <h3 className="text-center">En quelques mots</h3>
                    <div className="d-flex gap-5 m-3 justify-content-md-center">
                        <div>
                            <ul>
                                <li>Algorithmie</li>
                                <li>Base de donnée</li>
                                <li>DevOps</li>
                                <li>Sécurité</li>
                                <li>Back/Front end</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>React/Nestjs</li>
                                <li>Gestion de projet</li>
                                <li>Conception UML</li>
                                <li>Architecture</li>
                                <li>IA</li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex center gap-5 m-5">
                        <a href="https://oclock.io/formations/concepteur-developpeur-initial" target="_blank"><button
                            type="button" className="btn btn-primary">En savoir plus</button></a>
                    </div>
                    <div className="d-flex flex-row-reverse">
                        <p>Merci à eux :)</p>
                    </div>
                </div>
            </div>
        );
    }
}

class Skills extends React.Component {
    render() {
        const { gapConfig } = this.props
        return (
            <div>
                <div className="container-fluid text-center m-0 p-0">
                    <h2 className="text-dark m-1" style={{ fontSize: "4rem" }}>Mes skills</h2>
                </div>
                <div className={`container d-flex justify-content-center ${gapConfig} mt-3`}>
                    <div className="">
                        <h3 className="text-center">Front-end</h3>
                        <ul className="center p-0" style={{ listStyle: "none" }}>
                            <li className="m-1"><i className="fa-brands fa-html5 fa-3x"></i></li>
                            <li className="m-1"><i className="fa-brands fa-css3-alt fa-3x"></i></li>
                            <li className="m-1"><i className="fa-brands fa-js fa-3x"></i></li>
                            <li className="m-1"><i className="fa-brands fa-react fa-3x"></i></li>

                        </ul>
                    </div>
                    <div>
                        <h3 className="text-center">Back-end</h3>
                        <ul className="center p-0" style={{ listStyle: "none" }}>
                            <li className="m-1"><img src="./src/firebase_icon.png" alt="logo FireBase" width="50" /></li>
                            <li className="m-1"><img src="./src/mangoDB_icon.png" alt="logo MangoDB" width="50" /></li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="text-center">Autres</h3>
                        <ul className="center p-0" style={{ listStyle: "none" }}>
                            <li className="m-1"><img src="./src/hostinger_icon.png" alt="logo Hostinger" width="50" /></li>
                            <li className="m-1"><i className="fa-brands fa-github fa-3x"></i></li>
                            <li className="m-1"><i className="fa-brands fa-wordpress fa-3x"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

class Projet_card extends React.Component {
    render() {
        const { title, subtitle, img, alt_img, link, text } = this.props
        return (
            <div className="text-dark border border-1 rounded-3" id="sectionHoverOn" style={{ width: "100%" }}>
                <div className="p-1">
                    <h3 className="text-center">{title}</h3>
                    <p className="text-center fs-6">{subtitle}</p>
                </div>
                <div className="container center">
                    <a href={link} target="_blank"><img className="img-fluid rounded img-zoom m-1"
                        src={img} alt={alt_img} width="600" /></a>
                </div>
                <div className="">
                    <p className="text-center fs-6">{text}</p>
                </div>
            </div>
        )
    }
}

class Projets extends React.Component {
    render() {
        return (
            <div>
                <div className="center m-0 p-0">
                    <h2 className="m-1" style={{ fontSize: "4rem" }}>Mes Projets</h2>
                </div>
                <div className="vstack center gap-5 mt-5 p-3">
                    <Projet_card title="Rev'Rie" subtitle="Institut de prothésie ongulaire" text="Site vitrine réalisé avec WordPress, projet avec accompagnement total (DA,
                        SEO...)" link="http://rev-rie.fr" img="./src/capture_revrie.png" alt_img="illustration du site Rev-rie.fr" />
                    <Projet_card title="Golf Flaine LCZ" subtitle="Le golf au coeur du 74" text="Site vitrine réalisé avec WordPress, projet avec accompagnement total (DA,
                        SEO...)" link="http://golf-flaine-lescarroz.fr" img="./src/capture_golf.png" alt_img="illustration du site du Golf de Flaine" />
                    <Projet_card title="DevInside" subtitle="Personnal Portfolio" text="Portefolio de mes projets avec double affichage, classique HTML/CSS/JS & Moderne en React"
                        link="https://d3vinsid3.github.io/Portefolio-DevInside/" img="./src/capture_devinside.png" alt_img="illustration du site DevInside" />
                </div>
            </div>
        );
    }
}

class Btn_contact extends React.Component {
    render() {
        const { classConfig, gapConfig } = this.props
        return (
            <div className={`d-flex justify-content-center ${gapConfig} m-3`}>
                <a href="https://linkedin.com/in/dufourd" target="_blank"><i className={`fa-brands fa-linkedin ${classConfig}`} id="iconHoverOn"></i></a>
                <a href="https://github.com/D3vInsid3" target="_blank"><i className={`fa-brands fa-github ${classConfig}`} id="iconHoverOn"></i></a>
                <a href="mailto:d.dufour@hotmail.fr?subject=Objet%20du%20message&body=Corps%20du%20message"
                    target="_blank"><i className={`fa-solid fa-envelope ${classConfig}`} id="iconHoverOn"></i></a>
            </div>
        );
    }
}

class Modal_contact extends React.Component {
    render() {
        const formbtnReact = document.querySelector('.btn_modal_react');

        function sendEmail(e) {
            e.preventDefault();

            const emailReact = document.querySelector('.emailReact');
            const msgReact = document.querySelector('.msgReact');
            const npReact = document.querySelector('.nomPrenomReact');
            const telReact = document.querySelector('.telReact');

            Email.send({
                SecureToken: "d9034171-f19e-4314-b6da-7b303c8fab00",
                To: 'd_dufour@hotmail.fr',
                From: 'tralloulol@gmail.com',
                Subject: "Nouvelle demande Portefolio",
                Body: ("Email : " + emailReact.value + " | " + "Nom & Prenom : " + npReact.value + " | " + "Message : " + msgReact.value + " | " + "Tel : " + telReact.value)
            }).then(
                document.querySelector('.btnCloseReact').click(),
            ).then(
                message => alert("Message envoyé"),
                error => console.error(error),
            );
        }

        if (formbtnReact !== null) {
            formbtnReact.addEventListener('click', sendEmail)
        }

        return (
            <div className="modal fade" id="staticBackdropReact" data-bs-backdrop="static" data-bs-keyboard="false"
                tabIndex="-1" aria-labelledby="staticBackdropReactLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content border border-white">
                        <div className="modal-header bg_card_bento">
                            <h1 className="modal-title fs-5" id="staticBackdropReactLabel">Faisons connaissance</h1>
                            <button type="button" className="btn-close btnCloseReact" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body bg-react">
                            <form className="contact_form" action="#">
                                <fieldset>
                                    <div className="mb-3">
                                        <label htmlFor="disabledTextInput" className="form-label">Nom & Prenom*</label>
                                        <input type="text" className="form-control bg-secondary nomPrenomReact" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="disabledTextInput" className="form-label">Email*</label>
                                        <input type="text" id="disabledTextInput"
                                            className="form-control bg-secondary emailReact" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="disabledTextInput" className="form-label">Telephone</label>
                                        <input type="tel" className="form-control bg-secondary telReact" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="disabledTextInput" className="form-label">Votre message*</label>
                                        <textarea className="form-control bg-secondary msgReact" type="text"
                                            required></textarea>
                                    </div>
                                </fieldset>
                                <p className="pt-3">* Required</p>
                            </form>
                        </div>
                        <div className="modal-footer bg_card_bento">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-secondary btn_modal_react" onClick={sendEmail}>Envoyer</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Contact extends React.Component {
    render() {
        return (
            <div className="center d-flex justify-content-around mt-1">
                <div className="center">
                    <h2 className="" >Contact</h2>
                </div>
                <div className="center">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#staticBackdropReact">
                        Me laisser un message
                    </button>
                </div>
                <Modal_contact />
            </div>
        );
    }
}

class MargeTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarHeight: document.querySelector("#navbar").offsetHeight,
        };
        this.handleResizeHeight = this.handleResizeHeight.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResizeHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResizeHeight);
    }

    handleResizeHeight() {
        this.setState({
            navBarHeight: document.querySelector("#navbar").offsetHeight,
        });
    }
    
    render() {
        const { navBarHeight } = this.state;        
        return (
            <div id="topDivReact" className="mt-1" style={{ height: navBarHeight }}></div>
        );
    }
}

class Grid extends React.Component {
    render() {
        const { gridC, gridR, classConfig, children, hoverOn } = this.props
        return (
            <div id={hoverOn} className={`text-dark border border-2 bg_card_bento ${classConfig}`} style={{ gridColumn: gridC, gridRow: gridR }}>
                {children}
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
        };
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize() {
        this.setState({
            windowWidth: window.innerWidth,
        });
    }
    render() {
        const { windowWidth } = this.state;
        
        const xL = windowWidth >= 1200;

        const margeSection = windowWidth - 32

        let content = (<div></div>);

        if (xL) {
            content = (
                <div className="wrapper m-xl-3 m-xxl-5 p-0" style={{ maxWidth: "1500px" }}>
                    <Grid gridC="1/4" gridR="1/3" hoverOn="" classConfig='rounded-5 animate__animated animate__fadeInDown'>
                        <PresentationSimple />
                    </Grid>
                    <Grid gridC="4/7" gridR="" hoverOn="" classConfig='center rounded-5'>
                        <PresentationDevInside />
                    </Grid>
                    <Grid gridC="7/10" gridR="1/6" hoverOn="sectionHoverOn" classConfig='rounded-5'>
                        <Reconversion />
                    </Grid>
                    <Grid gridC="4/7" gridR="" hoverOn="" classConfig='center rounded-5'>
                        <Btn_contact classConfig='fa-2x' gapConfig='gap-5' />
                    </Grid>
                    <Grid gridC="1/7" gridR="3/8" hoverOn="" classConfig='rounded-5'>
                        <Projets />
                    </Grid>
                    <Grid gridC="7/10" gridR="6/8" hoverOn="" classConfig='rounded-5'>
                        <Skills gapConfig='gap-5' />
                    </Grid>
                    <Grid gridC="1/11" gridR="" hoverOn="" classConfig='rounded-5'>
                        <Contact />
                    </Grid>
                </div>
            );
        } else {
            content = (
                <div className="wrapper m-1 p-0" style={{ width: margeSection + "px" }}>
                    <Grid gridC="1/10" gridR="1/3" number="1" classConfig='rounded-5'>
                        <PresentationSimple />
                    </Grid>
                    <Grid gridC="1/5" gridR="" number="2" classConfig='center rounded-5'>
                        <Btn_contact classConfig='fa-2x' gapConfig='gap-3' />
                    </Grid>
                    <Grid gridC="5/10" gridR="" number="3" classConfig='rounded-5'>
                        <PresentationDevInside />
                    </Grid>
                    <Grid gridC="1/10" gridR="4/7" number="4" classConfig='rounded-5'>
                        <Reconversion />
                    </Grid>
                    <Grid gridC="1/10" gridR="" number="5" classConfig='rounded-5'>
                        <Skills gapConfig='gap-5' />
                    </Grid>
                    <Grid gridC="1/10" gridR="8/12" number="6" classConfig='rounded-5'>
                        <Projets />
                    </Grid>
                    <Grid gridC="1/10" gridR="" number="7" classConfig='rounded-5'>
                        <Contact />
                    </Grid>
                </div>
            );
        }
        return (
            <div className="mt-5 mb-5 center">                
                {content}
            </div >
        );
    }
}

// Rendu du composant React App dans l'élément avec l'ID "root"
ReactDOM.render(<App />, document.getElementById('root'));