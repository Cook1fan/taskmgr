import { OverlayContainer } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    squareState: string;
    darkTheme = false;

    constructor(
        private overlayContainer: OverlayContainer
    ) {

    }

    switchTheme(dark) {
        this.darkTheme = dark;
        this.overlayContainer.themeClass = dark ? 'myapp-dark-theme' : null;
    }

}
