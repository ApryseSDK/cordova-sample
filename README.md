# PDFTron Cordova Sample
Cordova sample project that integrates a document viewer using [PDFTron Cordova](https://github.com/PDFTron/pdftron-cordova).

## Install

```
cd CordovaSample
cordova plugin add https://github.com:PDFTron/pdftron-cordova.git
```

## Run

### iOS

Download the [PDFTron iOS SDK .dmg file](https://www.pdftron.com/documentation/ios/get-started/integration/manually).

From the .dmg file, copy both `/Lib/Framework-dynamic/PDFNet.framework` and `/Lib/Tools/Tools.framework` to the Cordova sample directory `/CordovaSample/platforms/ios/`.

With terminal still in the `CordovaExample` directory, run

```cordova build ios```

Then open `/CordovaSample/platforms/ios/CordovaSample.xcworkspace` in Xcode, and run it using Xcode's play button.

### Android

Run the terminal command: `cordova build android`

Then, import `CordovaSample/platforms/android` folder into Android Studio, and run the project from Android Studio using the play button.

## Contributing
See [Contributing](./CONTRIBUTING.md)

## License
See [License](./LICENSE)
![](https://onepixel.pdftron.com/cordova-sample)
