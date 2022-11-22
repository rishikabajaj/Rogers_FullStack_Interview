import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTemplateCollectionComponent } from './page-template-collection.component';

describe('PageTemplateCollectionComponent', () => {
  let component: PageTemplateCollectionComponent;
  let fixture: ComponentFixture<PageTemplateCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTemplateCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTemplateCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
