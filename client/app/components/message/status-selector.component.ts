import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'status-selector',
	templateUrl: `
		<select #sel (change)="select.emit(sel.value)">
			<option *ngFor="let status of statues>
				{{ status }}
			</option>
		</select>
	`
})
export class StatusComponent implements OnInit {
	@Output() select = new EventEmitter();
	statuses = ['started', 'completed'];

	constructor() { }

	ngOnInit() { 
		this.select.emit(this.statuses[0]);
	}

}
