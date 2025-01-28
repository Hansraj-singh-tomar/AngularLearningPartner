import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { UserComponent } from './components/user/user.component';
// import { AdminComponent } from './components/admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,  // ye component independent hai ye kis or component par depent nhi hai 
  // imports: [RouterOutlet, UserComponent, AdminComponent],
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LearningPartner';
}
