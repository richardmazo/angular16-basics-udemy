import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'richard';
  public nameUpper: string = 'MAZO';
  public fullName: string = 'riCHaRd mAzO';
  public customDate: Date = new Date();

}
