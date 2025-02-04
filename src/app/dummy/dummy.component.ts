import { Component } from '@angular/core';

@Component({
  selector: 'app-dummy',
  imports: [],
  templateUrl: './dummy.component.html',
  standalone: true,
  styleUrl: './dummy.component.css'
})
export class DummyComponent {
  title: string = "Dummy";
  newTitle: string

  constructor() {
   this.newTitle =  this.doStuff();
  }

  doStuff(){
    return this.title +" is a dummy";
  }

}
