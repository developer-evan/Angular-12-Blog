import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PostsComponent
  ]
})
export class TasksModule { }
