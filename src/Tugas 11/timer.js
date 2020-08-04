import React from 'react';

class Timer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      time: 100
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
    });
  }

  render(){
    return(
      <>
        {this.state.time > 1 &&
          <h1>
            Hitung mundur: {this.state.time}
          </h1>
        }   
      </>
    )
  }
}

export default Timer;