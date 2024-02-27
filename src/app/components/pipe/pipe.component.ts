import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  toDate=new Date();

  msg="Hello J32";

  n= 9542.14554;
  n1= 42;

  per=.54;
  cur: number= 175;
}
