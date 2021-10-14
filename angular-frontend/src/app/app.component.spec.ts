import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Employee Management System'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Employee Management System');
  });
  it(
    'should have a router outlet',
    async(() => {
      const element = fixture.debugElement.query(By.directive(RouterOutlet));
      expect(element).not.toBeNull();
    })
  );
});

it('should redirect the user to `Create employee Form` component when Edit button is clicked', () => {
  const router = TestBed.get(Router);
  const spy = spyOn(router, 'navigate');

  component.id = 1;

  fixture.detectChanges();

  const button = fixture.debugElement.query(By.css('#edit'));
  button.triggerEventHandler('click', null);

  expect(spy).toHaveBeenCalledWith(['/products', component.id, 'edit']);
});

});