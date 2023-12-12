import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
allowNewServer=false;
serverCreationStatus = 'No server was created';
serverName = 'aaaaa';
constructor(){
  setTimeout(()=>{this.allowNewServer=true},4000)
}
onCreationServer(){
  this.serverCreationStatus='the server is created the name is ' + this.serverName;
}
onUpdateServerName(event:Event){
this.serverName = (<HTMLInputElement>event.target).value;
}
}
