import {Component} from '@angular/core';
import {ServerService} from '../services/server.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'server',
  templateUrl: 'server.component.html',
  styleUrls: ['server.component.css'],
  providers: [ServerService]
})

export class ServerComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  constructor(private serverService: ServerService) {}
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  // onSave() {
  //   this.serverService.storeServers(this.servers)
  //   .subscribe(
  //     (response) => console.log(response),
  //     (error) => console.log(error)
  //   );
  // }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
