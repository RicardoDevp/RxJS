import { ChangeDetectionStrategy, Component } from '@angular/core';
import { word } from '../../types/words';

@Component({
  selector: 'app-lose-dialog',
  templateUrl: './lose-dialog.component.html',
  styleUrl: './lose-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoseDialogComponent {
  word = word.join('');
}
