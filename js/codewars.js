// function areYouPlayingBanjo(name) {
//   if (name.startsWith('R') || name.startsWith('r')) {
//     return name + ' plays banjo';
//   }
//   return name + ' does not play banjo';
// }

// console.log(areYouPlayingBanjo('rsRrtyty'));

// =====================================================================

function neutralise(s1, s2) {
  if (s1.includes('+') && s2.includes('+')) {
    return `"+" against a "+" returns another "+"`;
  } else if (s1.includes('-') && s2.includes('-')) {
    return `"-" against a "-" returns another "-"`;
  } else if (s1.includes('-') && s2.includes('+')) {
    s1.reduce('-', '0');
    return `"+" against a "-" returns "0"`;
    //   } else (s1.includes('+') && s2.includes('-')) {
    //     s1.reduce('+', '0');
    //     return `"+" against a "-" returns "0"`;
    //   }
  }
}
console.log(neutralise('--++--', '++--++'));
