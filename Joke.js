import React from "react"

function Joke(props) {
    console.log(props)
    return (
        <div>
        <p>{props.joke.Question}</p>
            <p>{props.joke.punchline}</p>
        </div>
    )
}


export default Joke