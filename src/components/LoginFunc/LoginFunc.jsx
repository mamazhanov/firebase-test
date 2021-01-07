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

    let zbsDB = () => {
        const value = db.ref("users");
        const items = [];
        value.on("value", data => {
            items.push(data.val());
        })
        items.forEach(alert)
        console.log(items);

    }



    const add = () => {

        db.ref("users/").push(localData)
        // var disorder = {undefined:{'description': '89897 deficit...'}};
        // db.ref('users').update(disorder);
    }





    return (

            <div>
                <input type="text" placeholder={"Enter full name"} onChange={nameChange}/>
                <input type="text" placeholder={"Enter location"} onChange={locationChange}/>
                <input type="text" placeholder={"Enter login"} onChange={loginChange}/>
                <input type="submit" onClick={add}/>

                <button onClick={zbsDB}>Pull</button>
            </div>

    )
}

export default LoginFunc;