import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  emitChange = false;

  disabledReset = true;

  reset = false;

  refresh() {
    this.emitChange = !this.emitChange;
  }

  resetGame() {
    window.location.reload();
  }

  disableReset(event: boolean) {
    this.disabledReset = event;
  }
}
