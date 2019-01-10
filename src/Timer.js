import React, { Component } from 'react'
import Display from './Display'

class Timer extends Component {
    constructor(){
        super()

        this.state={
            seconds: 0,
            time: 1000,
            status: null
        }

        this.startTimer = this.startTimer.bind(this)
        this.onSecondsChange = this.onSecondsChange.bind(this)
    }

    componentDidMount(){
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.t);
    }

    onSecondsChange(secs){
        console.log('ran')
        this.setState(e => ({time : secs}))
    }

    startTimer(){
            this.t = setInterval(() => {
                if (this.state.time > 0) {
                    this.setState(prevState => ({time : prevState.time - 10}));
                }

            }, 10)
    }


  render() {
    return (
      <div>
        <Display time={this.state.time} onSecondsChange={this.onSecondsChange}/>
      </div>
    )
  }
}

export default Timer;