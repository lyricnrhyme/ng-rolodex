import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  memes: string[] =['https://media1.tenor.com/images/d2c70f7f64587dc3b7c86ee06756fb4a/tenor.gif?itemid=4294979','http://gif-finder.com/wp-content/uploads/2015/12/Tim-Eric-Mind-Blown.gif', 'http://i.imgur.com/oQ2yUwA.gif', 'https://i.gifer.com/7gMA.gif', 'https://media.giphy.com/media/ndSat6hAmqXnO/giphy.gif','https://media.giphy.com/media/9uwnYUDw342pq/giphy.gif', 'https://media.tenor.com/images/d320022232cbe60fb7f342be86806cfa/tenor.gif', 'https://media.giphy.com/media/4pMX5rJ4PYAEM/giphy.gif', 'https://i.gifer.com/SKbd.gif','https://media1.tenor.com/images/b204be74c21b48d8a4e2d49ea72d4154/tenor.gif?itemid=6211667','https://media.giphy.com/media/GWNBoSxSpt7Ik/giphy.gif','https://vignette.wikia.nocookie.net/spongebob/images/f/fe/Eh_Eh_Eh_Eh..._SpongeBob.gif/revision/latest?cb=20120329023354','https://media.giphy.com/media/qnp7r8H741PO/giphy.gif']

  mouseEnter(){
    (document.getElementById('pic') as HTMLElement).src = this.memes[Math.floor(Math.random()*this.memes.length)]
  }
  mouseLeave(){
    (document.getElementById('pic') as HTMLElement).src = this.memes[Math.floor(Math.random()*this.memes.length)]}

  ngOnInit() {
  }

}
