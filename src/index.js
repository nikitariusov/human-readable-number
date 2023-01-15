module.exports = function toReadable (number) {
  const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }

  function teensNumber(number) {
    if (number >= 0 &&
      number <= 20 ||
      number == 30 ||
      number == 40 ||
      number == 50 ||
      number == 60 ||
      number == 70 ||
      number == 80 ||
      number == 90 ) {
      return numbers[number]
    } else {
      return numbers[number.toString().split('')[0] + '0'] + ' ' + numbers[number.toString().split('')[1]]
    }
  }

  function hundredsNumber(number) {
    if (number.toString().slice(-2) == '00') {
      return numbers[number.toString().split('')[0]] + ' ' + 'hundred'
    } else {
      return numbers[number.toString().split('')[0]] + ' ' + 'hundred' + ' ' + teensNumber(parseInt(number.toString().slice(-2)))
    }
  }

  if (`${number}`.length == 1) {
    return numbers[number]
  } else if (`${number}`.length == 2) {
    return teensNumber(number)
  } else if (`${number}`.length == 3) {
    return hundredsNumber(number)
  }
}
