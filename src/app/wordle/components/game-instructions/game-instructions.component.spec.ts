import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInstructionsComponent } from './game-instructions.component';

describe('GameInstructionsComponent', () => {
  let component: GameInstructionsComponent;
  let fixture: ComponentFixture<GameInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameInstructionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
