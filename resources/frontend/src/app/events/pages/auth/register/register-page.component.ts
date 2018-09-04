import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
//import { AuthModel } from "../models/auth-model";
//import emailMask from 'text-mask-addons/dist/emailMask';
//import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
//import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import { AuthService } from '../../../../core/services';
//import { environment } from "../../../environments/environment";

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: [
        './register-page.component.less'
    ]
})
export class RegisterPageComponent {
    register = {
        name: '',
        email: '',
        birthday: '',
        gender: '',
        password:'',
        password_confirmation: '',
        registration: '',
        type: ''
    };

    public signupForm: FormGroup;
    public loading: boolean = false;
    public sexos = [
        { label: 'Masculino', value: 'm' },
        { label: 'Feminino', value: 'f' }
    ];
    public vinculos = [
        { label: 'Aluno', value: 0 },
        { label: 'Servidor', value: 1 },
        { label: 'Comunidade', value: 2 }
    ];
    public fallbackImage = '/dist/assets/img/avatars/avatar1.jpg';
    public imageUploadData: string = null;
    //public phoneMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    //public emailMask = emailMask;
    //public dateMask = { mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/], pipe: createAutoCorrectedDatePipe('dd/mm/yyyy') };
    //public registrationMask = { mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/] };

    constructor(
        activatedRroute: ActivatedRoute, 
        private route: Router, 
        fb: FormBuilder, 
        private auth: 
        AuthService, 
        public snackBar: MatSnackBar
    ) {
        if(this.auth.isAuthenticated()) this.auth.logout().subscribe(()=>{})
        this.signupForm = fb.group({
            email: null,
            password: ['', [Validators.required, Validators.minLength(6)]],
            password_confirmation: null,
            name: null,
            birthday: null,
            gender: null,
            address: null,
            phone: null,
            type: null,
            registration: null
        });
    }

    ngOnInit() { }

    get imageSrc() {
        if (this.imageUploadData != null) {
            return this.imageUploadData;
        }
        return this.fallbackImage;
    }

    removeImagem(imgFileInput: any) {
        this.imageUploadData = imgFileInput.value = null;
    }

    previewImage($event) {
        this.lerImagem($event, (result) => {
            this.imageUploadData = result;
        });
    }

    lerImagem($event, doneCallback) {
        var imgFile = $event.target.files[0],
            reader = new FileReader();

        reader.onloadend = function () {
            doneCallback(reader.result);
        };

        reader.readAsDataURL(imgFile);
    }

    onSubmit(value: any) {
        this.loading = true;
        let data = value as any;
        data.image = this.imageUploadData;
        // this.auth.register(data).subscribe((user) => {
        //     this.auth.login(data.email, data.password).subscribe((t)=>{
        //         this.loading = false;
        //         this.route.navigate(['/core/events']);
        //     });
        // }, (error: HttpErrorResponse) => {
        //     this.loading = false;
        //     let _error = error.error;
        //     let message = 'Ops! Algo deu errado, tente novamente.';
        //     if (error.status == 422 && _error.errors['email']) {
        //         message = _error.errors['email'][0];
        //     }
        //     this.snackBar.open(message, null, {
        //         duration: 3000
        //     });
        // });
    }
}
