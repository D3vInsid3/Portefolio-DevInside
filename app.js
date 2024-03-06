class Presentation extends React.Component {
    render() {
        return (
            <div className="bg-success text-white">
                <div class="d-flex align-items-center m-5 gap-5">
                    <div className="rounded img-container">
                        <img className="rounded img-fluid" src="./src/Photo_1.jpg" alt="photo David" width="150" />
                    </div>
                    <div>
                        <img className="img-fluid" src="./src/logo2.png" alt="Logo DevInside" width="150" />
                    </div>
                </div>

                <h1>DUFOUR David</h1>
                <h1>alias</h1>
                <h1>DEVINDSIDE</h1>
                <h2>Votre vision, mon expertise.</h2>

                <p className="p-5 text-center">Dans le monde de l'industrie pendant plus de 15 ans j'ai suivi le choix
                    du <strong>coeur</strong> en me lançant dans une <strong>reconversion</strong> en tant que
                    développeur web. Aujourdh'ui mon engagement est de vous <strong>accompagner</strong> dans vos projets digitaux.
                    Mais pas seulement... n'hesitez plus et contactez-moi.
                </p>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="container react-font">
                <Presentation />
            </div>
        );
    }
}

// Rendu du composant React App dans l'élément avec l'ID "root"
ReactDOM.render(<App />, document.getElementById('root'));