import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Letter } from '../../types/letter';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LetterComponent {
  @Input() letter: Letter = { letter: '', status: '' };
  @Input() change: boolean = false;

  get styleClasses() {
    let classes = '';
    if (this.letter.status === 'CORRECT') {
      classes += 'bg-green-200';
    } else if (this.letter.status === 'EXISTS') {
      classes += 'bg-yellow-200';
    } else {
      classes += 'bg-blue-200';
    }
    return classes;
  }
}
