import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './login.page.html',
    styleUrl: './login.page.scss'
})
export class LoginPage implements OnInit {
    loading = false;
    submitted = false;
    form!: FormGroup;

    constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private authService: AuthService, private router: Router) {

    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            admin: ['true']
        });
    }

    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        this.authService.login(this.form.controls['admin'].value)
            .pipe(first())
            .subscribe({
                next: () => {
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                    this.router.navigateByUrl(returnUrl);
                },

            });
    }
}
