import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInputLocalRef') serverContentField: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameValue: string) {
    this.serverCreated.emit({
      serverName: serverNameValue,
      serverContent: this.serverContentField.nativeElement.value
    });
  }

  onAddBlueprint(serverNameValue: string) {
    this.blueprintCreated.emit({
      blueprintName: serverNameValue,
      blueprintContent: this.serverContentField.nativeElement.value
    });
  }
}
