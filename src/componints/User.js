import React from "react";
import { connect } from "react-redux";


const User=(props)=>{
    const{users,id}=props;

    return(
        <div className="user">

            <div className="userinfo">
                <img src={users[id].avatarURL} className="avatar"/>
            </div>

           <div className="userd">
                <h1>{users[id].name}</h1>
                <h4> answered {Object.keys(users[id].answers).length} questions </h4>
                <h4> created {users[id].questions.length} questions </h4>
           </div>

            <div className="users">
                <h1>Score </h1>
                 <div className="userss">
                     <h2>{Object.keys(users[id].answers).length+users[id].questions.length}</h2>
                 </div>
           
            </div>
               
               

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