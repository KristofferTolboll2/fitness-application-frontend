import { BehaviorSubject } from 'rxjs';
import axios from 'axios'


const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(email, password) {
        const body = { email, password }
    
    return axios.post(`http://localhost:4000/api/auth/authenticate`, body)
        .then(res => {
            const {data} = res
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(data));
            currentUserSubject.next(data);
            return data;
        }).catch(err =>{
            return alert(`error is ${err} `)
        })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}