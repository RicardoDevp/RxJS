import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-game-instructions',
  templateUrl: './game-instructions.component.html',
  styleUrl: './game-instructions.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameInstructionsComponent {}
