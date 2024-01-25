import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth/auth.service';
import { take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  usuarioAutenticado: boolean = false

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.usuarioAutenticado$.pipe().subscribe(usuarioAutenticado => 
      this.usuarioAutenticado = usuarioAutenticado)
  }

}
