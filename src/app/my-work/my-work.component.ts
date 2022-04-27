import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  projects = [
    {
      name: 'El POLLO LOCO',
      img: 'assets/images/Option 1.png',
      categorie: 'javascript',
      url: 'http://majd-alkhouri.developerakademie.com/El%20Pollo%20Loco',
    },
    {
      name: 'JOIN',
      img: 'assets/images/logo2.png',
      categorie: 'javascript',
      url: '',
    },
    {
      name: 'Pokédex',
      img: 'assets/images/POKEMON.jpg',
      categorie: 'javascript',
      url: '',
    },

    {
      name: 'Tic tac toe',
      img: 'assets/images/xo.jpg',
      categorie: 'javascript',
      url: '',
    },

    {
      name: 'Ring Of Fire',
      img: 'assets/images/images.jpg',
      categorie: 'angular',
      url: '',
    },

    {
      name: 'Ring Of Fire',
      img: 'assets/images/images.jpg',
      categorie: 'angular',
      url: '',
    },

  ];

  categorie = 'all';


  getFilterProjects(){
    if (this.categorie !== 'all') {
        return this.projects.filter(
        (project) => project.categorie == this.categorie
      );
    } else {
      return this.projects;
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
