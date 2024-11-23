import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { debounce, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const handleInput = fromEvent(this.inputTxt.nativeElement, 'keyup')
    handleInput.pipe(debounce((data) => interval(100))).subscribe((value) => console.log(value))
  }
  title = 'angular-tutorial';
  @ViewChild('txtInput')
  inputTxt!: ElementRef;
}
