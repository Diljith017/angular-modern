import { Component } from '@angular/core';
import {inject} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private authservice=inject(AuthService)
  private router=inject(Router)

  loggedout(){
    this.authservice.loggedout();
    this.router.navigate(['./login'])

  }

}
