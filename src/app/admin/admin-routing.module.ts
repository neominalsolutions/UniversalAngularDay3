import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';

const routes: Routes = [
  {
    path: '', // admin
    component: AdminComponent,
    children: [
      {
        path: 'dashboard', // admin/dashboard
        component: DashboardPageComponent,
        data: {
          title: 'Dashabord Page',
        },
      },
      {
        path: 'user-detail/:id',
        component: UserDetailPageComponent,
        data: {
          title: 'User Detail Page',
        },
      },
      {
        path: 'user-detail', // admin/user-detail?name=ali&surname=can
        component: UserDetailPageComponent,
        data: {
          title: 'User Detail Page',
          permissions: [
            {
              name: 'Edit',
            },
            { name: 'Update' },
          ],
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
