import { Injectable } from '@angular/core';

import { LocalStorageService } from './LocalStorage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private localStorageService: LocalStorageService) {}

  isAuthenticated(){
    const token = this.localStorageService.getToken();
    if(token){
      return true;
    }
    return false;
  }
  

  }

