import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private common:CommonService,private locations:Location) { }
  employeeObj: any;

  ngOnInit(): void {
// First Way Is Snapshot
      //  this.common.getEmployee(empId).subscribe(
        
      //     data=>{
      //       console.log("Show employee "+data);
      //       this.employeeObj=data;
      //     })

// Second Way Is Observable
this.route.paramMap.subscribe(param1=>{
  this.common.getEmployee(parseInt(param1.get("id"))).subscribe(
    data=>{
      console.log("Show Employee"+data);
      this.employeeObj=data;
    })
})

  }
  getback(){
    this.locations.back();
  }
}
