'use strict'

// Function definition
const closestMatch = function (array, text) {
  var match = []
  for (var a = 0; a < array.length; a++) {
    var pin = text
    for (var b = 0; b < array[a].length; b++) {
      for (var c = 0; c < pin.length; c++) {
        if (array[a][b].toLowerCase() === pin[c].toLowerCase()) {
          match[a] = [match[a], array[a][b]].join('')
          var index = pin.indexOf(array[a][b])
          pin = pin.substr(0, index) + '' + pin.substr(index + 1)
        } else {
          match[a] = [match[a], ''].join('')
        }
      }
    }
  }
  var max_len = 0
  var max_index = 0
  for (var x = 0; x < match.length; x++) {
    if (match[x].length > max_len) {
      max_len = match[x].length
      max_index = x
    }
  }
  return array[max_index]
}

// Function execution
closestMatch(['carrot', 'kwacce huru', 'apple', 'tumfa', 'Bichi Primary Health Center'], 'phc')
