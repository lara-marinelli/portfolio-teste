import React, { Component } from 'react';

function FormatedDate(props){
    return <h2 style={{color:'#FFFF'}}>It is {props.date.toLocaleTimeString()}.</h2>
}


export default class Clock extends Component{

    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        var estilos = {
			fontSize: 50,
			color: '#FFFF !important',
            float: 'right',
            zindex:1

		}
        return (
            <div style={{
                fontSize: 50,
                color: '#FFFF !important',
                float: 'right',
                zindex:1
    
            }}>
                <FormatedDate date={this.state.date}/>
            </div>
        )
    }
}