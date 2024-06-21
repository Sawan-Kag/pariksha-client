import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
  ],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private snack: MatSnackBar,
    private router: Router,
    private auth: AuthService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    ) {
      this.snack.open('Username is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.snack.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    this.auth
      .login(this.loginData.username, this.loginData.password)
      .subscribe({
        next: (data: any) => {
          this.storageService.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.storageService.getUser().roles;
          if (this.roles.includes('ROLE_ADMIN')) {
            this.router.navigate(['admin']);
            this.auth.loginStatusSubject.next(true);
          } else if (this.roles.includes('ROLE_USER')) {
            //normal user dashbaord
            // window.location.href = '/user-dashboard';
            this.router.navigate(['user-dashboard/0']);
            this.auth.loginStatusSubject.next(true);
          } else {
            this.auth.logout();
          }
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        },
      });

    //   //request to server to generate token
    //   this.login.generateToken(this.loginData).subscribe(
    //     (data: any) => {
    //       console.log('success');
    //       console.log(data);

    //       //login...
    //       this.login.loginUser(data.token);

    //       this.login.getCurrentUser().subscribe((user: any) => {
    //         this.login.setUser(user);
    //         console.log(user);
    //         //redirect ...ADMIN: admin-dashboard
    //         //redirect ...NORMAL:normal-dashboard
    //         if (this.login.getUserRole() == 'ADMIN') {
    //           //admin dashboard
    //           // window.location.href = '/admin';
    //           this.router.navigate(['admin']);
    //           this.login.loginStatusSubject.next(true);
    //         } else if (this.login.getUserRole() == 'NORMAL') {
    //           //normal user dashbaord
    //           // window.location.href = '/user-dashboard';
    //           this.router.navigate(['user-dashboard/0']);
    //           this.login.loginStatusSubject.next(true);
    //         } else {
    //           this.login.logout();
    //         }
    //       });
    //     },
    //     (error) => {
    //       console.log('Error !');
    //       console.log(error);
    //       this.snack.open('Invalid Details !! Try again', '', {
    //         duration: 3000,
    //       });
    //     }
    //   );
  }

  reloadPage(): void {
    window.location.reload();
  }

  navigate(link: string) {
    window.location.href = `${link}`;
  }
}
