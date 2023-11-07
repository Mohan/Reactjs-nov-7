import React from 'react'

class State extends React.Component{

    state={
        msg:"hello"
    }
    change=()=>{
        this.setState({msg:"gm"})
    }

    render(){
        return <>
            <h1>{JSON.stringify(this.state)}</h1>
            <button onClick={this.change}>gm</button>

        </>
    }
}
export default State