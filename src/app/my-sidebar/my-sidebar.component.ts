import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-sidebar',
  templateUrl: './my-sidebar.component.html',
  styleUrls: ['./my-sidebar.component.css']
})
export class MySidebarComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  gotoPoemPageById(_id: string) : void {
    console.log(`gotoPoemPageById , id = ${_id}`);

    switch (parseInt(_id)) {
      case 2:
        this.router.navigate(['poems','poem1']); // 滿江紅
        break;
      case 3:
        this.router.navigate(['poems','poem2']); // 正氣歌
        break;
      default:
        this.router.navigate(['poems']); // 後赤壁賦
        break;
    }
  }

}
