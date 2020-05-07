import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-coat-slide',
  templateUrl: './coat-slide.page.html',
  styleUrls: ['./coat-slide.page.scss'],
})
export class CoatSlidePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  instructions: any[] = [
    {info: "Remove coat from hook"},
    {info: "Hold the coat by the collar in the right hand"},
    {info: "Locate top left side of coat and hold it in the left hand"},
    {info: "Let go of the collar with the right hand"},
    {info: "While continuing to hold coat in left hand; put right arm into right sleeve and push until hand is visible at the end of the sleeve"},
    {info: "Reach round back to grab coat with left hand"},
    {info: "Pull coat around back of body"},
    {info: "Grab top of left side of coat with right hand"},
    {info: "While continuing to hold coat with right hand; put left arm into left sleeve and push until hand is visible at the end of the sleeve "},
    {info: "Grab top of coat on each side of the opening (let side with left hand and right side with right hand)"},
    {info: "Pull forwards to check coat is sitting on shoulders correctly"}
  ];

  menuLink(){
    this.navCtrl.navigateBack('/user-tabs/preset-tasks-morning')
  }

}
