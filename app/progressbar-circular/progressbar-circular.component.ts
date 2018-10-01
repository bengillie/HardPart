import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'progressbar-circular',
	templateUrl: './progressbar-circular.component.html',
	styleUrls: ['./progressbar-circular.component.css']
})

export class ProgressbarCircularComponent {
    @Input() animationDuration = 600;
    @Input() barWidth = 0.17;
    @Input() fillBackgroundColor: string = "#e3e3e5";
    @Input() fillColor: string = "#0083ff";
    @Input() isAnimated: boolean = true;
    @Input() progress = 0;
    @Input() text: string;
    @Input() textColor: string = "#808080";

    constructor() {}

    get title() {
        if(this.text === undefined) {
            return `${this.progress.toFixed()}%`;
        }
        else {
            return this.text;
        }
    };
}