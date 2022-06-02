import {Component, OnInit} from '@angular/core';
import {StatusService} from "../service/status.service";
import {ServiceStatus} from "../model/service-status";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  status: ServiceStatus[] = [];
  amarela: boolean = false;
  bolaVerde: boolean = false;
  vermelha: boolean = false;

  constructor(private service: StatusService) {
  }

  ngOnInit(): void {
    this.getAllStatus();
  }

  getAllStatus(): void {
    this.service.read().subscribe(
      (resposta: any) => {
        this.status = resposta.content;
        this.verificarStatus()
      },
      (err) => {
        console.log('Erro ao carregar lista de status', err);
      }
    );
  }

  verificarStatus() {
    this.status.forEach((status) => {
      if ((status.statusServico?.includes("imagens/bola_verde_P.png")
        && !status.unavailable?.trim().includes("Indisponivel"))) {
        console.log("Disp ? " + status.unavailable)
        this.bolaVerde = true;
      } else {
        this.bolaVerde = false;
      }
    })
  }

}
