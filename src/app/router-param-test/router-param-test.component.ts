import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-param-test',
  templateUrl: './router-param-test.component.html',
  styleUrls: ['./router-param-test.component.css']
})
export class RouterParamTestComponent implements OnInit {

  routeParamStr: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      // alert(`ngOnInit , 路由參數 = ${params.id}`)
      console.log(`ngOnInit , 路由參數 = ${params.id}`)
      this.routeParamStr = params.id;
    });
  }

}
