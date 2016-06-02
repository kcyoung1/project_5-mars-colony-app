import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { EncounterService } from '../shared/services';
import { Encounter } from '../shared/models';

@Component({
  moduleId: module.id,
  selector: 'app-encounters',
  templateUrl: 'encounters.component.html',
  styleUrls: ['encounters.component.css'],
  providers: [EncounterService],
  directives: [ROUTER_DIRECTIVES]
})
export class EncountersComponent implements OnInit {

  public encounter: Encounter;

  constructor(
    private router: Router,
    private encounterService: EncounterService
  ) {}

  ngOnInit() {
    this.encounterService.getEncounters().then( encounters => this.encounter = encounters )
  }

}
