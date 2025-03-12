import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone:false,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';

  constructor(private router: Router) {} // حقن Router

  onSubmit() {
    console.log('Email:', this.email);

    // هنا يمكنك إضافة منطق التحقق من صحة البيانات (مثل الاتصال بخادم)
    // إذا كانت البيانات صحيحة، قم بتوجيه المستخدم إلى صفحة الـ Home
    this.router.navigate(['/home']);
  }

  logout() {
    // توجيه المستخدم إلى صفحة تسجيل الدخول
    this.router.navigate(['/login']);
  }
}
