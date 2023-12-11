import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    template:`
        <h1>This is my app server component</h1>
        `,
        styles:[`
        h1{
            color:white;
            background:black;
            display:inline;
            padding:1rem;
            margin:1rem;
        }`
        ]
})
export class ServerComponent{

}