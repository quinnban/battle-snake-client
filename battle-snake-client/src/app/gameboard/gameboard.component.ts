import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit {

  size = new Array(10).fill(1);

  constructor() { }

  ngOnInit(): void {
    console.log(this.size);
  }

}
