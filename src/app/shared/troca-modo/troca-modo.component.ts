import { Component } from '@angular/core';

@Component({
  selector: 'btn-troca-modo',
  templateUrl: './troca-modo.component.html',
  styleUrls: ['./troca-modo.component.css']
})
export class TrocaModoComponent {
  public trocaModo(){
    document.body.classList.toggle('ligthMode')
  }
}
