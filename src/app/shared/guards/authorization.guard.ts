import {CanActivateFn, Router} from '@angular/router';
import {GuardsService} from "../../components/demos/guards/guards.service";
import {inject} from "@angular/core";

export const authorizationGuard: CanActivateFn = () => {
  const authService = inject(GuardsService);
  const router = inject(Router);
  const isLoggedIn = authService.isLoggedIn;

  if (!isLoggedIn) {
    router.navigate(['/login']);
    return false;
  } else {
    return true;
  }
};
