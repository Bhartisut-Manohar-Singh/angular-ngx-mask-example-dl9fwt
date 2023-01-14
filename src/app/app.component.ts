import { Component } from '@angular/core';
import {FormGroup , FormBuilder} from "@angular/forms"
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  public number= 953656656532652626;
  public iban= "TR5454512622656695";

  // regex email ^[a-zA-Z]+\w+@\w+(\.\w{1,10}){0,1}$

  public price01 = 25971456111.5475757
  public price02 = 25971456111.256000000
  public price03 = 25971456111.66
  public zero = 0.0; // 0 , 0.0 => 0

  public tr =155151.9555
  public tr2 =155151.9555
  form
  constructor(fb:FormBuilder) { 
    this.form  = fb.group({
      number:null
    })
  }
}

