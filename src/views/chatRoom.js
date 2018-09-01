import React, {Component} from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

export default class ChatRoom extends Component{
  constructor(props){
    super(props);
    this.state={
      message : [],
      stompClient : null,
      input: '',
      output: [],
    }
    this.inputOnChange = this.inputOnChange.bind(this);
  }

  connect = ()=>{
    const socket = new SockJS('/gs-guide-websocket');
    let stompClient = Stomp.over(socket);
    let updataMessage = (message) => {
      this.setState((prevState)=>{
        let output = [...prevState.output];
        output.push((JSON.parse(message.body).text));
        console.log(message);
        console.log(output);
        return {output};
      });
    }
    updataMessage = updataMessage.bind(this);
    stompClient.connect({}, function(frame){
      console.log('Connected: ' + frame);
      stompClient.subscribe('/topic/messageReceived', (message) => {
        console.log(message);
        updataMessage(message);
      });
    });
    this.setState({stompClient: stompClient});
  }



  disconnect = ()=>{
    if(this.state.stompClient !== null){
      this.state.stompClient.disconnect();
    }
  }

  inputOnChange = (event) => {
    this.setState({input: event.target.value});
  }

  sendMessage = (id, message)=>{
    this.state.stompClient.send("/app/topic/messageSent",{},
      JSON.stringify({messageId: id, text: message}));
  }

  componentDidMount(){
    this.connect();
  }

  componentWillUnMount(){
    this.disconnect();
  }

  render(){
    return(
      <div className={"display-panel"}>
        <input value={this.state.input} onChange={this.inputOnChange} />
        <button onClick={()=>{this.sendMessage("id", this.state.input)}}>send message</button>
        {this.state.output.map((message)=>{return (<div>{message}</div>)})}
      </div>
    )
  }
}
