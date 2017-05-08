import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJumbotronComponent } from './page-jumbotron.component';

describe('PageJumbotronComponent', () => {
  let component: PageJumbotronComponent;
  let fixture: ComponentFixture<PageJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
