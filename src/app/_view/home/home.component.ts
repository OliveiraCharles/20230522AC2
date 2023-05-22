import { Component, OnInit } from '@angular/core';
import { Hamburger } from 'src/app/_model/hamburger';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  hamburgers: Hamburger[] = [];

  constructor(private service: ApiService) { }


  ngOnInit() {
    console.log('on init');

    // throw new Error('Method not implemented.');
    this.getHamburgers()
  }

  async getHamburgers() {
    await this.service.getAllBurger()
      .then((hamburgers) => {
        this.hamburgers = hamburgers;

        console.log(hamburgers);
        console.log(this.hamburgers);
      })
      .catch((err) =>
        console.log(err)
      );
  }

  async likeHamburger(hamburgerId: string) {
    await this.service.likeOneBurger(hamburgerId, {})
  }
}
