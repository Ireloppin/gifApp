import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoader: boolean= false;

  ngOnInit(): void {
    if(!this.url) throw new Error('This property is required');
  }

  onLoad(){
    this.hasLoader = true;
  }
}
