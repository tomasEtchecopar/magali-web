import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: { 'class': 'reveal' },
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() appReveal: string = 'default';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.appReveal === 'hero') {
      this.el.nativeElement.classList.add('is-visible', 'reveal-hero');
      return;
    }

    this.el.nativeElement.classList.add(`reveal-${this.appReveal}`);

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('is-visible');
          this.observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.1 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
