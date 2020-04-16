import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {UserLog} from '../models/user-log';
import {UserLogService} from '../user-log.service';
import {CustomResponse} from '../models/custom-response';

@Component({
  selector: 'app-create-log',
  templateUrl: './create-log.component.html',
  styleUrls: ['./create-log.component.css']
})
export class CreateLogComponent implements OnInit {
  public userLog;
  @Input() userLogsList: any;
  constructor(private logService: UserLogService, el: ElementRef) {
    this.userLog = new UserLog();
    // console.log();
  }

  ngOnInit(): void {
  }
  createLog(){
    this.userLogsList.push({type : this.userLog.type, userId : this.userLog.userId, timeStamp : this.userLog.timeStamp});
    this.logService.createLog(this.userLogsList);
  }
}
