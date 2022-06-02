import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  title_rodape: string = "Rogério Tadeu dos Reis"

  constructor() { }

  ngOnInit(): void {
  }

}
