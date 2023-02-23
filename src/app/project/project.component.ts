import { Component,OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  constructor(private projectService: ProjectService) { }
  projectlist:any= []
  projectlistStatus:any=[]
  ngOnInit(): void {
    this.projectService.getProject().subscribe((data)=>{
      console.log(data);
      this.projectlist=data;
    })
    this.projectService.getProjectStatus().subscribe((data)=>{
      console.log(data);
      this.projectlistStatus=data;

    })
  }
  getValue(projectId:any,statusId:any){
    return projectId==statusId;
  }
  updateVal(updateValue:any,statusid:any){
    let projectdata:any;
    for(let i of this.projectlist){
      if(i.id==updateValue){
        i.status=statusid;
        projectdata={...i};
        break;
      }
    }
    this.projectService.updateStatus(updateValue,projectdata).subscribe(
      (data)=>{
        this.projectService.getProject().subscribe(
          (data)=>{
            this.projectlist=data;
          }
        );
        console.log(data);
      }
    )
  }

}