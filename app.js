class Presentation extends React.Component {
    render() {
        return (
            <div className="bg-success text-white">
                <div className="d-flex justify-content-center m-5 gap-5">
                    <div className="rounded img-container">
                        <img className="rounded img-fluid" src="./src/Photo_1.jpg" alt="photo David" width="150" />
                    </div>
                    <div>
                        <img className="img-fluid" src="./src/logo2.png" alt="Logo DevInside" width="150" />
                    </div>
                </div>

                <div className="center">
                    <h1>DUFOUR David</h1>
                    <h1>alias</h1>
                    <h1>DEVINDSIDE</h1>
                    <h2>Votre vision, mon expertise.</h2>
                </div>


                <p className="p-5 mb-0 text-center">Dans le monde de l'industrie pendant plus de 15 ans j'ai suivi le choix
                    du <strong>coeur</strong> en me lançant dans une <strong>reconversion</strong> en tant que
                    développeur web. Aujourdh'ui mon engagement est de vous <strong>accompagner</strong> dans vos projets digitaux.
                    Mais pas seulement... n'hesitez plus et contactez-moi.
                </p>
            </div>
        );
    }
}

class Reconversion extends React.Component {
    render() {
        return (
            <div className="bg-success text-white">
                <div className="container center specific-font m-0 p-0">
                    <h2 className="secondary-color m-1">Ma reconversion</h2>
                </div>
                <a href="https://oclock.io/" target="_blank"><img src="./src/logo_oclock.png" alt="logo O'clock"
                    className="img-fluid mx-auto d-block m-5" width="150" /></a>
                <div class="container m-3">
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
                            type="button" class="btn btn-primary">En savoir plus</button></a>
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
            <div className="bg-success text-white">
                <div className="container center specific-font m-0 p-0">
                    <h2 className="secondary-color m-1">Mes skills</h2>
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

class Projets extends React.Component {
    render() {
        return (
            <div className="bg-success text-white">
                <div className="container center specific-font m-0 p-0">
                    <h2 className="secondary-color m-1">Mes projets</h2>
                </div>
                <div className="container d-flex gap-5 mt-5">
                    <div>
                        <h3 className="text-center">Rev'Rie</h3>
                        <p className="text-center fs-6">Institut de prothésie ongulaire</p>
                        <a href="http://rev-rie.fr" target="_blank"><img className="img-fluid rounded img-zoom"
                                src="./src/capture_revrie.png" alt="illustration du site Rev-rie.fr" width="600"/></a>
                        <p className="mt-3">Site vitrine réalisé avec WordPress, projet avec accompagnement total (DA,
                            SEO...)
                        </p>
                    </div>
                    <div>
                        <h3 className="text-center">Golf Flaine LCZ</h3>
                        <p className="text-center fs-6">Le golf au coeur de la Haute-Savoie</p>
                        <a href="http://golf-flaine-lescarroz.fr" target="_blank"><img
                                className="img-fluid rounded img-zoom" src="./src/capture_golf.png"
                                alt="illustration du site du Golf de Flaine" width="600"/></a>
                        <p className="mt-3">Site vitrine réalisé avec WordPress, projet avec accompagnement total (DA,
                            SEO...)
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

class Contact extends React.Component {
    render() {
        return (
            <div className="bg-success text-white">
                <div className="container center specific-font m-0 p-0">
                    <h2 className="secondary-color m-1">Contact</h2>
                </div>                
                <div className="center m-5">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">
                        Me laisser un message
                    </button>
                </div>
                <p className="center">Ou contactez moi directement sur mes reseaux sociaux.</p>
                <div className="d-flex justify-content-center gap-5 m-5">
                    <a href="https://linkedin.com/in/dufourd" target="_blank"><button type="button"
                            className="btn btn-primary"><i className="bi bi-linkedin m-2"></i>Linkedin</button></a>
                    <a href="https://github.com/D3vInsid3" target="_blank"><button type="button"
                            className="btn btn-primary"><i className="bi bi-github m-2"></i>Github</button> </a>
                    <a href="mailto:d.dufour@hotmail.fr?subject=Objet%20du%20message&body=Corps%20du%20message"
                        target="_blank"><button type="button" className="btn btn-primary"><i
                                className="bi bi-envelope m-2"></i>d.dufour@hotmail.fr</button> </a>
                </div>                
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