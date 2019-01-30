import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DetailsService {
	public array = [];

	constructor() {}
	private subject = new Subject<any>();

	sendMessage(obj) {
		this.array.push(obj);
		this.subject.next(this.array);
	}

	getMessage(): Observable<any> {
		return this.subject.asObservable();
	}

	// addTodo(obj) {
	// 	this.array.push(obj);
	// }
}
