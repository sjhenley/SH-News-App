# Step to create the React Native Project

1. Install Expo using `npm install --global expo-cli`
2. Create a new React Native Project in the current directory using `expo init .`
    - Template: I chose `blank (TypeScript)`

## (Optional) Configuring ESLint
1. Install ESLint using `npm install --save-dev eslint`
2. Configure ESLint by running `npx eslint --init`

### Configuration Options:
- How would you like to use ESLint? `To check syntax, find problems, and enforce code style`
- What type of modules does your project use? `JavaScript modules (import/export)`
- Which framework does your project use? `React`
- Does your project use TypeScript? `Yes`
- Where does your code run? `Browser`
- How would you like to define a style for your project? `Use a popular style guide`
- Which style guide do you want to follow? `Airbnb`
- What format do you want your config file to be in? `JSON`

3. Install the React Native plugin for ESLint: `npm install --save-dev eslint-plugin-react-native`
4. Inside `.eslintrc.json`, add `react-native` to the list of plugins

```JSON
"plugins": [
        "react",
        "react-native",
        "@typescript-eslint"
    ],
```

5. Add custom rules

```JSON
"rules": {
  ...
  }
```