import {Component, OnInit} from '@angular/core';
import {StatusService} from "../service/status.service";
import {ServiceStatus} from "../model/service-status";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  status: ServiceStatus[] = [
    {"authorizing": "RS"},
    {"statusServico": "imagens/bola_verde_P.png"},
    {"consultationDate": new Date()},
    {"unavailable": 1}
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.status;
  }

}
