# course-ionic
This repository is part of a presentation, which can be booked at appfoundry.

# Setting up your development env. 

## For easily using all mentioned tools please install

1. [Node.JS 6.9.2 LTS](https://nodejs.org/ "node.js").
	a. When installation is finished open "terminal" and type `node -v` this should result in v6.9.2
	b. Also check if NPM has been installed by typing `npm -v`
	
2. Ionic & Cordova
	a. After you've installed Node & NPM, you can type `npm install -g ionic cordova`

## For building to Android

1. You'll need to install [JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html "JDK")

2.  And the [Android SDK](https://developer.android.com/studio/index.html "android sdk") (Download Android Studio works as well, but is larger ;))

For a more detailed guide you can visit the [Cordova Documentation](https://cordova.apache.org/docs/en/6.x/guide/platforms/android/ "Cordova Documentation")

## For building to iOS

1. you'll need the an up-to-date version of Xcode

For a more detailed guide you can visit the [Cordova Documentation](https://cordova.apache.org/docs/en/6.x/guide/platforms/ios/ "Cordova Documentation")


# Getting started

1. Open your terminal and type `npm install`
2. Still in terminal use `bower install`
3. To be able to build to a platform (iOS or Android) add the platform of your choice or both you can do this by typing`ionic platform add android` or `ionic platform add ios` 
4. All dependencies should be installed now, type `ionic serve` to see your project in a webview
5. type `ionic emulate android` for the android emulator, or `ionic emulate ios` for the ios emulator.