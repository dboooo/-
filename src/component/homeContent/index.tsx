import { CoverImage, View, Text } from '@tarojs/components';
import React, { Component, useState } from 'react'
import { AtAvatar, AtIcon } from 'taro-ui'


import './index.scss'

//import * as actions from './storeModel/actionCreater'

interface Props {
  url: string,
  text: string,
  username: string
}
interface State {
  url?: string,
  flag?: any,
  iconName?: string
}

export default class Content extends Component <Props, State> {
    constructor(props:Props){
       super(props);
        this.state = {
          url: props.url,
        }
    }


    render() {

        return (
              <View className='imgContainer'>
              <CoverImage src={this.props.url} className='img'></CoverImage>
              <Text>{this.props.text}</Text>
              <View className="userinfo">
                <View className='userinFoDetail'>
                  <AtAvatar circle image='https://jdc.jd.com/img/200' size='small'/>
                  <Text>{this.props.username}</Text>
                </View>
                <Icon/>
              </View>
            </View>
        )
    }
}

function Icon() {


const [iconName, seticonName] = useState('heart')
const [color, setColor] = useState('')
let flag = false



  function  changeIconColor() {
    if(flag) {
      seticonName(pre => pre = 'heart-2')
      setColor(pre => pre = 'red')
      console.log(iconName);

    } else {
      seticonName(pre => pre = 'heart')
      setColor(pre => pre = '')

      console.log(iconName);

    }
    flag = !flag
  }

  return (
    <AtIcon value={iconName} size='20' onClick={changeIconColor} color={color}></AtIcon>
  )
}
