import React from 'react';
import './login.css';
import { NavLink } from 'react-router-dom';
import { AuthState } from './authState';


export function Login(props) {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [schoolName,setSchoolName] = React.useState('Hogwarts')
  const [messages, setMessages] = React.useState([])

  webSocket = new GameEventNotifier();

  const chatEls = messages.map((message, index) => (
    <div key = {index}>
      <span className = "chatmessage">{message.name} just enrolled at {message.school}</span>
    </div>
  ))
  
  async function loginUser() {
    const response = await fetch(`/api/auth/login`, {
      method: 'post',
      body: JSON.stringify( {username: userName, password: password}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName',userName);
      setSchoolName(localStorage.getItem(userName));
      localStorage.setItem('schoolName',schoolName)
      props.onAuthChange(userName,AuthState.Authenticated,schoolName)
      webSocket.broadcastEvent(userName,schoolName)
    } else {
      const body = await response.json();
      alert("Incorrect username or password")
    }
  }


  class GameEventNotifier {
    events = [];
    handlers = [];

    constructor() {
      let port = window.location.port;
      const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
      this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
      // this.socket.onopen = (event) => {
      //   this.receiveEvent(new EventMessage('Simon', GameEvent.System, { msg: 'connected' }));
      // };
      this.socket.onclose = (event) => {
        this.receiveEvent(new EventMessage('Simon', GameEvent.System, { msg: 'disconnected' }));
      };
      this.socket.onmessage = async (msg) => {
        try {
          const event = JSON.parse(await msg.data.text());
          this.receiveEvent(event);
        } catch {}
      };
    }

    broadcastEvent(name,school) {
      const event = {'name':name, 'school': school}
      this.socket.send(JSON.stringify(event));
    }

    // addHandler(handler) {
    //   this.handlers.push(handler);
    // }

    // removeHandler(handler) {
    //   this.handlers.filter((h) => h !== handler);
    // }

    receiveEvent(event) {
      this.events.push(event);

      setMessages(this.events)
      };
    }

const GameNotifier = new GameEventNotifier();

  return (
    <main className="body container-fluid text-center">
        <div>
          <h1>Login</h1>
          <form method="get">
            <div class="input-group mb-3">
              <input class="form-control" type="text" value = {userName} onChange = {(e) => setUserName(e.target.value)} placeholder="Username" />
            </div>
            <div class="input-group mb-3">
              <input class="form-control" type="password" 
              onChange = {(e) => setPassword(e.target.value)} 
              placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-primary" 
            onClick={() => loginUser()}
            disabled={!userName || !password}>
              <NavLink className = "nav-link" to = "/" >
              Login
              </NavLink>
            </button>
          </form>
          <div class = "mt-4">
              <button type="submit" class="btn btn-dark">
                <NavLink className = "nav-link" to = "/create_account">
                New student? Create an account
                </NavLink>
              </button>
          </div>
        </div>
        <div>{chatEls}</div>
      </main>
  );
}