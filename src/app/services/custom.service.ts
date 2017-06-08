import {Injectable} from '@angular/core';

@Injectable()
export class CustomService {

  showAlert() {
    alert('Hello World!')
    console.log('Функция "showAlert" - работает!');
  }

  addition(a,b) {
    return alert(a + b);
  }

  division(a,b) {
    return alert(a / b);
  }

  customMathExpression(a,b,c) {
    return alert(
      (a + b) * c
    );
  }

}
