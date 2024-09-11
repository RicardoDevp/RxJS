import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { asyncScheduler, from, of } from 'rxjs';

@Component({
  selector: 'app-from-of',
  templateUrl: './from-of.component.html',
  styleUrl: './from-of.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FromOfComponent implements OnInit {
  fruitsFormAsyncScheduler$ = from(
    ['apple', 'orange', 'banana', 'mango', 'kiwi'],
    asyncScheduler
  );
  fruitsForm$ = from(['apple', 'orange', 'banana', 'mango', 'kiwi']);
  fruitsOf$ = of('apple', 'orange', 'banana', 'mango', 'kiwi');

  ngOnInit(): void {
    const fruitsObserver = {
      next: (value: string) => console.log(value),
      error: (error: any) => console.error(error),
      complete: () => console.log('All fruits are emitted'),
    };

    this.fruitsForm$.subscribe(fruitsObserver);
    this.fruitsOf$.subscribe(fruitsObserver);
    this.fruitsFormAsyncScheduler$.subscribe(fruitsObserver);
  }
}
