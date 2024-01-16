import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {CrudService} from "../../components/exos/crud/crud.service";

export const crudGuardGuard: CanActivateFn = () => {
  const authService = inject(CrudService);

  return authService.isAuth.value;
};
