import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGridComponent } from '../../../features/components/user-grid/user-grid.component';

// eğer standoalone kullanıcaksa feature module gerek kalmıyor
@NgModule({
  // declarations: [UserGridComponent],
  // imports: [CommonModule],
  // exports: [UserGridComponent],
})
export class AdminSharedFeatureModule {}
