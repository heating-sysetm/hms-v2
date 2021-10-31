import { PlaceEditComponent } from './../../pages/places/place-edit/place-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-option-menu',
  templateUrl: './option-menu.component.html',
  styleUrls: ['./option-menu.component.scss']
})
export class OptionMenuComponent implements OnInit {
  @Input() id: number;
  @Input() status: number;
  @Output() deleted = new EventEmitter<boolean>(false);
  data:any=null;
  constructor(private api: ApiService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getPlace(){
    this.api.getPlace(this.id).subscribe(res=>{
      this.data=res['data'];
      this.openEditDialog();
    });
    
  }


  deletePlace() {
    this.api.deletePlace(this.id).subscribe(result => {
      console.log(result);
      this.deleted.emit(true); 
    },
      err => {
        console.log(err);

      });
  }

  
  openEditDialog(): void {
    const dialogRef = this.dialog.open(PlaceEditComponent, {
      data: this.data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.deleted.emit(true);
    });
  }


  setplaceStatus(status){
    this.api.updatePlaceStatus(this.id,{status_id:status}).subscribe(res=>{
      console.log(res);
      
      this.deleted.emit(true);
    })
  }

}
