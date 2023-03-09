import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SharedModule } from '../shared/shared.module';
import { SiteModule } from '../site/site.module';
import { AdminSharedFeatureModule } from './pages/dashboard-page/features/admin-shared-feature/admin-shared-feature.module';
import { SiteSharedFeatureModule } from '../site/pages/features/site-shared-feature/site-shared-feature.module';
import { UserGridComponent } from './pages/features/components/user-grid/user-grid.component';
import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';

@NgModule({
  declarations: [AdminComponent, DashboardPageComponent, UserDetailPageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    UserGridComponent,
    // AdminSharedFeatureModule,
    // SiteModule,
    SiteSharedFeatureModule,
  ],
  exports: [],
})
export class AdminModule {}
