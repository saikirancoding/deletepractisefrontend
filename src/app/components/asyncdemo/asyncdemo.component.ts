import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-asyncdemo',
  templateUrl: './asyncdemo.component.html',
  styleUrl: './asyncdemo.component.css'
})
export class AsyncdemoComponent {

  /*
      promise=new Promise((data)=>
     {
      data(1);
      data(2);
      data(3);

        
     }).then(e=>console.log('promise'+e));



obs=new Observable((data)=>
  {
  data.next(1);
  data.next(2);
  data.next(3);

   
}).subscribe(e=>console.log('obserable'+e));
*/

/*
asyncPipe=new Observable((observe)=>{

    observe.next("hi");
   
}

);
*/

asyncPipe=new Observable((observ=>{

  
    let  i=0;
    setInterval(()=>{  observ.next("hello"+i); i++;},2000);
    }));
 

    booleanOb=new Observable((observ=>{
      setTimeout(()=>{ observ.next("true");},5000);
    }));
    

  }