const a = () => {
    const text = document.getElementById("inner-text");
    const first = document.getElementById("first-num").value;
    const cal = document.getElementById("calcal").value;
    const second = document.getElementById("second-num").value;
  // if(cal == '+') {
  //     const sum = parseFloat(first) + parseFloat(second);
  //     text.innerText = sum;
  // }
  // else if(cal == '-') {
  //     const sub = first - second;
  //     text.innerText = sub;
  // }
  // else if(cal == '*') {
  //     const mul = first * second;
  //     text.innerText = mul;
  // }

  // else {
  //     const nanugee = first / second;
  //     text.innerText = nanugee;
  // }
switch (cal) {
    case "+":
        const sum = parseFloat(first) + parseFloat(second);
        text.innerText = sum;
        console.log(first);
        console.log(second);
        console.log(cal);
        console.log(sum);
        break;

    case "-":
        const sub = first - second;
        text.innerText = sub;
        break;

    case "*":
        const mul = first * second;
        text.innerText = mul;
        break;
    
    case "/":
        const nanugee = first / second;
        text.innerText = nanugee;
        break;
    }
};
