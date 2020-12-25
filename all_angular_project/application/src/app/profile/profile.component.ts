import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(  private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params=>{
        let id = +params.get('id');
        console.log(id);
    }) ; 
  } 
  Followers = [
  {id: 1, name: 'follower1'},
  {id: 2, name: 'follower2'},
  {id: 3, name: 'follower3'},
  {id: 4, name: 'follower4'},
  {id: 5, name: 'follower5'}

  ]

}
