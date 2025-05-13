import { Component } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-banker-list',
  imports: [NgSwitch, NgSwitchCase],
  templateUrl: './banker-list.component.html',
  styleUrl: './banker-list.component.css'
})
export class BankerListComponent {
  selectedContent = 1;

  showContent(page: number) {
    this.selectedContent = page;
  }
}
