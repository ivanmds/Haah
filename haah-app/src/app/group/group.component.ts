import { Component, OnInit } from '@angular/core';
import { GroupService } from './group.service';
import { Group } from './group.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html'
})
export class GroupComponent implements OnInit {

  groups: Group[];

  constructor(private readonly groupService: GroupService) { }

  ngOnInit(): void {
    console.log("ola groups");
    this.groupService.findAll().subscribe(groups => this.groups = groups);
  }

}
