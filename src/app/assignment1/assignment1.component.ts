import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrl: './assignment1.component.css'
})
export class Assignment1Component {
  display:boolean =false;
  count:any[]=[];
displayPassword(){
this.display=!this.display;
// this.count.push(this.count.length + 1)
this.count.push(new Date())

}
}
