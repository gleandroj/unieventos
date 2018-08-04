import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class ToastService {

    private defaultConfig = {
        timeOut: 3000,
        progressBar: true
    };

    constructor(private toastr: ToastrService) {
    }

    success(message, title?, options?) {
        return this.toastr.success(message, title ? title : 'Sucesso!', Object.assign({}, options, this.defaultConfig));
    }

    error(message, title?, options?) {
        return this.toastr.error(message, title ? title : 'Oops!', Object.assign({}, options, this.defaultConfig));
    }

    alert(message, title?, options?) {
        return this.toastr.warning(message, title ? title : 'Alerta!', Object.assign({}, options, this.defaultConfig));
    }

    info(message, title?, options?) {
        return this.toastr.info(message, title ? title : 'Alerta!', Object.assign({}, options, this.defaultConfig));
    }

    serverResponseFail() {
        this.error('Algo deu errado, contate o administrador.');
    }

    updateSuccess() {
        this.success('Informações alteradas com sucesso.');
    }

    createSuccess() {
        this.success('Informações cadastradas com sucesso.');
    }
}
