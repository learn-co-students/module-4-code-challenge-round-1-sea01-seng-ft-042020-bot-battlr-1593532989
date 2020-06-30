import React, { Component } from "react";
import BotCard from "../components/BotCard"
import BotSpecs from '../components/BotSpecs'

class BotCollection extends Component {
  //your code here

  constructor(props) {
    super(props)
  
    this.state = {
       currentBot: {}
    }
  }

  viewCurrentBot = bot => {
    this.setState({
      currentBot: bot
    })
  }
  
  clearCurrentBot = () => {
    this.setState({
      currentBot: {}
    })
  }
 
 

  renderBots = () => {
    if (!this.state.currentBot.id){
      return(
        <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {this.props.bots.map(bot => (
          <BotCard key={bot.id} bot={bot} bots={this.props.bots} viewBot={this.viewCurrentBot} removeBot={this.props.removeBot}/>
          ))}
      </div>
      )
    }else{
      return (<BotSpecs bot={this.state.currentBot} enlist={this.props.addToArmy} goBack={this.clearCurrentBot} addToArmy={this.props.addToArmy}/>)
    }
    
  }

  render() {
   
    return (
      <div className="ui four column grid"> {this.renderBots()}
   
      </div>
    );
  }
}

export default BotCollection;
