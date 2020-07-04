import { Directive, OnInit, Self } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Directive({
  selector: '[bindQueryParams]'
})
export class BindQueryParamsDirective implements OnInit {
  constructor(@Self() private container: ControlContainer) {}

  ngOnInit(): void {
    if (location.search) {
      const queryParams = new URLSearchParams(location.search);
      const value = (Object as any).fromEntries((queryParams as any).entries());

      this.container.control?.patchValue(value);
    }
  }
}
