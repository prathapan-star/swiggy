import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-bootstrapmodal',
  templateUrl: './bootstrapmodal.component.html',
  styleUrl: './bootstrapmodal.component.scss'
})
export class BootstrapmodalComponent {
  
  name!:string;
  price!:string;
  location!:string;
  cuisines!:string;
  foodItems: any[] = [];
  constructor(public bsModalRef:BsModalRef) {}
}
