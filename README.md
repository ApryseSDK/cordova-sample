# PDFTron Cordova Sample
Cordova sample project that integrates a document viewer using [PDFTron Cordova](https://github.com/PDFTron/pdftron-cordova).

## Install

```
cd CordovaSample
cordova plugin add https://github.com:PDFTron/pdftron-cordova.git
```

## Run

### iOS

Using Xcode, open the sample's workspace file, found at `/CordovaSample/platforms/ios/CordovaSample.xcworkspaceCordovaSample.xcworkspace`, and integrate the iOS native libraries as explained on the [plugin page](https://github.com/PDFTron/pdftron-cordova#ios).

Using Terminal, navigate to the `CordovaExample` directory, and run

```cordova build ios```

Then run the project using Xcode's play button.

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
