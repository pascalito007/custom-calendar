import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planing-item-block',
  templateUrl: './planing-item-block.component.html',
  styleUrls: ['./planing-item-block.component.css'],
})
export class PlaningItemBlockComponent implements OnInit {
  @Input() width: string;
  @Input() item: any;
  @Input() backGroundColor: string;
  @Input() revisionWidth: string;
  constructor() {}

  ngOnInit(): void {}
}
