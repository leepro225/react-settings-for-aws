import axios from "axios";
import React, {useState, useEffect} from "react";

function App() {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://15.164.50.250:3000/api/users'
        })
        .then(function (res) {
            console.log('res', res);
            setUserList(res.data);
        });
    }, []);

    return (
        <div>
            <h1>hello world</h1>
            <p>유저 추가</p>
            <ul>
                {
                    userList.map((item, index) => {
                        return (<li key={index}>{item.name}</li>);
                    })
                }
            </ul>
        </div>
    )
}

export default App;
