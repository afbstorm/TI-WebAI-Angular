import { Component } from '@angular/core';

interface test {
  msg: string,
  id: string,
  name: string
}
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  messages: test[]  = [
    {msg: 'text', id: 'jesuislid', name: 'Maud'},
    {msg: 'salut', id: 'coucou', name: 'Marc'}
  ];
  coucou: boolean = false;

  isCoucou() {
    this.coucou = !this.coucou;
  }
}
