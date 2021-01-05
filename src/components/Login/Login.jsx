import React from 'react';
import style from './Login.module.css';
import firebase from "firebase";


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: '',
            hasAccount: false,
            key: '',
            value: ''
        }
    }

    componentDidMount() {
        const db = firebase.database();
        // const name = db.ref('name');
        // name.on('value', (elem) => {
        //     this.setState({name:elem.val()})
        // })
    };

    handleChange = ({target: {value, id}}) => {
        this.setState({
            [id]: value
        })
    };

    createAccount = () => {
        const {email, password} = this.state;
        // firebase.auth().createUserWithEmailAndPassword(email, password)
        //     .catch(error => console.log(error));

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(r=>{
                this.setState({hasAccount: true})
            })
    }

    sendData = () => {
        const {key, value} = this.state;
        const db = firebase.database();
        db.ref("pzd").push("value");
        alert("Your data was send");
    }


    render() {
        const {hasAccount} = this.state
        return (
            <div className={style.login}>
                {
                    hasAccount ?
                        <div>
                            dats
                            <input type="text" id={"key"} placeholder={"enter key"} onChange={this.handleChange}/>
                            <input type="text" id={"value"} placeholder={"enter value"} onChange={this.handleChange}/>
                            <input type="submit" placeholder={"Отправить"} onClick={this.sendData}/>
                        </div>
                        :
                        <div className={style.login_block}>
                            not db
                            <input type="email" id={"email"} placeholder={"Email"} onChange={this.handleChange} />
                            <input type="password" id={"password"} placeholder={"Password"}  onChange={this.handleChange}/>
                            <input type="submit" value={"Отправить"} onClick={this.createAccount} />
                        </div>
                }

            </div>
        )
    }
}

export default Login;
