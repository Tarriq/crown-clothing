import React, { useState } from "react";

import ReactDOM, { createRoot } from 'react-dom/client';


class MyNoms extends React.Component {
  constructor() {
    super()
    this.state = {
      clients: [
        {
          id: 1,
          nom: "CHAKIRI Ali"
        },
        {
          id: 2,
          nom: "OUAFI Fatima"
        },
        {
          id: 3,
          nom: "FATIHI Laila"
        }
      ],
      nomclient: '',
      id: 4
    };
  }
  supprimerclick = (id) => {
    const clients2 = [...this.state.clients]
    const index = clients2.findIndex(client => (client.id === id))
    clients2.splice(index, 1)
    this.setState({ clients: clients2 });
  };

  ajoutclick = (e) => {
    e.preventDefault();
    const clients2 = [...this.state.clients]
    clients2.push({ id: this.state.id, nom: this.state.nomclient })
    this.setState({ clients: clients2 });
    this.setState({ clients: clients2, nomclient: "", id: this.state.id + 1 });
    console.log(this.state.id);
  };
  render() {
    const listeClients = this.state.clients.map(client => (
      <tr key={client.id}>
        <td>{client.nom} </td>
        <td><button onClick={() => this.supprimerclick(client.id)}>sup</button></td>
      </tr>
    ))
    return (
      <div>
        <h1 >Liste des Clients</h1>
        <table align="center">
          <tbody>
            {listeClients}
          </tbody>
        </table>
        <form onSubmit={this.ajoutclick}>
          <input type="text"
            value={this.state.nomclient}
            onChange={(e) => { this.setState({ nomclient: e.target.value }) }}
          />
          <input type="submit" value="ajouter" />
        </form>
      </div>);
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyNoms />)

