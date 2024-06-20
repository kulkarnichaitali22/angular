import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserprofileComponent } from './userprofile/userprofile.component';
//import { NewsCompComponent } from './news-comp/news-comp.component';
//import { TodoComponent } from './todo/todo.component';
//import { PostComponent } from './post/post.component';

const routes: Routes = [
// {
//  // path:'news',component:NewsCompComponent
// },
// {
//  // path:'todo',component:TodoComponent
// },
// {
//   //path:'post',component:PostComponent
// },
{
  path:'userprofile',component:UserprofileComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
