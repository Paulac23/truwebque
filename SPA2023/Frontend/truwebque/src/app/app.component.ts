import { Component, HostListener, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  /*El nombre del selector es lo que llama el html*/
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'truwebque';

/*  Se utiliza para poder limpiar el local storage cuando se cierra la pagina

  @HostListener('window:beforeunload')
  clearLocalStorage() {
    localStorage.clear();
  } */

}


