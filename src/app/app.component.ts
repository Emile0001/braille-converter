import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'braille-converter';

  inputText: string = '';
  outputText: string = '';

  convertToBraille() {
    const brailleMap: { [key: string]: string } = {
      a: '⠁',
      b: '⠃',
      c: '⠉',
      d: '⠙',
      e: '⠑',
      f: '⠋',
      g: '⠛',
      h: '⠓',
      i: '⠊',
      j: '⠚',
      k: '⠅',
      l: '⠇',
      m: '⠍',
      n: '⠝',
      o: '⠕',
      p: '⠏',
      q: '⠟',
      r: '⠗',
      s: '⠎',
      t: '⠞',
      u: '⠥',
      v: '⠧',
      w: '⠺',
      x: '⠭',
      y: '⠽',
      z: '⠵',
      ' ': ' ',
      '.': '⠲',
      ',': '⠂',
      ';': '⠆',
      ':': '⠒',
      '!': '⠖',
      '?': '⠦',
      '(': '⠐⠣',
      ')': '⠐⠜',
      '-': '⠤',
      _: '⠠⠤',
      '@': '⠈⠜',
      '&': '⠐⠅',
      $: '⠎⠉',
      '#': '⠼⠲',
      '+': '⠖',
      '*': '⠯',
      '/': '⠌',
      '%': '⠨',
      '^': '⠬',
      '=': '⠐',
    };
    this.outputText = '';
    for (let i = 0; i < this.inputText.length; i++) {
      const char = this.inputText.charAt(i).toLowerCase();
      const brailleChar = brailleMap[char] || char;
      this.outputText += brailleChar;
    }
  }
}
