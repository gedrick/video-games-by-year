export default function mapSystem(system) {
  switch (system) {
    case '360':
    case 'X360':
    case 'Xbox 360':
      return 'Xbox 360';
    case 'MD':
      return 'Sega MegaDrive';
    case 'N3DS':
    case '3DS':
    case '3DSVC':
    case '3DS eShop':
      return 'Nintendo 3DS';
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
      return 'Mac OS';
    case 'DC':
      return 'Sega Dreamcast';
    case 'Lin':
    case 'Linux':
      return 'Linux';
    case 'iOS':
    case 'Apple Watch':
      return 'Apple iOS';
    case 'DSiWare':
    case 'NDS':
      return 'Nintendo DS';
    case 'NS':
    case 'Nintendo Switch':
      return 'Nintendo Switch';
    case 'PS2':
      return 'Playstation 2';
    case 'PS3':
      return 'Playstation 3';
    case 'PS4':
      return 'Playstation 4';
    case 'PSVita':
    case 'Vita':
      return 'Playstation Vita';
    case 'XBO':
      return 'Xbox One';
    case 'PSVR':
    case 'PlayStation VR':
      return 'PlayStation VR';
    case 'Oculus Rift':
      case 'Rift':
    case 'HTC Vive':
      return 'VR';
    case 'PSP':
      return 'Playstation Portable';
    case 'PSN':
      return 'Playstation Network';
    case 'SNES':
      return 'Super Nintendo';
    case 'Steam':
    case 'Win':
    case 'Win 10':
      return 'PC';
    case 'Wii U':
    case 'WiiU':
    case 'WiiUVC':
      return 'Nintendo WiiU';
    case 'Wii':
    case 'WiiWare':
      return 'Nintendo Wii';
    case 'XBLA':
      return 'Xbox Live Arcade';
    case 'WP':
      return 'Windows Phone';
    case 'Stadia':
      return 'Google Stadia';
    default:
      return system;
  }
}
