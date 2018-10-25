import { Component, OnInit } from '@angular/core';
import { Post } from "../post"

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post: Post = {
    id: 1,
    title: "First post",
    body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, 
           ex nostrum? Ad, earum! Optio maxime magnam modi numquam porro 
           officiis omnis tempore quos nostrum quia rem, cumque dicta 
           saepe eum.`}
           
  constructor() { }

  ngOnInit() {
  }

}
