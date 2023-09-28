import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {
  @Input()
  gameText:string = "PLAY IT NOW"
  @Input()
  gameType:string = "DIGITAL PS5"
  @Input()
  gamePrice:string = "r$ 399,99"

  constructor(){}

  ngOnInit():void{

  }
}
