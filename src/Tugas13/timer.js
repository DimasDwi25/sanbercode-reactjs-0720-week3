import React from 'react';

class Timer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      time: 100,
      date: new Date()
    }
  }

  componentDidMount(){
    if (this.props.start <= 100){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
      date: new Date() 
    });
  }

  render(){
    return(
      <>
        {this.state.time > 1 &&
        <>
          <h1 style={{float:'left',marginLeft:'50px'}}>
            Sekarang jam: {this.state.date.toLocaleTimeString()}
          </h1>
          <h2 style={{float:'right',marginRight:'50px'}}>
            Hitung mundur: {this.state.time}
          </h2>
        </>  
        }   
      </>
    )
  }
}

export default Timer;