# PDFTron Cordova Sample
Cordova sample project that integrates a document viewer using [PDFTron Cordova](https://github.com/PDFTron/pdftron-cordova).

## Install

```
cd CordovaSample
cordova plugin add https://github.com:PDFTron/pdftron-cordova.git
```

## Run

### iOS

Download the [PDFTron iOS SDK .dmg file](https://www.pdftron.com/documentation/ios/guides/getting-started/integrate-manual). (If you have not yet regisered for a key, please do so.)

From the .dmg file, copy both `/Lib/Framework-dynamic/PDFNet.framework` and `/Lib/Tools/Tools.framework` to the Cordova sample directory `/CordovaSample/platforms/ios/`.

With terminal still in the `CordovaExample` directory, run

```cordova build ios```

Then open `/CordovaSample/platforms/ios/CordovaSample.xcworkspace` in Xcode, and run it using Xcode's play button.

### Android
Add your [PDFTron credentials](https://www.pdftron.com/documentation/android/guides/getting-started/integrate-gradle?showkey=true) to the gradle.properties file:
```
AWS_ACCESS_KEY=YOUR_ACCESS_KEY_GOES_HERE
AWS_SECRET_KEY=YOUR_SECRET_KEY_GOES_HERE
PDFTRON_LICENSE_KEY=YOUR_PDFTRON_LICENSE_KEY
```
Your PDFTron credentials are confidential. Please make sure that they are not publicly available.

Run the terminal command: `cordova build android`

Then, import `CordovaSample/platforms/android` folder into Android Studio, and run the project from Android Studio using the play button.

## Contributing
See [Contributing](./CONTRIBUTING.md)

## License
See [License](./LICENSE)
