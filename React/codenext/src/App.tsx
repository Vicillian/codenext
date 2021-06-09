import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Landing} from './Landing';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/banana">
          <div className="Test">
          Well Howdy Do
          </div>
          <body>
          <div className="Leftnright">
            <div className="lefty">
              <img className="pictur" src="ClassyZoidberg.jpg"></img>
            </div>
            <div className="righty">
            <h2>
              Who is Zoidberg?
            </h2>
            <p>Zoidberg is a very special crab man. He's a doctor who fixes your limbs and in case you can't pay him he'll take your limbs as payment.</p>
          <a className="fish" href="https://www.google.com/search?q=zoidberg+eating+fish&rlz=1CABJUN_enUS811&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj25tbqi_bfAhVtCTQIHQ7vCu4Q_AUIDigB&biw=1517&bih=751&dpr=0.9&safe=active&ssui=on#imgrc=Vply3uq7WeGWHM:"><button>Donate $1 so Zoidberg can feed himself</button></a>
          </div>
        </div>
        <Link to="/Landing">Back Page</Link>
        </body>
        </Route>
        <Route path="/">
          <Landing></Landing>
          <Link to="/banana">Next Page</Link>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

// interface MayoManProps{ numberOfEyes: number; }
// interface MayoManState{}


// class MayoMan extends React.Component<MayoManProps, MayoManState>{
//   addTheLike(){
  
//   }
//   render(){
//     return(
//       <div>
//         <p>
//           My name is MayoMan, I have {this.props.numberOfEyes} eyes and 
//         </p>
//       </div>
//     )
//   }
// }

