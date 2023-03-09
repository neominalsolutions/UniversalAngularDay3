import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './admin/pages/dashboard-page/dashboard-page.component';
import { NotFoundPageComponent } from './site/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  // {
  //   path: 'dashboard',
  //   component: DashboardPageComponent,
  // },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    loadChildren: () => import('./site/site.module').then((m) => m.SiteModule),
  },
  {
    path: '**', // en sona yazılır sebebi üstteki routeları ezer yoksa.
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
