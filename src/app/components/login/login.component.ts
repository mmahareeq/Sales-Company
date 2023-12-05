import { Component , OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm !: FormGroup;

  constructor(private loginService: LoginService,
    private router: Router){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }
  
  onSubmit(){
    const res = this.loginService.login(this.loginForm.value);
    this.router.navigate(['/product']);
  
  }
}
