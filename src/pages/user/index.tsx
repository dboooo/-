import { Component, PropsWithChildren, ReactNode } from "react";
import { Text } from "@tarojs/components";
import { AtTabBar } from 'taro-ui'
import Taro from '@tarojs/taro'

export default class Page extends Component<PropsWithChildren, {current: number}> {
  constructor (props) {
    super(props)
    this.state = {
      current: 1
    }
  }

  switchTab(value) {
    if (value !== 0) return;
    Taro.reLaunch({
      url: "/pages/index/index"
    });
  }

  render(): ReactNode {
      return(
        <>
          <Text>12414</Text>
          <AtTabBar
          fixed
          backgroundColor='#ececec'
          selectedColor='#ea6bb8'
          tabList={[
            {title:'首页',iconType:'home'},
            {title:'我的',iconType: 'user'}
          ]}
          onClick={this.switchTab.bind(this)}
          current={this.state.current}
        />
        </>
      )
  }
}
