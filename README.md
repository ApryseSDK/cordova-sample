# PDFTron Cordova Sample
Cordova sample project that integrates a document viewer using [PDFTron Cordova](https://github.com/PDFTron/pdftron-cordova).

## Preparation

### iOS



### Android
Add your [PDFTron credentials](https://www.pdftron.com/documentation/android/guides/getting-started/integrate-gradle?showkey=true) to the gradle.properties file:
```
AWS_ACCESS_KEY=YOUR_ACCESS_KEY_GOES_HERE
AWS_SECRET_KEY=YOUR_SECRET_KEY_GOES_HERE
PDFTRON_LICENSE_KEY=YOUR_PDFTRON_LICENSE_KEY
```
Your PDFTron credentials are confidential. Please make sure that they are not publicly available.

Run the terminal command: `cordova build android`

Then, import `CordovaSample/platforms/android` folder into Android Studio, then run the project from Android Studio using the play button.

## License
See [License](./LICENSE)
