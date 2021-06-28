# @flyskywhy/react-native-android-shell
This module is for execute shell command on android.

On rooted device with e.g. [install-supersu](https://github.com/flyskywhy/install-supersu), even can run root command, e.g.
```
AndroidShell.executeCommand(
    'su -c ifconfig eth0 down; su -c ifconfig eth0 hw ether 19:21:19:49:20:21; su -c ifconfig eth0 up',
    (result) => {},
);
```

---

---

Forked from [react-native-android-shel](https://github.com/M-Julius/react-native-android-shell), and fix `Error: Program type already present: com.reactlibrary.BuildConfig` on release build. Below is its README.

---

---

## Screenshot
![Alt text](img/ls.png?raw=true "ls command")
![Alt text](img/id.png?raw=true "id command")
![Alt text](img/uname.png?raw=true "uname command")


## Getting started

`$ npm install @flyskywhy/react-native-android-shell --save`

## Usage
```javascript
import AndroidShell from '@flyskywhy/react-native-android-shell';

// TODO: What to do with the module?
AndroidShell.executeCommand('your Command', (result) => {
  console.log(result)
});
```
## Example
```javascript
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AndroidShell from '@flyskywhy/react-native-android-shell'

class demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ''
        };
    }

    componentDidMount() {
        AndroidShell.executeCommand("ls", (result) => {
            this.setState({ result: 'yeu : ' + result });
            console.log('Result :', result);
        });
    }

    render() {
        return (
            <View style={{alignItems: 'center', flex: 1 }}>
                <Text>{this.state.result}</Text>
            </View>
        );
    }
}

export default demo;
```
