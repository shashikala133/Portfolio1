import { Component, OnInit, Input } from '@angular/core';
import { SkillService } from '../skill.service';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills:any[];
  constructor(private _skillService: SkillService) {
    this.skills = this._skillService.getDetails();
  }
  @Input() user!: any;
//Toggle effect to show and hide the customer details
  userDetail = false;
  showUserDetailsToggle() {
    this.userDetail = !this.userDetail;//!false
  }
  //class to show the change in + and - in the button
  getClass() {
    var classList = '';
    if (this.userDetail) {
      classList = 'fa fa-plus';
    } else {
      classList = 'fa fa-minus';
    }
    return classList;
  }

  ngOnInit(): void {
  }

}
