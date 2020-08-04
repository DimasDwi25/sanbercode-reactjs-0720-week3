import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date : new Date()
        };
    }

    componentWillUnmount(){
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return(
            <>
                <h1>
                    Sekarang jam : {this.state.date.toLocaleTimeString()}
                </h1>
            </>
        )
    }

}

export default Clock;