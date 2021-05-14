import React from 'react'

class StopWatchPresentation extends React.Component{
    render(){
        return(
            <div>
                <h1>{`${this.props.getMinutes()} : ${this.props.getSeconds()}`}</h1>
            </div>
        )
    }
}

class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            secondsElapsed: this.props.secondsElapsed,
            preventUserStartIntervalTooMuch: this.props.timerStart
        }
    }

    getSeconds(){
        return('0' + this.state.secondsElapsed % 60).slice(-2)
    }

    getMinutes(){
        return(Math.floor(this.state.secondsElapsed / 60))
    }

    componentDidMount(){
        let _this = this;
        this.incrementer = setInterval(function(){
            if(_this.state.secondsElapsed === 0){
                clearInterval(_this.incrementer)
                _this.setState({
                    secondsElapsed: _this.props.secondsElapsed,
                    preventUserStartIntervalTooMuch: false

                })
                _this.props.timerBooleanChange()
                
            }
            else{
            _this.setState({
                secondsElapsed: (_this.state.secondsElapsed - 1)
            })}
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.incrementer)
    }

    render(){
        return(
            <StopWatchPresentation 
            getMinutes ={this.getMinutes.bind(this)}
            getSeconds ={this.getSeconds.bind(this)}/>
        )
    }
}

export default Timer;