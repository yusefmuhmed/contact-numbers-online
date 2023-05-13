# Angular 2 / Angular 14 / Search Filter Pipe


> Filter search items

Multi-criteria search in array of objects. Separate with blank space.

Angular 2 filter to make custom search.


![demo-image](http://i.imgur.com/dI5Mzvq.gif)



## Install

```
npm i multi-search-pipe --save
```
```
yarn add multi-search-pipe
```
## Usage

Import `MultiSearchPipeModule` to your module

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app';

import { MultiSearchPipeModule } from 'multi-search-pipe';

@NgModule({
  imports: [BrowserModule, MultiSearchPipeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

And use pipe in your component after declaring and initializing it in your component:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'example-app',
  template: `
    <div>
        <input type="text" [(ngModel)]="term">
        <div *ngFor = "let item of items | multiSearch:term" >
          <p>
            {{item.name}}
          </p>
        </div>

    </div>  
  `
})

export class AppComponent {
  items: string[] = [{ name: "archie" }, { name: "jake" }, { name: "richard" }];
  term = '';
}
```

## Support multi-search-pipe

multi-search-pipe is completely free and open-source. If you find it useful, you can show your support by 🌟 it or sharing it in your social network.

## Contribute

Feel free to contribute ^^

## License

MIT 

## Donation

<a href="https://www.buymeacoffee.com/mimounidan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="⛽ Buy Me A Coffee ! " height="41" width="174"></a>

