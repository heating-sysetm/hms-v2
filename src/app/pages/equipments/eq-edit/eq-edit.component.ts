import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-eq-edit',
  templateUrl: './eq-edit.component.html',
  styleUrls: ['./eq-edit.component.scss']
})
export class EqEditComponent implements OnInit {
  eqForm:FormGroup;
  places=[];
  eqTypes=[];

  constructor(private fb:FormBuilder,private api:ApiService,
    public dialogRef: MatDialogRef<EqEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.loadData();
    this.eqForm = this.fb.group({
      name: [this.data.eqname, [Validators.required]],
      type_id: [this.data.typeid, [Validators.required]],
      place_id:[this.data.placeid,[Validators.required]]
    });
  }

  
  
  loadData(){
    this.api.getAllPlaces().subscribe(res=>{
      this.places=res['data'];
    })
    this.api.getEquipmentTypes().subscribe(types=>{
      this.eqTypes=types['data'];
    });
  }

  submitEquipment() {
      this.api.updateEquipment(this.data.eqid,this.eqForm.value).subscribe(equipmentResult => {
        console.log(equipmentResult);
        
      }, error => {
        console.log(error);
      });
  }


}
