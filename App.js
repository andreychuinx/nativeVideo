import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Dimensions } from 'react-native'
import Video from 'react-native-video'

export default class VideoComponent extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.onLoad = this.onLoad.bind(this)
  // }

  renderVideo () {
      return(
        <Video
          source={require('./assets/big_buck_bunny.mp4')}
          ref={(ref) => {
            this.player = ref
            this.player.presentFullscreenPlayer()
          }}
          resizeMode="cover" 
          style={styles.backgroundVideo}
          repeat={true}
          // muted={true}
          // paused={true}
          // resizeMode="contain"
          fullscreen={true}
        />
      )
  }

  render () {
    return (
      <View>
        {this.renderVideo()}
      </View>
    )
  }
}

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: "absolute",
  },
});