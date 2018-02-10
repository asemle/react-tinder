import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-card'

import './App.css';
import data from "./characters.js"


let swiped = () => console.log("swiped");
let done = () => console.log("done")
const Wrapper = () => {
  return (
    <Cards onEnd={done} className9='master-root'>
      {data.map((item) =>
        <Card key={item.id} onSwipeLeft={swiped} onSwipeRight={swiped}>
        <div className="picWrap">
            <img className="proPic" src={item.pictures[0]} alt="" />
            <div className="overlay">

              <h4>{`${item.name}, `}<strong>{item.age}</strong></h4>
            </div>
        </div>
          
        </Card>
      )}
    </Cards>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        {Wrapper()}
      </div>
    );
  }
}

export default App;
