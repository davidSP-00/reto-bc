import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements-section',
  templateUrl: './achievements-section.component.html',
  styleUrls: ['./achievements-section.component.scss']
})
export class AchievementsSectionComponent implements OnInit {
  listArchievements=[{
    title:'10000+',
    text:'Downloads per day',
    imgUrl:'/assets/images/FeatureIcon1.png',
  },{
    title:'2 Million',
    text:'Users',
    imgUrl:'/assets/images/FeatureIcon2.png',
  },{
    title:'500+',
    text:'Clients',
    imgUrl:'/assets/images/FeatureIcon3.png',
  },{
    title:'140',
    text:'Countries',
    imgUrl:'/assets/images/FeatureIcon4.png',
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
