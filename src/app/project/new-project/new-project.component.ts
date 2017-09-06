import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef, OverlayContainer } from '@angular/material';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(
    @Inject(MD_DIALOG_DATA) private data,
    private mdDialogRef: MdDialogRef<NewProjectComponent>,
    private overlayContainer: OverlayContainer
  ) { }

  ngOnInit() {
    console.log(this.data);
    this.overlayContainer.themeClass = this.data.dark ? 'myapp-dark-theme' : null;
    console.log(this.overlayContainer.themeClass);
  }

  onClick() {
    this.mdDialogRef.close('please close');
  }

}
