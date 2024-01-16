import {Component, OnInit} from '@angular/core';
import {CrudService, IRegister} from "../crud.service";



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  user: Omit<IRegister, 'password'> = {
    lastname:'',
    firstname:'',
    username:'',
    birthdate: null
  }

  series = ['Stranger Things', 'The Crown', 'The Witcher','Game of Thrones', 'Breaking Bad', 'The Office'];
  newSerie = '';

  constructor(private _authService: CrudService) {}

  getDetails() {
    this.user = this._authService.getUserInfos();
  }

  ngOnInit() {
    this.getDetails();
  }

  addSerie() {
    if (this.newSerie) {
      this.series.push(this.newSerie);
      this.newSerie = '';
    }
  }
}
