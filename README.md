# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Install Dependecies

Run the following command from the _root_ of your React Native project:

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```
note: run android will be find Emulator or Devices automatically.

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```
note: run IOS will be find IOS Simulator automatically.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

#Structure Project?

```bash
├── assets
│   └── fonts
│       ├── Poppins-Bold.ttf
│       ├── Poppins-Light.ttf
│       ├── Poppins-Regular.ttf
│       └── Poppins-SemiBold.ttf
├── constants
│   ├── colors.js
│   └── fonts.js
├── helpers
│   └── async.js
├── navigation
│   ├── MainNavigator.js
│   └── index.js
├── redux
│   ├── actions
│   │   ├── task.js
│   │   └── types.js
│   ├── reducers
│   │   ├── index.js
│   │   └── task.js
│   └── store
│       └── index.js
├── screens
│   ├── DetailTaskScreen.js
│   ├── HomeScreen.js
│   ├── TaskScreen.js
│   └── styles.js
└── utils
    └── snackbar.js
```

This template follows a very simple project structure:

#### **src** folder

This folder is the main container of all the code inside your application.

##### **assets** folder

As the name says, it contains assets of our project. It consists all your static assets, such as fonts and images. It’s a good idea to organize these assets into separate subdirectories for each asset type.

##### **constants** folder

This Folder stores any kind of constant that you have.

##### **helper** folder

Define helper functions in this folder. There are some functions that you might need across your application which generate some certain data or do something special. It’s better to keep them separate from components in order to make them reusable and make your code cleaner.

##### **redux** folder

If you're using Redux in your app, you should create a separate folder for Redux files. The redux folder should contain the following structure:

- actions: include all the functions that Dispatch to change the state of store.
- reducer: include all redux reducers.
- store: state container which holds the application's state.

# how to build apk.

##### Run script at root project

```bash
yarn bundle && yarn android build
```
##### The build results will be located in this folder

``` bash
./android/app/build/outputs/apk/release/*
```

# Screenshoot how app works.
1. Home Page
    ![alt text](https://github.com/vbagustinus/AltechTechnicalTest/blob/main/src/assets/images/home.jpeg)
2. Popup Filter Page
    ![alt text](https://github.com/vbagustinus/AltechTechnicalTest/blob/main/src/assets/images/popuphome.jpeg)
3. Add Task Page
    ![alt text](https://github.com/vbagustinus/AltechTechnicalTest/blob/main/src/assets/images/addtask.jpeg)
4. Detail Task Page (with status *todo*)
    ![alt text](https://github.com/vbagustinus/AltechTechnicalTest/blob/main/src/assets/images/detailtodo.jpeg)
5. Detail Task Page (with status *done*)
    ![alt text](https://github.com/vbagustinus/AltechTechnicalTest/blob/main/src/assets/images/detaildone.jpeg)
