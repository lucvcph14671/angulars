import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;
  id: string|undefined;
  student: any;

  constructor(

    private postService: PostService,
    private router: Router,
    private activateRoute: ActivatedRoute

  ) { 

    this.postForm = new FormGroup({

      title: new FormControl('', Validators.required),
      content: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      status: new FormControl('', Validators.required)

    })
  }

  ngOnInit(): void {
  }

  onSubmit(data: any){

    return this.postService.createPost(data).subscribe(data => {
      this.router.navigate(['/post']);
    });
  }

}
