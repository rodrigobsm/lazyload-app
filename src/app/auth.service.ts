import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './login';
import {Observable} from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
    })
};

export interface LoginReturn {
    success: boolean;
}

@Injectable()
export class AuthService {

    EndpointURL = 'http://localhost/scal/login.php';  // URL to web api
    LoginData: Login;

    constructor (private http: HttpClient) {
        // set up the test username and password - just for testing purposes
        this.LoginData = new Login();
        this.LoginData.username = 'myusername';
        this.LoginData.password = 'mypassword';
    }

    public login(): Observable<LoginReturn> {
        return this.http.post<LoginReturn>(this.EndpointURL, this.LoginData);
    }

}
