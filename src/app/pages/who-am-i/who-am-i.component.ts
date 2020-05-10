import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'app-who-am-i',
  templateUrl: 'who-am-i.component.html',
  styleUrls: ['who-am-i.component.scss'],
})
export class WhoAmIComponent {
  selected = [
  ];

  available = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '2',
    '3',
    '4',
    '5',
    '6',
    '2',
    '3',
    '4',
    '5'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
