import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [AdminComponent, DashboardPageComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
