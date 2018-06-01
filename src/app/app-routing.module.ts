import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

const routes: Routes = [
    {
        path: 'clients',
        loadChildren: './clients/clients.module#ClientsModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'purchases',
        loadChildren: './purchases/purchases.module#PurchasesModule',
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
        AuthGuard,
        AuthService
  ]
})
export class AppRoutingModule { }