import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    if(!this.gif)
    throw new Error('Gif property is required');
  }

  @Input()
  public gif!: Gif;
}