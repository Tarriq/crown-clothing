import React from 'react'
import ReactDOM from 'react-dom/client'
import './myCube.css'

class Dice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      compteur: null,
      message: null,
      disabled: false,
      hidden: true,
    }
    this.cube = {
      rotateX: 0,
      rotateY: 0
    }
    this.animation = {
      x: 720,
      y: 360
    }
    this.values = [
      [0, 0],
      [0, 90],
      [-90, 0],
      [90, 0],
      [0, -90],
      [0, 180]
    ]

  }

  jouer() {
    this.setState({ compteur: this.state.compteur + 1 })
    let tmp = -this.animation.x
    this.animation.x = -this.animation.y
    this.animation.y = tmp

    const valeur = Math.floor(Math.random() * 6) + 1
    let [x, y] = this.values[valeur - 1]

    this.cube = {
      rotateX: x + (this.animation.x),
      rotateY: y + (this.animation.y)
    }
    if (valeur === this.props.cache) {
      this.setState({ disabled: true })
      setTimeout(() => {
        this.setState({
          message: "Bravo, tu l'a trouvé",
          hidden: false
        })
      }, 4000);
    }
  }

  reinit() {
    this.setState({
      message: null,
      hidden: true,
      disabled: false,
      compteur: null,
    })
  }

  render() {
    return (
      <div>
        <div className='logo'>
          <img src="pics/dice.jpg" className="logo-pic" />
          <h1>Jeux de dé</h1><br />
        </div>
        <h3>essayez jusqu'à ce que vous trouviez le numéro {this.props.cache}</h3>
        <h2>
          Face:
          <div className="box" style={{ transform: ` rotateX(${this.cube.rotateX}deg) rotateY(${this.cube.rotateY}deg)` }}>
            <div className="box_face back"><img src="pics/1.jpg" /></div>
            <div className="box_face front"><img src="pics/6.jpg" /></div>
            <div className="box_face left"><img src="pics/2.jpg" /></div>
            <div className="box_face right"><img src="pics/5.jpg" /></div>
            <div className="box_face top"><img src="pics/3.jpg" /></div>
            <div className="box_face bottom"><img src="pics/4.jpg" /></div>
          </div>
        </h2>
        <br />
        <h2>Nombre d'essais: {this.state.compteur}</h2>
        <input type="button" value="Jouer"
          onClick={() => this.jouer()} disabled={this.state.disabled} />
        <h3>{this.state.message}</h3>
        <input type="button" value="Rejouer" hidden={this.state.hidden}
          onClick={() => this.reinit()} /><br />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Dice cache={3} />
)
