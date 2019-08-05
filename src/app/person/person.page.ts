import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PersonService } from './person.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {
  user: {
    avatar: '',
    name: '',
    location: '',
  };
  constructor(
    private navCtrl: NavController,
    private route: Router,
    private personService: PersonService
  ) { }

  ngOnInit() {
    const currentUrl = this.route.url;
    const name = currentUrl.split('/')[2];
    this.personService.getInfoPerson(name).subscribe(res => {
      this.user = {
        avatar: res.avatar_url,
        name: res.name,
        location: res.location
      } || null;
    }, err => {
      console.log(err);
    });
  }

}
