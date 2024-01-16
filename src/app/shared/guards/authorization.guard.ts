import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {GuardsService} from "../../components/demos/guards/guards.service";

export const authorizationGuard: CanActivateFn = () => {
  const authService = inject(GuardsService);
  const router = inject(Router)
  const isLoggedIn = authService.isLoggedIn

  if (!isLoggedIn) {
    router.navigate(['/login']);
  }

  return true;
};
