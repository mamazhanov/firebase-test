import React from 'react';
import firebase from "firebase";

const LoginFunc = () => {

    const db = firebase.database();

    let localData =
            {
                login: '',
                userName: '',
                location: ''
            }



    let loginChange = ({target: {value}}) => {
        localData.login = value
    }
    let nameChange = ({target: {value}}) => {
        localData.userName = value
    }
    let locationChange = ({target: {value}}) => {
        localData.location = value
    }

    const add = () => {
        db.ref("users/"+localData.login).update(localData);
        console.log(localData)
        // var disorder = {undefined:{'description': '89897 deficit...'}};
        // db.ref('users').update(disorder);
    }

    return (
        <div>
            <div>
                <input type="text" placeholder={"Enter full name"} onChange={nameChange}/>
                <input type="text" placeholder={"Enter location"} onChange={locationChange}/>
                <input type="text" placeholder={"Enter login"} onChange={loginChange}/>
                <input type="submit" onClick={add}/>
            </div>
        </div>
    )
}

export default LoginFunc;