import React from 'react'
import {
    Link
  } from 'react-router-dom'

class HomeView extends React.Component{
    render(){

        let ruleButtonToggle
        let questionOneButtonToggle
        let questionTwoButtonToggle
        let questionThreeButtonToggle

        if(this.props.rules){
            ruleButtonToggle = <div>
                                    <h2>Rules of The Game</h2>
                                    <button className="btn btn-outline-primary" onClick = {this.props.rulesToggle.bind(this)}>
                                        Hide Rules
                                    </button>
                                    <p>
                                        The rules are simple. There will be a number shown on screen and all you have to do is determine whether the number is a prime number or not. 
                                        Answer correctly and you get a point, answer incorrectly and lose a point!
                                    </p>
                                </div>
        } else {
            ruleButtonToggle = <div>
                                    <h2>Rules of The Game</h2>
                                    <button className="btn btn-outline-primary" onClick = {this.props.rulesToggle.bind(this)}>
                                        Show Rules
                                    </button>
                                </div>
        }

        if(this.props.questionOne){
            questionOneButtonToggle = <div>
                                    <h3>
                                        What is a Prime Number?
                                    </h3>

                                    <button className="btn btn-outline-primary" onClick = {this.props.questionOneToggle.bind(this)}>
                                        Hide Hint
                                    </button>

                                    <p>
                                        A prime number (or a prime) is a natural number greater than 1 that is not a product of two smaller natural numbers. 
                                        A natural number greater than 1 that is not prime is called a composite number. 
                                        For example, 5 is prime because the only ways of writing it as a product, 1 × 5 or 5 × 1, involve 5 itself. 
                                        However, 4 is composite because it is a product (2 × 2) in which both numbers are smaller than 4. 
                                        Primes are central in number theory because of the fundamental theorem of arithmetic: 
                                        every natural number greater than 1 is either a prime itself or can be factorized as a product of primes that is unique up to their order.

                                        -<a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Prime_number">Wikipedia</a>
                                    </p> 
                                </div>
        } else {
            questionOneButtonToggle =   <div>
                                            <h3>
                                                What is a Prime Number?
                                            </h3>

                                            <button className="btn btn-outline-primary" onClick = {this.props.questionOneToggle.bind(this)}>
                                                Show Hint
                                            </button>
                                        </div>
        }

        if(this.props.questionTwo){
            questionTwoButtonToggle =   <div>
                                            <h3>Why 1 is not a Prime Number?</h3>

                                            <button className="btn btn-outline-primary" onClick = {this.props.questionTwoToggle.bind(this)}>
                                                Hide Hint
                                            </button>
                                            <p>
                                                For a number to be called as a prime number, it must have only two positive factors. 
                                                Now, for 1, the number of positive divisors or factors is only one i.e. 1 itself. 
                                                So, number one is not a prime number.

                                                -<a target="_blank" rel="noreferrer" href="https://byjus.com/maths/is-1-a-prime-number/">BYJU'S</a>
                                            </p>
                                        </div>
        } else {
            questionTwoButtonToggle =   <div>
                                            <h3>Why 1 is not a Prime Number?</h3>

                                            <button className="btn btn-outline-primary" onClick = {this.props.questionTwoToggle.bind(this)}>
                                                Show Hint
                                            </button>
                                        </div>
        }

        if(this.props.questionThree){
            questionThreeButtonToggle = <div>
                                            <h3>Why 2 is a Prime Number?</h3>

                                            <button className="btn btn-outline-primary" onClick = {this.props.questionThreeToggle.bind(this)}>
                                                Hide Hint
                                            </button>

                                            <p>
                                                Since the definition of a prime number is that it must have only two positive factors, the number 2 fits that definition. 
                                                For 2, the number of positive divisors or factors is 1 and itself, which is 2. Therefore, 2 is a prime number.
                                            </p>
                                        </div>
        } else{
            questionThreeButtonToggle = <div>
                                            <h3>Why 2 is a Prime Number?</h3>

                                            <button className="btn btn-outline-primary" onClick = {this.props.questionThreeToggle.bind(this)}>
                                                Show Hint
                                            </button>
                                        </div>
        }
        return(
            <div className="homePage">
                <h1>Prime Time Gaming!</h1>
                <div className="main-centering">
                    {ruleButtonToggle}
                    {questionOneButtonToggle}
                    {questionTwoButtonToggle}
                    {questionThreeButtonToggle}
                    <br />
                    <button className="btn btn-outline-warning"><Link to="/PrimeGame">Let's Play!</Link></button>
                </div>
            </div>
        )
    }
}

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            rules: false,
            questionOne: false,
            questionTwo: false,
            questionThree: false
        }
    }

    rulesToggle(){
        if(this.state.rules){
            this.setState({
                rules: false
            })
        }

        else{
            this.setState({
                rules: true
            })
        }
    }

    questionOneToggle(){
        if(this.state.questionOne){
            this.setState({
                questionOne: false
            })
        }

        else{
            this.setState({
                questionOne: true
            })
        }
    }

    questionTwoToggle(){
        if(this.state.questionTwo){
            this.setState({
                questionTwo: false
            })
        }

        else{
            this.setState({
                questionTwo: true
            })
        }
    }

    questionThreeToggle(){
        if(this.state.questionThree){
            this.setState({
                questionThree: false
            })
        }

        else{
            this.setState({
                questionThree: true
            })
        }
    }

    render(){
        return(
            <HomeView   rules = {this.state.rules}
                        rulesToggle = {this.rulesToggle.bind(this)}
                        questionOne = {this.state.questionOne}
                        questionOneToggle = {this.questionOneToggle.bind(this)}
                        questionTwo = {this.state.questionTwo}
                        questionTwoToggle = {this.questionTwoToggle.bind(this)}
                        questionThree = {this.state.questionThree}
                        questionThreeToggle = {this.questionThreeToggle.bind(this)}
                        />
        )
    }
}

export default Home;