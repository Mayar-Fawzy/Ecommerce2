import { inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Environment } from '../../Environment/Environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 
  private readonly _Router = inject(Router);
  constructor(private http: HttpClient) {}

}
