import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserLogService} from '../user-log.service';
import {CustomResponse} from '../models/custom-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userLogs;
  public createLog;
  @Output() messageEvent = new EventEmitter<any>();
  constructor(private userLogsService: UserLogService) {
    this.userLogs = [];
  }

  ngOnInit(): void {
    this.getLogs();
  }
  openCreateLog(){
    this.createLog = true;
    this.messageEvent.emit(this.userLogs);
  }
  getLogs(){
    this.userLogsService.getLogs().subscribe((json: CustomResponse) => {
      if (json){
        this.userLogs = json;
      }
    });
  }
}
