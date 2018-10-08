import './index.css';
import {test} from "./test";

import { cube } from './math.js';

function component() {
  var element = document.createElement('pre');

  element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + cube(5)].join(
    '\n\n'
  );
  if (process.env.NODE_ENV !== 'production') {
    console.log(process.env.NODE_ENV);
  }
  test("Heyyyy");
  return element;
}

document.body.appendChild(component());
