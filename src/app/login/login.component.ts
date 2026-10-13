import { Component,inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private authservice=inject(AuthService);
  private router=inject(Router);


  username="";
  password="";


  signup(){
    const success=this.authservice.login(
      this.username,
      this.password
    )
  


  if(success){
   this.router.navigate(['/home']);
  }else{
        console.log('Login failed');
  }
}

}
