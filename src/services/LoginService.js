
export default class Auth{
    state={

    }
    static login(email,password){ 
        console.log(email)
        return new Promise((resolve, reject) => {
            fetch("http://192.168.1.107:4000/api/admin/login", {
                method:'POST',
                mode:'cors',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                  })
                }).then(res => res.json())
                .then(info => {
                    console.log("Info: ", info);
                if(info.status === 'success') {
                    resolve(info.data);
                } else {
                    reject(info.message);
                }
            }).catch(err =>reject(err))
        })
    }
}