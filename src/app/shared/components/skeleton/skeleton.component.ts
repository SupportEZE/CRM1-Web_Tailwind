import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html'
})
export class SkeletonComponent {
  @Input() class!: string;


}
