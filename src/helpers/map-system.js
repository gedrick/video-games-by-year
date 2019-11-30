export default function mapSystem(system) {
  switch (system) {
    case '360':
    case 'X360':
    case 'Xbox 360':
      return 'XB360';
    case 'MD':
      return 'MegaDrive';
    case 'N3DS':
    case '3DS':
    case '3DSVC':
    case '3DS eShop':
      return '3DS';
    case 'Amazon Fire':
    case 'Amazon Fire TV':
    case 'Fire':
    case 'FireOS':
      return 'Fire TV';
    case 'Android':
    case 'Droid':
    case 'Android (operating system)':
    case 'And':
      return 'Android';
    case 'Mac':
    case 'MacOS':
    case 'OS X':
      return 'Mac OS';
    case 'DC':
      return 'Dreamcast';
    case 'Lin':
    case 'Linux':
      return 'Linux';
    case 'iOS':
    case 'Apple Watch':
      return 'iOS';
    case 'DSiWare':
    case 'NDS':
    case 'DS':
      return 'DS';
    case 'NS':
    case 'Nintendo Switch':
      return 'Switch';
    case 'PS2':
      return 'PS2';
    case 'PS3':
      return 'PS3';
    case 'PS4':
      return 'PS4';
    case 'PSVita':
    case 'Vita':
      return 'PSVita';
    case 'XBO':
      return 'Xbox One';
    case 'PSVR':
    case 'PlayStation VR':
      return 'PSVR';
    case 'Oculus Rift':
      case 'Rift':
    case 'HTC Vive':
      return 'VR';
    case 'PSP':
      return 'PSP';
    case 'PSN':
      return 'PSN';
    case 'SNES':
      return 'SNES';
    case 'Steam':
    case 'Win':
    case 'Win 10':
      return 'PC';
    case 'Wii U':
    case 'WiiU':
    case 'WiiUVC':
      return 'WiiU';
    case 'Wii':
    case 'WiiWare':
      return 'Wii';
    case 'XBLA':
      return 'Xbox Live Arcade';
    case 'WP':
      return 'Windows Phone';
    case 'Stadia':
      return 'Stadia';
    case 'BlackBerry Tablet OS':
    case 'Blackberry 10':
      return 'Blackberry';
    case 'iPod':
      return 'Apple iPod';
    case 'GBA':
      return 'GBA';
    case 'GCN':
      return 'Gamecube';
    default:
      return system;
  }
}
