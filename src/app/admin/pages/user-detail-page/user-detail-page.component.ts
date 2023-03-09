import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.css'],
})
export class UserDetailPageComponent implements OnInit {
  // sayfalar arası yönlendime yaparken sayfalardaki dinamik path değerlerini yönlendirme url yapılarını varsa user-defined data okumamız sağlan servis.

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    console.log('activatedRoute', this.activatedRoute);

    const param = this.activatedRoute.snapshot.params;
    const queryParams = this.activatedRoute.snapshot.queryParams;
    const userDefinedData = this.activatedRoute.snapshot.data;

    // this.activatedRoute.params.subscribe((p) => {
    //   console.log('p', p);
    // });

    console.log(
      'param',
      param,
      'queryParams',
      queryParams,
      'data',
      userDefinedData
    );
  }

  onRedirect() {
    const r = window.confirm('sayfadan çıkmak istediğinize eminmisiniz');
    if (r) this.router.navigate(['home']);
  }
}
