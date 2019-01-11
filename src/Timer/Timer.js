import React, { Component } from 'react'
import Display from './Display'
import Controls from './Controls.js'

class Timer extends Component {
    constructor(){
        super()

        this.state={
            seconds: 0,
            time: 0,
            status: null
        }

        this.startTimer = this.startTimer.bind(this)
        this.onSecondsChange = this.onSecondsChange.bind(this)
    }

    componentWillUnmount() {
        clearInterval(this.t);
    }

    onSecondsChange(secs){
        this.setState(e => ({time : secs}))
    }

    startTimer(){
                if (this.state.status !== 'started') {
                    this.t = setInterval(() => {
                        if (this.state.time !== 0){ 
                            this.setState(prevState => ({time : prevState.time - 10 }))
                        }else{
                            this.setState(() => ({seconds: 0, status: null, time:0}))

                            clearInterval(this.t)
                        }
                    }, 10)
        }

        this.setState(() => ({status: 'started'}))
    }


  render() {
    return (
      <div>
        <Display time={this.state.time} onSecondsChange={this.onSecondsChange}/>
        <Controls startTimer={this.startTimer}/>
      </div>
    )
  }
}

export default Timer;