import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone:false,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _Router: Router) { }

  // تعريف النموذج (FormGroup)
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]),
    mobile: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/) // تحقق من صحة رقم الهاتف المصري
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/) // تحقق من صحة كلمة المرور
    ])
  });

  // رسالة خطأ عامة
  errorMessage: string = '';

  // حالة التحميل
  isLoading: boolean = false;

  // دالة تنفيذ التسجيل
  submitRegisterForm() {
    if (this.registerForm.valid) {
      this.isLoading = true;

      // محاكاة عملية تسجيل (يمكن استبدالها بطلب HTTP)
      setTimeout(() => {
        this.isLoading = false;
        this._Router.navigate(['/login']); // توجيه المستخدم إلى صفحة تسجيل الدخول بعد التسجيل
      }, 2000);
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
    }
  }

  ngOnInit(): void {
  }
}