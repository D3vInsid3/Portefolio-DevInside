class Presentation extends React.Component {
    render() {
        return (
            <div className="bg-react text-white">
                <div className="d-flex justify-content-center m-5 gap-5">
                    <div className="rounded img-container">
                        <img className="rounded img-fluid" src="./src/Photo_1.jpg" alt="photo David" width="150" />
                    </div>
                    <div className="center">
                        <img className="img-fluid rounded-circle border-circle-2" src="./src/logo2.png" alt="Logo DevInside" width="150" />
                    </div>
                    <div className="center">
                        <h1 className="fw-bold" style={{ fontSize: "4rem" }}>DUFOUR David</h1>
                        <h2>alias</h2>
                        <h2>DEVINDSIDE</h2>
                        <h2>Votre vision, mon expertise.</h2>
                    </div>
                </div>
                <p className="p-3 mb-0 text-center fs-3">Dans le monde de l'industrie pendant plus de 15 ans j'ai suivi le choix
                    du <strong>coeur</strong> en me lançant dans une <strong>reconversion</strong> en tant que
                    développeur web. Aujourdh'ui mon engagement est de vous <strong>accompagner</strong> dans vos projets digitaux.
                    <br></br>Mais pas seulement... n'hesitez plus et contactez-moi.
                </p>
                <Btn_contact />
            </div>
        );
    }
}

class Reconversion extends React.Component {
    render() {
        return (
            <div className="bg-react text-white">
                <div className="bg-react container center specific-font m-0 p-0">
                    <h2 className="secondary-color m-1" style={{ fontSize: "4rem" }}>Ma reconversion</h2>
                </div>
                <a href="https://oclock.io/" target="_blank"><img src="./src/logo_oclock.png" alt="logo O'clock"
                    className="img-fluid mx-auto d-block m-5" width="150" /></a>
                <div className="container m-3">
                    <h2 className="text-center">Formation de concepteur développeur d'application</h2>
                    <p className="text-center m-0">10 mois dont 2 en stage</p>
                    <p className="text-center m-0">RNCP niveau 6 obtenu en Décembre 2024</p>
                </div>
                <div className="text-center mb-3">----</div>
                <div className="container">
                    <h3 className="text-center">En quelques mots</h3>
                    <div className="d-flex gap-5 m-5 justify-content-md-center">
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
        return (
            <div className="bg-react text-white">
                <div className="container bg-react center specific-font m-0 p-0">
                    <h2 className="secondary-color m-1" style={{ fontSize: "4rem" }}>Mes skills</h2>
                </div>
                <div className="container d-flex justify-content-center gap-5 mt-5">
                    <div>
                        <h3 className="text-center">Front-end</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-center">Back-end</h3>
                        <ul>
                            <li>Firebase</li>
                            <li>MangoDB</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-center">Autres</h3>
                        <ul>
                            <li>Hostinger</li>
                            <li>Github</li>
                            <li>Wordpress</li>
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
            <div className="card text-light border border-5" style={{ width: "18rem", backgroundColor: "#121746" }}>
                <div className="card-body p-1">
                    <h3 className="text-center">{title}</h3>
                    <p className="text-center fs-6">{subtitle}</p>
                </div>
                <div className="container">
                    <a href={link} target="_blank"><img className="img-fluid rounded img-zoom m-1"
                        src={img} alt={alt_img} width="600" /></a>
                </div>
                <div className="card-body">
                    <p className="card-text text-center fs-6">{text}</p>
                </div>
            </div>
        )
    }
}

class Projets extends React.Component {
    render() {
        return (
            <div className="bg-react text-white">
                <div className="container bg-react center specific-font m-0 p-0">
                    <h2 className="secondary-color m-1" style={{ fontSize: "4rem" }}>Mes Projets</h2>
                </div>
                <div className="container d-flex gap-5 mt-5">
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
        return (
            <div className="d-flex justify-content-center gap-5 m-5">
                <a href="https://linkedin.com/in/dufourd" target="_blank"><button type="button"
                    className="btn btn-primary"><i className="bi bi-linkedin m-2"></i>Linkedin</button></a>
                <a href="https://github.com/D3vInsid3" target="_blank"><button type="button"
                    className="btn btn-primary"><i className="bi bi-github m-2"></i>Github</button> </a>
                <a href="mailto:d.dufour@hotmail.fr?subject=Objet%20du%20message&body=Corps%20du%20message"
                    target="_blank"><button type="button" className="btn btn-primary"><i
                        className="bi bi-envelope m-2"></i>d.dufour@hotmail.fr</button> </a>
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
                        <div className="modal-header bg-primary">
                            <h1 className="modal-title fs-5" id="staticBackdropReactLabel">Faisons connaissance</h1>
                            <button type="button" className="btn-close btnCloseReact" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body bg-black">
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
                        <div className="modal-footer bg-primary">
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
            <div className="bg-react text-white">
                <div className="container bg-react center specific-font m-0 p-0">
                    <h2 className="secondary-color m-1" style={{ fontSize: "4rem" }}>Contact</h2>
                </div>
                <div className="center m-5">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#staticBackdropReact">
                        Me laisser un message
                    </button>
                </div>
                <p className="center">Ou contactez moi directement sur mes reseaux sociaux.</p>
                <Btn_contact />
                <Modal_contact />
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="container react-font">
                <Presentation />
                <Reconversion />
                <Skills />
                <Projets />
                <Contact />
            </div>
        );
    }
}

// Rendu du composant React App dans l'élément avec l'ID "root"
ReactDOM.render(<App />, document.getElementById('root'));