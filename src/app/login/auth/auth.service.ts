import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado: Subject<boolean> = new Subject<boolean>()

  constructor() { }
  
  fazerLogin() {
    this.usuarioAutenticado.next(true);
  }
}
