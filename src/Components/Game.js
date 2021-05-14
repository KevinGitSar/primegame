
import React from 'react'
import Timer from './Timer'

class GameOver extends React.Component{
    render(){
        return(
            <div className="main-centering">
                <h1>
                    Prime Time Gaming!
                </h1>

                <br />
                <br />
                <label>Final Score: {this.props.pointsCounter}</label>

                <br />
                <div className="btn-game-play">
                    <button className = "btn btn-outline-success" onClick = {this.props.playAgain.bind(this)}>Play Again!</button>
                    <button className = "btn btn-outline-warning" onClick = {this.props.selectLevel.bind(this)}>Re-Select Level</button>
                </div>
            </div>
        )
    }
}

class GamePlay extends React.Component{
    render(){
        return(
            <div>
                <h3>Is the number shown below a prime?</h3>
                <label className="primeNumbers">{this.props.randomNumber}</label>
                <br />

                <div className="btn-game-play">
                <button className="btn btn-outline-danger" onClick = {this.props.notPrimeFunction.bind(this)}>Not Prime</button>
                <button className="btn btn-outline-success" onClick = {this.props.primeFunction.bind(this)}>Prime Number</button>
                </div>

                <br />
                <label>Current Total Score: {this.props.pointsCounter}</label>
            </div>
            )
    }
}

class GameSettings extends React.Component{
    render(){
        return(
            <div className="homePage">
                <h1>
                    Prime Time Gaming!
                </h1>
                <div className="main-centering">
                    <h3>Select A Level:</h3>
                    <button className="btn btn-outline-secondary" onClick = {this.props.levelOneFunction.bind(this)}>Level 1</button>
                    <button className="btn btn-outline-primary" onClick = {this.props.levelTwoFunction.bind(this)}>Level 2</button>
                    <button className="btn btn-outline-danger" onClick = {this.props.levelThreeFunction.bind(this)}>Level 3</button>

                    <br />
                    <h3>Current Settings:</h3>
                    <h4>Numbers Range Between 1 and {this.props.range}</h4>
                    <h4>And a time of {this.props.time} seconds</h4>
                    <button className="btn btn-outline-warning" onClick = {this.props.gameStart.bind(this)}>Play!</button>
                </div>
            </div>
            )
    }
}

class MainView extends React.Component{

    render(){
        let GameView
        if(this.props.play && !this.props.gameOver){
            GameView = 
            <div> 
                <h1>
                    Prime Time Gaming!
                </h1>
                <div className="main-centering">
                    <Timer      secondsElapsed = {this.props.time}
                                timerStart = {this.props.timerStart}
                                timerBooleanChange = {this.props.timerBooleanChange.bind(this)}
                    />
                    <GamePlay   primeFunction = {this.props.primeFunction.bind(this)}
                                keyUpPrimeFunction = {this.props.keyUpPrimeFunction}
                                notPrimeFunction = {this.props.notPrimeFunction.bind(this)}
                                randomNumber = {this.props.randomNumber}
                                pointsCounter = {this.props.pointsCounter}
                    />
                </div>
            </div>
        }
        else if(!this.props.play && !this.props.gameOver){
            GameView = <GameSettings    levelOneFunction = {this.props.levelOneFunction.bind(this)}
                                        levelTwoFunction = {this.props.levelTwoFunction.bind(this)}
                                        levelThreeFunction = {this.props.levelThreeFunction.bind(this)}
                                        gameStart = {this.props.gameStart.bind(this)}
                                        range = {this.props.range}
                                        time = {this.props.time}
                                        />
        }

        else if(!this.props.play && this.props.gameOver){
            GameView = <GameOver    pointsCounter = {this.props.pointsCounter}
                                    playAgain = {this.props.playAgain.bind(this)}
                                    selectLevel = {this.props.selectLevel.bind(this)}
            />
        }

        return(
            <div>
                {GameView}
            </div>
        )
    }
}

class Game extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            play: false,
            gameOver: false,
            randomNumber: Math.floor(Math.random() * 10) + 1,
            pointsCounter: 0,
            range: 10,
            time: 10,
            timerStart: false,
        }
    }

    isPrime(){
        if(this.state.randomNumber === 1){
            return false;
        }
        for(var i = 2; i < this.state.randomNumber; i++){
            if(this.state.randomNumber % i === 0){
                return false;
            }
        }
        return true;
    }

    primeFunction(){
        if(this.isPrime()){
            this.setState({
                pointsCounter: this.state.pointsCounter + 1,
                randomNumber: Math.floor(Math.random() * this.state.range) + 1 
            })
        }
        else{
            if(this.state.pointsCounter > 0){
                this.setState({
                    pointsCounter: this.state.pointsCounter - 1,
                    randomNumber: Math.floor(Math.random() * this.state.range) + 1
                })
            }
            else{
                this.setState({
                    randomNumber: Math.floor(Math.random() * this.state.range) + 1
                })
            }
        }
    }

    notPrimeFunction(){
        if(!this.isPrime()){
            this.setState({
                pointsCounter: this.state.pointsCounter + 1,
                randomNumber: Math.floor(Math.random() * this.state.range) + 1 
            })
        }
        else{
            if(this.state.pointsCounter > 0){
                this.setState({
                    pointsCounter: this.state.pointsCounter - 1,
                    randomNumber: Math.floor(Math.random() * this.state.range) + 1
                })
            }
            else{
                this.setState({
                    randomNumber: Math.floor(Math.random() * this.state.range) + 1
                })
            }
        }
    }

    timerBooleanChange(){
        this.setState({
            play: false,
            gameOver: true
        })
    }

    playAgain(){
        this.setState({
            play: true,
            gameOver: false,
            pointsCounter: 0,
            randomNumber: Math.floor(Math.random() * this.state.range) + 1
        })
    }

    selectLevel(){
        this.setState({
            play: false,
            gameOver: false,
            pointsCounter: 0
        })
    }

    gameStart(){
        this.setState({
            randomNumber: Math.floor(Math.random() * this.state.range) + 1,
            play: true
        })
    }

    levelOneFunction(){
        this.setState({
            pointsCounter: 0,
            range: 10,
            time: 10
        })
    }

    levelTwoFunction(){
        this.setState({
            pointsCounter: 0,
            range: 100,
            time: 60
        })
    }

    levelThreeFunction(){
        this.setState({
            pointsCounter: 0,
            range: 1000,
            time: 180
        })
    }

    render(){
        return(
            <div>
                <MainView   randomNumber = {this.state.randomNumber}
                            pointsCounter = {this.state.pointsCounter}
                            time = {this.state.time}
                            range = {this.state.range}
                            play = {this.state.play}
                            timerStart = {this.state.timerStart}
                            gameOver = {this.state.gameOver}
                            primeFunction = {this.primeFunction.bind(this)}
                            notPrimeFunction = {this.notPrimeFunction.bind(this)}
                            levelOneFunction = {this.levelOneFunction.bind(this)}
                            levelTwoFunction = {this.levelTwoFunction.bind(this)}
                            levelThreeFunction = {this.levelThreeFunction.bind(this)}
                            gameStart = {this.gameStart.bind(this)}
                            timerBooleanChange = {this.timerBooleanChange.bind(this)}
                            playAgain = {this.playAgain.bind(this)}
                            selectLevel = {this.selectLevel.bind(this)}
                        />
            </div>
        )
    }

    
}

export default Game;