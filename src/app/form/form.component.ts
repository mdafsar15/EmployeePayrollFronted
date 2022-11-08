import { DomPortal } from '@angular/cdk/portal';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { EmployeeModel } from '../EmployeeModel';

interface salary {
  value: number;
  viewValue: number;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

_depart!: departmentList[];
deptName: any;
args: any;
emps:any = "";
allEmp : Array<any>=[];  
tempArr : Array<any> = [];
//snapshot-> loading old history
//paramMap -> Mapping with getId
Id:any = this.route.snapshot.paramMap.get("Id");
constructor(private employeeService: EmployeeService, private router: Router, private route:ActivatedRoute) { }

employee: EmployeeModel = new EmployeeModel("", new Date, "", "", [], "", 0);

depart2: any = ["HR", "Sales", "Engineer", "Finance", "Other"];

ngOnInit(): void {

}

 
  salaryValue: number = 0;
  firstName: string = "";
  nameError: string = "";
  imgUrl_1 = "../../assets/profile-images/Ellipse -1.png";
  imgUrl_2 = "../../assets/profile-images/Ellipse -2.png";
  imgUrl_3 = "../../assets/profile-images/Ellipse -3.png";
  imgUrl_4 = "../../assets/profile-images/Ellipse -4.png";


  salarys: salary[] = [
  
    { value: 20000, viewValue: 20000 },
    { value: 30000, viewValue: 30000 },
    { value: 40000, viewValue: 40000 },
    { value: 50000, viewValue: 50000 },
    { value: 60000, viewValue: 60000 },
  
  ];

}

class departmentList{
  id: number | undefined;
  name: string | undefined;
  isSelected:boolean | undefined;
}
