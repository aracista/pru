import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-package1',
  templateUrl: './group-package1.page.html',
  styleUrls: ['./group-package1.page.scss'],
})
export class GroupPackage1Page implements OnInit {
data: any = {}

  constructor(public router: Router) { }
  
 formDaftar: any = {
    name: '',
    Pname: '',
    Pcode: '',
    sob: '',
    lop: '',
    officePhone: '',
    bankRefferal: '',
    bankBranch: '',
    isCode: '',
    is: '',
  }

  submitRegister(){
  	this.router.navigate(['/group-package1']);
  	this.data = this.formDaftar;
  }
  ngOnInit() {
  }

}
