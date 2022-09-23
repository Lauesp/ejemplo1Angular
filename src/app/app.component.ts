import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo1Angular';

  pelicula={
    titulo:'The Batman',
    fechalanzamiento:new Date(),
    precio:100.50,
  }

  duplicarvalor(x:number):number{
    return x*2;
  }
}
