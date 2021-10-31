import { EqEditComponent } from './eq-edit/eq-edit.component';
import { ConfirmDialogComponent } from './../../components/confirm-dialog/confirm-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { EquipmentsModalComponent } from './../../components/modals/equipments-modal/equipments-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from './../../services/api.service';
import { FormBuilder } from '@angular/forms';
import { NotificationService } from './../../services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { lang } from 'jalali-moment';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {
  name="";
  displayedColumns: string[] = [
    'eqname',
    'typename',
    'placename',
    'sencount',
    'eqdisplay',
    'options'
  ];
  
  dataSource!:MatTableDataSource<any>;
  public loading = false;
  constructor(public dialog: MatDialog,
    private notif: NotificationService,
    private _formBuilder: FormBuilder,
    private api: ApiService,
    public translate: TranslateService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.api.getEquipments().subscribe(data=>{
      console.log(data['data']);
      
      this.dataSource = new MatTableDataSource(data['data']);
    });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openEquipmentFormDialog() {
    const dialogRef = this.dialog.open(EquipmentsModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }

  changeStatus(event: MatSlideToggleChange,id) {
    this.api.changeEqStatus(id,{display:event.checked}).subscribe(res=>{});
  }

  delete(id,name){
      const dialogRef = this.dialog.open(ConfirmDialogComponent,{data:name,});
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.api.deleteEquipment(id).subscribe(res=>{
            this.loadData();
          })
        }
      });
    
  }

  edit(item){
    const dialogRef = this.dialog.open(EqEditComponent,{data:item,});
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.loadData();
      }
    });
  }

}
