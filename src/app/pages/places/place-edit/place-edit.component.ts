import { ApiService } from './../../../services/api.service';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.scss']
})
export class PlaceEditComponent implements OnInit {

  placeForm:FormGroup;

  constructor(private fb:FormBuilder,private api:ApiService,
    public dialogRef: MatDialogRef<PlaceEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    
   }


  ngOnInit(): void {
    this.placeForm = this.fb.group({
      name: [this.data.name, [Validators.required]],
      url: [this.data.url, Validators.required],
      port: [this.data.port, Validators.required],
      determinatedTemp:[this.data.determinatedTemp],
      dashboard_id: [this.data.dashboard_id],
      status_id:[this.data.status_id],
    });
  }

  submit(){

    this.api.updatePlace(this.data.id,this.placeForm.value).subscribe(res=>{
      if(res['data']==1){
        this.dialogRef.close();
      }
    })
  }


}
