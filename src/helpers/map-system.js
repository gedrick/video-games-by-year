export default function mapSystem(system) {
  switch (system.toUpperCase()) {
    case '360':
    case 'X360':
    case 'XBOX 360':
      return 'Xbox 360';
    case 'MD':
      return 'MegaDrive';
    case 'N3DS':
    case '3DS':
    case '3DSVC':
    case '3DS ESHOP':
      return '3DS';
    case 'AMAZON FIRE':
    case 'AMAZON FIRE TV':
    case 'FIRE':
    case 'FIREOS':
      return 'Fire TV';
    case 'ANDROID':
    case 'DROID':
    case 'ANDROID (OPERATING SYSTEM)':
    case 'AND':
      return 'Android';
    case 'MAC':
    case 'MACOS':
    case 'OS X':
      return 'Mac OS';
    case 'DC':
      return 'Dreamcast';
    case 'LIN':
    case 'LINUX':
      return 'Linux';
    case 'IOS':
    case 'APPLE WATCH':
      return 'iOS';
    case 'DSIWARE':
    case 'NDS':
    case 'DS':
      return 'DS';
    case 'NS':
    case 'NINTENDO SWITCH':
      return 'Switch';
    case 'PS1':
      return 'Playstation';
    case 'PS2':
    case 'PLAYSTATION 2':
      return 'Playstation 2';
    case 'PS3':
    case 'PLAYSTATION 3':
      return 'PS3';
    case 'PS4':
    case 'PLAYSTATION 4':
      return 'PS4';
    case 'PSVITA':
    case 'VITA':
      return 'PSVita';
    case 'XBO':
      return 'Xbox One';
    case 'PSVR':
    case 'PLAYSTATION VR':
      return 'PSVR';
    case 'OCULUS RIFT':
    case 'RIFT':
    case 'HTC VIVE':
      return 'VR';
    case 'PSP':
      return 'PSP';
    case 'PSN':
      return 'PSN';
    case 'SUPER NINTENDO':
    case 'SNES':
      return 'Super Nintendo';
    case 'STEAM':
    case 'WIN':
    case 'WIN 10':
      return 'PC';
    case 'WII U':
    case 'WIIU':
    case 'WIIUVC':
      return 'WiiU';
    case 'WII':
    case 'WIIWARE':
      return 'Wii';
    case 'XBLA':
      return 'Xbox Live Arcade';
    case 'WP':
      return 'Windows Phone';
    case 'STADIA':
      return 'Stadia';
    case 'BLACKBERRY TABLET OS':
    case 'BLACKBERRY 10':
      return 'Blackberry';
    case 'IPOD':
      return 'Apple iPod';
    case 'GBA':
      return 'GBA';
    case 'GCN':
      return 'Gamecube';
    case 'SATURN':
      return 'Sega Saturn';
    default:
      return system;
  }
}
