let isOn = true;
let isPlugged = true;

if (isOn && isPlugged) {
  console.log("Lamp is turned on.");
} else if (isOn && !isPlugged) {
  console.log("Lamp is turned on, but not plugged.");
} else {
  console.log("Lamp is turned off.");
}

// Order numbers
let a = 5;
let b = 8;
let c = 90;

if (a >= b && a >= c) {
  if (b >= c) {
    console.log(`${a}, ${b}, ${c}`);
  } else {
    console.log(`${a}, ${c}, ${b}`);
  }
} else if (b >= a && b >= c) {
  if (a >= c) {
    console.log(`${b}, ${a}, ${c}`);
  } else {
    console.log(`${b}, ${c}, ${a}`);
  }
} else if (c >= a && c >= b) {
  if (a >= b) {
    console.log(`${c}, ${a}, ${b}`);
  } else {
    console.log(`${c}, ${b}, ${a}`);
  }
}
