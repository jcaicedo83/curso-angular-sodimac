import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-application';

   base:number =0;
   altura?:number =0;
   var_c:number =0;
   tipo :string= '';

  calcular =(pBase:number, pAltura?:number)=> {

    if (this.tipo=='C')
    {
      this.var_c = this.base * this.base;
    }else if (this.tipo=='T')
    {
      this.var_c = (this.base * this.altura)/2;
    }
  };
}
