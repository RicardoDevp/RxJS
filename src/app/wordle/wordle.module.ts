import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { GameInstructionsComponent } from './components/game-instructions/game-instructions.component';
import { LetterComponent } from './components/letter/letter.component';
import { LoseDialogComponent } from './components/lose-dialog/lose-dialog.component';
import { TimerComponent } from './components/timer/timer.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { WinDialogComponent } from './components/win-dialog/win-dialog.component';
import { WordleRoutingModule } from './wordle-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    LetterComponent,
    TopBarComponent,
    GameBoardComponent,
    WinDialogComponent,
    LoseDialogComponent,
    GameInstructionsComponent,
    TimerComponent,
  ],
  imports: [
    CommonModule,
    WordleRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatExpansionModule,
    MatInputModule,
    FormsModule,
  ],
})
export class WordleModule {}
