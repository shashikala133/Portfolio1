import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Certificate";
  courses:Courses[] = [
        {
          courseid: "1",
          coursename: 'Introduction to HTML5-Coursera',
          url:"https://drive.google.com/file/d/1SyYgC2g5GMiTQZyhLnP4zGnTB1kA4h-0/view?usp=sharing"
          
        },

        {
          courseid: "2",
          coursename: 'Demystifying Networking by IIT Bombay,NPTEL',
          url:"https://drive.google.com/file/d/1-bNOFWkshxKvoo3WTC26Zco4W_NlKdl9/view?usp=sharing"
        },
        {
          courseid: "3",
          coursename: 'Programming for everybody- getting started with python by University of Michigan, Coursera',
          url:"https://drive.google.com/file/d/1SxDDHQeNi3Bds4e06s-vNohCFGjGC60S/view?usp=sharing"
        },
        {
          courseid: "4",
          coursename: 'Introduction to computer and office productivity software-Coursera',
          url:"https://drive.google.com/file/d/13-oUn9Fjj2aLmY0MBa9hsaa9Ws4_lwVM/view?usp=sharing"
        },
        {
          courseid: "5",
          coursename: 'Big Data Machine Learning Techniques Using Spark -NMAMIT',
          url:"https://drive.google.com/file/d/1ZfVfw8VK9ynWwhzlXZZptvxXnm30_Mqc/view?usp=sharing"
        },
        
        {
          courseid: "6",
          coursename: 'Basic Web Development with JS and ReactJS -ShapeAI',
          url:"https://drive.google.com/file/d/1_N-UE2EIeaONi5H6ujcTM_S2urFJ66kK/view?usp=sharing"
        }
        
      ]
    

}
class Courses {
  courseid: string | undefined;
  coursename: string | undefined;
  url :string |undefined;
}
