import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
 
 
url:string="http://localhost:3000/Employee";
private nextId: number=1;

  constructor(private http:HttpClient) { }
  
  e:Employee=
  {

   id:0,
    ename:"",
    email:"",
    mobile:"",
    designation:"",
    username:"",
    password:""
  }


  postdata(e:Employee)
  {
    e.id = this.nextId++; 
    console.log(e);
    return this.http.post(this.url,e);
  }

  getData(){
    return this.http.get(this.url);
  }
  
deleteData(id:any){
     return this.http.delete(this.url+"/"+id);
}
getEmployee(id:any){
      return this.http.get(this.url+"/"+id);
}
updateEmployee(e:Employee){
return this.http.put(this.url+'/'+e.id,e);
}
Logout(){}
  

}
