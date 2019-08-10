import { Component, OnInit } from '@angular/core';
import { Item } from './Item';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-tarea1',
  templateUrl: './tarea1.component.html',
  styleUrls: ['./tarea1.component.scss']
})
export class Tarea1Component implements OnInit {

  udeaImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Escudo-UdeA.svg/240px-Escudo-UdeA.svg.png';
  word = ' ';
  items: Item[];

  constructor(private service: ServiceService) { }

  ngOnInit() { }

  search() {
    this.service.getItems(this.word).subscribe((items: any) => {
      this.items = items.results;
    });
  }
}
