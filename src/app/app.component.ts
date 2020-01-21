import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notification-frontend';
  jobName :string;
  jobGroup:string;
  triggerName:string;
  triggerGroup:string;
  cronExpression:string;
  interval:string;


  constructor(private httpClient: HttpClient,private router: Router) {

  }

  ngOnInit() {
  }

  createCronJob():void {

    const formData = new FormData();
    formData.append('jobName', this.jobName);
    formData.append('jobGroup', this.jobGroup);
    formData.append('triggerName', this.triggerName);
    formData.append('triggerGroup', this.triggerGroup);
    formData.append('cronExpression', this.cronExpression);

     this.httpClient.post(`http://localhost:8080/api/startNotificationCron`,formData).subscribe(
        (data:any)=>{
          if(data=="Signed in"){
            this.router.navigate(['create-new-job']);


          }
          else{
            this.router.navigate(['joblist']);
          }


        });


    }

    createSimpleJob():void {

      const formData = new FormData();
      formData.append('jobName', this.jobName);
      formData.append('jobGroup', this.jobGroup);
      formData.append('triggerName', this.triggerName);
      formData.append('triggerGroup', this.triggerGroup);
      formData.append('interval', this.interval);

       this.httpClient.post(`http://localhost:8080/api/startNotificationSimple`,formData).subscribe(
          (data:any)=>{
            if(data=="Signed in"){
              this.router.navigate(['create-new-job']);


            }
            else{
              this.router.navigate(['joblist']);
            }


          });


      }





}
