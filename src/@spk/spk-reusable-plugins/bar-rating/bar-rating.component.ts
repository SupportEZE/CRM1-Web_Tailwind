import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'spk-bar-rating',
  standalone: true,
  imports: [BarRatingModule,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './bar-rating.component.html',
  styleUrl: './bar-rating.component.scss'
})
export class BarRatingComponent {
  @Input()rating:any;
  @Input()starRate1:any;
  @Input()theme:any;
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() readonly: boolean = false;
  @Input() control: FormControl = new FormControl();
  @Input() max: number = 5;
  @Input() isBusyText: string = '';
  
  // @Output() ratingChange = new EventEmitter<number>();
  
  hovered: number = 1;
  selected: any = null;

  onRateChange(rate: number): void {
    this.selected = rate;
    // this.ratingChange.emit(rate);
  }

  resetRating(): void {
    this.control.setValue(null);
  }

  @Output() rateChange = new EventEmitter<number>(); // Emit selected rating
  @Output() hoveredChange = new EventEmitter<number>(); // Emit hovered rating


  onHover(value: number): void {
    this.hovered = value;
    this.hoveredChange.emit(value);
  }

  onLeave(): void {
    this.hovered = 0;
    this.hoveredChange.emit(0);
  }
}