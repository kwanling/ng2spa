import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'users',
    template: `
        <h2>Users</h2>
    `,
    directives: [ROUTER_DIRECTIVES]    
})
export class UsersComponent {
    
}