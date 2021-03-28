import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-course-list',
    templateUrl: './curse.list.componet.html'
    

})

export class CourseListComponent implements OnInit{

    cousers: Course[] = []
    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 50.30,
                code: 'XPA-2122',
                duration: 120,
                rating: 4.5,
                releaseDate: 'December, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '',
                price: 40.50,
                code: 'CRF-4321',
                duration: 80,
                rating: 4,
                releaseDate: 'April, 2, 2020'
                }
        ]
    }


}