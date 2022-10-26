import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss']
})
export class FeaturesSectionComponent implements OnInit {
  listFeatures=[{
    title:'Robust workflow',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    imgUrl:'/assets/images/FuatureIcon.png',
  },{
    title:'Flexibility',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    imgUrl:'/assets/images/FeatureIcon1.png',
  },{
    title:'User friendly',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    imgUrl:'/assets/images/FeatureIcon2.png',
  },{
    title:'Multiple layouts',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    imgUrl:'/assets/images/FeatureIcon3.png',
  },{
    title:'Better components',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    imgUrl:'/assets/images/FeatureIcon4.png',
  },{
    title:'Well organised',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    imgUrl:'/assets/images/FeatureIcon5.png',
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
