import { Component } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {

  msg="Welcome to user component"
  interpolation="{{interpolation like this}}"
  text ="This is property binding.............[innerHTML] property binding like this"
  line:any;
 show:boolean =false;
 value="if false"

  getval(val:any)
  {
    console.log(val)
      return (this.line=val);
  }

  emp=[
    {
      name:"Ram",
      age:23,
      salary:20000
    },
    {
      name:"Sham",
      age:43,
      salary:50000
    },
    {
      name:"Sita",
      age:25,
      salary:60000
    },
  ]
}
