function humanReadable(s) {
    if ( s < 0 || s > 360000 ) {
      return null;
    }
    h = Math.floor( s / 3600 );
    s -= h * 3600;
    if ( h < 10 ) {
      h = '0' + h;
    }
    m = Math.floor( s / 60 );
    s -= m * 60;
    if ( m < 10 ) {
      m = '0' + m;
    }
    if ( s < 10 ) {
      s = '0' + s;
    }
    return h + ':' + m + ':' + s;
  }
  console.log(humanReadable(213231))