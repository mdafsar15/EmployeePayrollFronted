import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { EmployeeModel } from '../EmployeeModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allEmp:Array<any> = [];



  countNumber:any = 0;
  name:string = "name";
  gender:string = "Gender";
  department:string = "department";
  salary:string = "salary";
  startDate:string = "Start Date";
  note:string = "note";  
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    
    
  }

  btnClick=  () => {
    this.router.navigateByUrl('/form');
  };

  
}

class Employee {
  name:string = "";
  gender:string = "";
  salary:number = 0;
  department:Array<any> = [];
  startDate:Date;
  // note:string = "";

  constructor(name:string, startDate:Date, gender:string,department:Array<any>,salary:number){
      this.name = name;
      this.startDate = startDate;
      this.department = department;
      // this.note = note;
      this.salary =salary;
      this.gender = gender;
  }
}