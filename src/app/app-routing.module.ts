import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CertificationComponent } from './certification/certification.component';
import { EducationDetailsComponent } from './education-details/education-details.component';

const routes: Routes = [
  {path:'project',component:ProjectComponent},
  {path:'skill',component:SkillComponent},
  {path:'nav',component:NavComponent},
  {path:'footer',component:FooterComponent},
  {path:'AboutME',component:AboutMeComponent},
  {path:'certificate',component:CertificationComponent},
  {path:'education',component:EducationDetailsComponent},
  {path:'',component:AboutMeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
