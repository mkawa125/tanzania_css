import { EventEmitter, NgZone, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
/**
 * Slick component
 */
export declare class SlickComponent implements AfterViewInit, OnDestroy {
    private el;
    private zone;
    config: any;
    afterChange: EventEmitter<any>;
    beforeChange: EventEmitter<any>;
    breakpoint: EventEmitter<any>;
    destroy: EventEmitter<any>;
    init: EventEmitter<any>;
    slides: any;
    $instance: any;
    private initialized;
    /**
     * Constructor
     */
    constructor(el: ElementRef, zone: NgZone);
    /**
     * On component destroy
     */
    ngOnDestroy(): void;
    /**
     * On component view init
     */
    ngAfterViewInit(): void;
    /**
     * init slick
     */
    initSlick(): void;
    addSlide(slickItem: SlickItemDirective): void;
    removeSlide(slickItem: SlickItemDirective): void;
    /**
     * Slick Method
     */
    slickGoTo(index: number): void;
    slickNext(): void;
    slickPrev(): void;
    slickPause(): void;
    slickPlay(): void;
    unslick(): void;
}
export declare class SlickItemDirective implements AfterViewInit, OnDestroy {
    el: ElementRef;
    private carousel;
    constructor(el: ElementRef, carousel: SlickComponent);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
