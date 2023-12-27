# Getting Started
Also read the Backend README.md, its important to use reverse proxy for the backend

## Step 1: Configure the .env file
try this if changes wont pick up correctly
```bash
npm start -- --reset-cache
```

## Step 2: Start the Metro Server
run this command in the root folder
```bash
npm start
```

## Step 3: Start an Emulator
Use android studio for example to start an emulator

## Step 4: Start your Application
### For Android
run this command in the root folder (run command in git bash)
```bash
npm run android
```
### For iOS
```bash
npm run ios
```

# Release steps
Build the release aab
```bash
npx react-native build-android --mode=release  
```

test the release aab (run command in git bash)
```bash
npm run android -- --mode="release"
```
