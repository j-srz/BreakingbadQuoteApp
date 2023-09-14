import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { BreakingbadApp } from './src/breakingbad/breakingbad-app';

document.querySelector('#app').innerHTML = `

    <h1 id="app-title">Vite+JS</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>

  </div>
`;

const element = document.querySelector('.card');

BreakingbadApp( element );

