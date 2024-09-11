import { ChangeDetectionStrategy, Component } from '@angular/core';
import { word } from '../../types/words';

@Component({
  selector: 'app-win-dialog',
  templateUrl: './win-dialog.component.html',
  styleUrl: './win-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WinDialogComponent {
  word = word.join('');
}
