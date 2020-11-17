import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {
  loading: boolean;
  product:any = {};

  constructor(private http: HttpClient,) {
    this.loading = true
   }

  ngOnInit() {
    this.http.get("https://hack.kunderlabs.com/exam/telecom/api/products/new").subscribe(
      (res) => {
        this.product = res["product"]
        this.loading = false
        console.log(res)
      }
    )
  }
}
