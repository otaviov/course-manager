import {Component, OnInit} from '@angular/core';
import {Course} from './course';
import { CourseService } from './course.service';

@Component({
    
    templateUrl: './course.list.componet.html'
})

export class CourseListComponent implements OnInit{

    filteredCourses: Course[] = [];

    _courses: Course[] = [];

    
    _filterby: string;

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void{
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        })
        
    }

    set filter(value: string){
        this._filterby = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterby.toLocaleLowerCase()) > -1);
    }

    get filter(){
        return this._filterby;
    }

}