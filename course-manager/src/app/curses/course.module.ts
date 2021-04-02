import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/component/star/star.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course.list.componet";

@NgModule({
    declarations:[
    CourseListComponent,
    CourseInfoComponent,
    
    
    ],
    imports:[
        CommonModule,
        FormsModule,
        StarModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
            
            {
                path: 'course/info/:id', component: CourseInfoComponent
            }
        ])
    ]
})
export class CourseModule {

}