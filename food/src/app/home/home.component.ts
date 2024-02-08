import { Component } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { BootstrapmodalComponent } from '../bootstrapmodal/bootstrapmodal.component';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalModule} from 'ngx-bootstrap/modal'
import { BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  Admins:any=[];
  bookForm!: FormGroup;
  isModalOpen = false;
  selectedRow : any;
  isAddNewButtonClicked: boolean = false;
  btnText: string = "Add";
  constructor(private as : AdminService, private fb: FormBuilder , private modalService : BsModalService){}
  ngOnInit()  {
    this.loadRest();
  }
  loadRest() {
    return this.as.getRests().subscribe((data:{})=>{
      this.Admins = data ;
    });
  }

  deleteRest(id:any)  {
    if(window.confirm('Are you sure , you want to delete ?')) {
      this.as.deleteRest(id).subscribe((data)=>{
        this.loadRest();
      });
    }
  }
  openBootstrapModal(row: any){
    this.selectedRow = row;
    this.isModalOpen = true;
    const initialState = {name:row.name, location:row.location, cuisines:row.cuisines};
    this.modalService.show( BootstrapmodalComponent , { initialState});
  }
 
  closeModal(){
    this.isModalOpen = false;
  }

}
