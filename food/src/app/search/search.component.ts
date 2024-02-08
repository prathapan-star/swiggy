import { Component } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { debounceTime } from 'rxjs';
import { RestListComponent } from '../rest-list/rest-list.component';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  Admins:any=[];
  searchForm!: FormGroup;
  constructor(public as1:AdminService,private fb:FormBuilder,private route:Router){}
  ngOnInit(){
    this.loadRests();
    this.searchForm=this.fb.group({
      searchText:[]
    })
  }
  onSearchTextChange(event:any){
    console.log('event fired');
   
    this.searchForm.controls['searchText'].valueChanges
    .pipe(debounceTime(500))
    .subscribe(()=> {
      console.log(' ');
     
      if(this.searchForm.controls['searchText'].value.length > 2) {
        const searchedBooks = this.Admins?.filter((b:any) => b.name.toLowerCase().includes(event.target.value))
        console.log('searchedBooks', searchedBooks);
        this.Admins = searchedBooks;
      }
      if(this.searchForm.controls['searchText'].value.length == 0) {
        this.Admins=this.loadRests();
      }
    })
  }
  loadRests() {
    return this.as1.getRests().subscribe((data:{})=>{
      this.Admins= data ;
    });
  }
}
