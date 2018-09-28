import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RadialScale, RadialBarIndicator } from 'nativescript-ui-gauge';

@Component({
	moduleId: module.id,
	selector: 'progressbar-circular',
	templateUrl: './progressbar-circular.component.html',
	styleUrls: ['./progressbar-circular.component.css']
})

export class ProgressbarCircularComponent implements AfterViewChecked, AfterViewInit, OnInit {
    @Input() size = 100;
    @Input() progress = 0;
    @Input() textColor: string = "#bfbfc4";
    @Input() fillColor: string = "#FDA458";
    @Input() fillBackgroundColor: string = "#efeff4";
    @Input() offset = 0;
    
    @ViewChild("scale") scaleElement: ElementRef;
    constructor() { 
        // this.updateView();
    }

    ngAfterViewChecked() {
        // this.updateView();
    }

    ngAfterViewInit() {
        // this.updateView();
    }

    ngOnInit() {
        // this.updateView();
    }

    updateView() {
        let scale = this.scaleElement.nativeElement as RadialScale;
        let barIndicator = scale.indicators.getItem(0) as RadialBarIndicator;
        barIndicator.indicatorStyle.fillColor = this.fillBackgroundColor;
    }

    get height() {
        return Math.min(this.size, 250);
    };
    get value() {
        return Math.min(this.progress, 100);
    };
    get text() {
        return `${this.value.toFixed()}%`;
    };
    get textSize() {
        return this.height / 3.5;
    };
}