import React from 'react';
import { TouchableHighlight, NavigatorIOS, StyleSheet, Text, View } from 'react-native';
import HomeScene from './HomeScene'
import FirstRightScene from './FirstRightScene'
export default class App extends React.Component {
	 constructor(props) {
	    super(props)
	this._onRightButtonPress = this._onRightButtonPress.bind(this)
	}
	render() {
	    return (
	      <NavigatorIOS ref="nav"
		style={styles.wrapper} 
	       initialRoute= {{
	          component: HomeScene,
	          title: "Nav demo",
	          rightButtonTitle: "Right Scene",
	          onRightButtonPress: this._onRightButtonPress
	        }}/>
	    )

	  }
	_onRightButtonPress() {
	    this.refs.nav.push({
	      title: "From Right",
	      component: FirstRightScene
	    })
  
	};

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
	paddingBottom:40,

  },
wrapper: {
	flex: 1,
}
});
