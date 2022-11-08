import { Component, OnInit} from '@angular/core';
import { Q1Service } from 'src/app/q1-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public q1Service : Q1Service){ }
  title = 'Angular1';
  public detailList : any;
  ngOnInit(){
    this.q1Service.getDetails().subscribe((data => this.detailList = data));
}
}
