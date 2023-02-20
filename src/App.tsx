import React, { FormEvent, useState } from 'react';
import { Auth } from 'aws-amplify';

import './config/auth-aws';
import './App.css'

function App() {
  const [email, setEmail] = useState('tomethiago@thiagotome10hotmail.onmicrosoft.com');

  async function login(event: FormEvent) {
    event.preventDefault();
    
    Auth.signIn(email)
      .then(user => {
        console.log('Usuário encontrado:', user);
      })
      .catch(err => {
        console.log('Não foi possível encontrar o usuário:', err);
      });
  }

  async function loginFederated(event: FormEvent) {
    event.preventDefault();
    
    Auth.federatedSignIn({
      customProvider: ''
    })
  }

  return (
    <div className="App">
      <div>
        <p>Login</p>

        <input 
          type="text" 
          defaultValue={email}
          placeholder="Digite o seu e-mail" 
          onChange={(event) => setEmail(event.target.value)}
        />

        <button onClick={login}>Entrar</button>

        <button onClick={loginFederated}>Office</button>
      </div>
    </div>
  );
}

export default App;