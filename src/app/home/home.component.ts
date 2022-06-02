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


  constructor(private service: StatusService) {
  }

  ngOnInit(): void {
    this.getAllStatus();
  }

  getAllStatus(): void {
    this.service.read().subscribe(
      (resposta: any) => {
        this.status = resposta.content;
        // this.datasource = new MatTableDataSource(this.usuarios);
        // this.snackbarService.showSuccess('Registro carregados com sucesso!');
      },
      (err) => {
        console.log('Erro ao carregar lista de statuss');
      }
    );
  }

}
