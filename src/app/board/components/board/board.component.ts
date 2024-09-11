import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent implements AfterViewInit {
  canvasContext: CanvasRenderingContext2D | null = null;
  cursorPosition = { x: 0, y: 0 };

  canWrite = false;

  ngAfterViewInit(): void {
    let canvas = document.getElementById(
      'reactive-canvas'
    ) as HTMLCanvasElement;

    let onMouseDown$ = fromEvent(canvas, 'mousedown');
    let onMouseMove$ = fromEvent(canvas, 'mousemove');
    let onMouseUp$ = fromEvent(canvas, 'mouseup');

    onMouseDown$
      .pipe(
        map((event) => {
          let mouseEvent = event as MouseEvent;
          this.cursorPosition.x = mouseEvent.clientX - canvas.offsetLeft;
          this.cursorPosition.y = mouseEvent.clientY - canvas.offsetTop;
          console.log(this.cursorPosition);
        })
      )
      .subscribe(() => {
        this.canWrite = true;
      });

    onMouseUp$.subscribe(() => {
      this.canWrite = false;
    });

    this.canvasContext = canvas.getContext('2d');

    if (this.canvasContext) {
      this.canvasContext.lineWidth = 1;
      this.canvasContext.strokeStyle = 'blue';

      this.canvasContext.beginPath();
      onMouseMove$.subscribe((event: Event) => {
        let mouseEvent = event as MouseEvent;
        if (this.canWrite && this.canvasContext) {
          this.canvasContext.moveTo(0, 0);
          this.canvasContext.lineTo(mouseEvent.clientX, mouseEvent.clientY);
          this.canvasContext.stroke();
        }
      });

      this.canvasContext.closePath();
    }
  }
}
