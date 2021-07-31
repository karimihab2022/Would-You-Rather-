import React from "react";
import { connect } from "react-redux";


const User=(props)=>{

    return(
        <div>
                {console.log(props)}
                <h1>{props.id}</h1>
                <h2>score {Object.keys(props.users[props.id].answers).length+props.users[props.id].questions.length}</h2>
                <h2>answered {Object.keys(props.users[props.id].answers).length} question</h2>
                <h2> created {props.users[props.id].questions.length} question</h2>

        </div>
    )
}

function mapStateToProps({users},{id}) {
    
    return {
        users,
        id
    }
}
export default connect(mapStateToProps)(User);