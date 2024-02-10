import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  emp: Employee;
  constructor( public cs:CommonService) { }

  ngOnInit(): void {

    this.cs.getData().subscribe(
      (data:Employee)=>{
        this.emp=data;
      });


    }
  deletedata(id:any){
    this.cs.deleteData(id).subscribe();
    window.location.reload();
  }

}
