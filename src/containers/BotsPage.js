import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
// import BotSpecs from '../components/BotSpecs'



class BotsPage extends Component {
  //start here with your code for step one
  constructor(props) {
    super(props)
  
    this.state = {
       bots: [],
       myArmy: [],
      //  currentBot: []
    }
  }

  componentDidMount() {
   this.fetchBots()
    
  }
  fetchBots = () => {
  fetch('http://localhost:6001/bots')
  .then(res => res.json())
  .then(data => this.setState({bots:data}))}


  addToArmy = (bot) => {
    this.setState({
      myArmy: [...this.state.myArmy, bot]
    })
  }
  removeBot = (botId) => {
    fetch(`http://localhost:6001/bots/${botId}`,{
      method: "DELETE"
    }).then(res => res.json())
      .then(data => this.fetchBots())
      
  }
  

  

  render() {
    return <div>{/* put your components here */ }
    <BotCollection bots={this.state.bots} addToArmy={this.addToArmy} fetchBots={this.fetchBots} removeBot={this.removeBot}/>
    <YourBotArmy bots={this.state.myArmy} removeBot={this.removeBot}/>
    </div>
   ;
  }
}

export default BotsPage;
