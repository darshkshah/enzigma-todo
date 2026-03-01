import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http:HttpClient) {}

    users = signal<User[]>([]);
    usersApiURL = "api/users/";

    loadUsers(): Observable<HttpResponse<User[]>> {
        return this.http.get<User[]>(this.usersApiURL, { observe: 'response' });
    }

    addUserLocally(user: User) {
        this.users.update(current => [...current, user]);
    }

    setUsersListLocally(users: User[]) {
        this.users.set(users);
    }
}
