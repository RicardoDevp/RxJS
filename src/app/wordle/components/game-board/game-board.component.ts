import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fromEvent } from 'rxjs';
import { Letter } from '../../types/letter';
import { word } from '../../types/words';
import { LoseDialogComponent } from '../lose-dialog/lose-dialog.component';
import { WinDialogComponent } from '../win-dialog/win-dialog.component';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameBoardComponent implements OnInit {
  private _cdr = inject(ChangeDetectorRef);
  private dialog = inject(MatDialog);

  change = false;
  winGame = false;

  colIndex = 0;
  rowIndex = 0;

  @Output() refresh = new EventEmitter<void>();

  @Input() reset = false;
  @Output() disableReset = new EventEmitter<boolean>();

  letterMatrix: Letter[][] = [
    [
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
    ],
    [
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
    ],
    [
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
    ],
    [
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
    ],
    [
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
    ],
    [
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
    ],
  ];

  word = word;

  onKeyDown$ = fromEvent(document, 'keydown');

  ngOnInit(): void {
    this.onKeyDown$.subscribe(this.onLetterDown);
    this.onKeyDown$.subscribe(this.onEnterDown);
    this.onKeyDown$.subscribe(this.onBackspaceDown);
  }

  openWinDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(WinDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openLoseDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(LoseDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  finishTimer() {
    this.openLoseDialog('250ms', '250ms');
    this.disableReset.emit(false);
  }

  onLetterDown = (event: Event): void => {
    const keyPressed = (event as KeyboardEvent).key.toUpperCase();
    if (keyPressed.length === 1 && keyPressed.match(/[a-z]/i)) {
      let copiedElement = {
        ...this.letterMatrix[this.rowIndex][this.colIndex],
      };
      copiedElement.letter = keyPressed;
      this.letterMatrix[this.rowIndex][this.colIndex] = copiedElement;
      if (this.colIndex < 4) {
        this.colIndex++;
      }
      this._cdr.markForCheck();
    }
  };

  onEnterDown = (event: Event): void => {
    const keyPressed = (event as KeyboardEvent).key;
    let count = 0;
    if (keyPressed === 'Enter' && this.colIndex === 4) {
      count = this.verifyWord();
      if (count === 5) {
        this.openWinDialog('250ms', '250ms');
        this.disableReset.emit(false);
        this.winGame = true;
      } else if (this.rowIndex === 5) {
        this.openLoseDialog('250ms', '250ms');
        this.disableReset.emit(false);
      }
      this.colIndex = 0;
      this.rowIndex++;
      this._cdr.markForCheck();
    }
  };

  onBackspaceDown = (event: Event): void => {
    const keyPressed = (event as KeyboardEvent).key;
    if (keyPressed === 'Backspace') {
      let copiedElement = {
        ...this.letterMatrix[this.rowIndex][this.colIndex],
      };
      copiedElement.letter = '';
      this.letterMatrix[this.rowIndex][this.colIndex] = copiedElement;
      if (this.colIndex > 0) {
        this.colIndex--;
      }
    }
    this._cdr.markForCheck();
  };

  verifyWord(): number {
    let correctCounter = 0;
    this.letterMatrix[this.rowIndex].forEach((letter, colIndex) => {
      this.word.forEach((wordLetter, wordIndex) => {
        if (letter.letter === wordLetter && colIndex === wordIndex) {
          this.letterMatrix[this.rowIndex][colIndex].status = 'CORRECT';
          correctCounter++;
        } else if (letter.letter === wordLetter) {
          this.letterMatrix[this.rowIndex][colIndex].status = 'EXISTS';
        }
        this.change = !this.change;
      });
    });
    return correctCounter;
  }
}
