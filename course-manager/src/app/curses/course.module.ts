import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Error404Component } from "../error-404/error-404.component";
import { ReplacePipe } from "../pipe/replace.pipe";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course.list.componet";
import { StarComponent } from "./star/star.component";

@NgModule({
    declarations:[
    CourseListComponent,
    CourseInfoComponent,
    ReplacePipe,
    StarComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '', redirectTo: 'courses', pathMatch: 'full'
            },
            
            {
                path: '**', component: Error404Component
            }
        ])
    ]
})
export class CourseModule {

}