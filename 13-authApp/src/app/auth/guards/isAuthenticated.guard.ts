import { inject } from '@angular/core';
import type { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService = inject( AuthService );
  const router = inject( Router );

  if (authService.authStatus() === AuthStatus.authenticated) {
    return true;
  }

  //const url = state.url;
  //localStorage.setItem('url', url);
  router.navigateByUrl('/auth/login');
  return false;
};
