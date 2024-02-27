import { Component, PropsWithChildren} from 'react'
import { View,Swiper,SwiperItem, CoverImage } from '@tarojs/components'
import { AtTabBar, AtActivityIndicator} from 'taro-ui'
import HomeContent from '../../component/homeContent/index'
import './index.scss'
import Taro from '@tarojs/taro'

type PageState = {
  current: number,
  list: Array<any>,
  showActivity: boolean
}

let i = 1
export default class Index extends Component<PropsWithChildren, PageState> {

  componentWillMount () {

  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onPullDownRefresh() {
    this.setState({
      showActivity: true
    })
    i = 1;
    this.getPageData();
    setTimeout(()=>{
      this.setState({ showActivity: false });
    },100)
  }
  // 监听上拉触底
  onReachBottom() {
    i++;
    this.setState({
      showActivity: true
    });
    this.getPageData();
  }

  constructor (args) {
    super(args)
    this.state = {
      current: 0,
      list: [...Array(10).keys()],
      showActivity: false
    }
  }

  switchTab(value) {
    if (value !== 1) return;
    if (value == 1) {
      Taro.reLaunch({
        url: "/pages/user/index"
      });
    } else {
      Taro.reLaunch({
        url: "/pages/around/index"
      });
    }
  }

  getPageData () {
    // sucess

   }

  handleClick() {

  }

  ActivityIndicator() {
    return (
      <View style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
        <AtActivityIndicator></AtActivityIndicator>
        正在刷新
      </View>
    );
  }

  render () {
    const { showActivity } = this.state;
    return (
      <View className='index'>
        {showActivity && this.ActivityIndicator()}
         <AtTabBar
        tabList={[
          { title: '', iconType: 'bullet-list' },
          { title: '关注', text: 8 },
          { title: '发现' },
          { title: '附近', dot: true },
          { title: '', iconType: 'search' }
        ]}
        onClick={this.handleClick.bind(this)}
        current={this.state.current}
      />
        <View className="waterfall">
        {
          this.state.list.map((number) => {
            return (
              <HomeContent url={'https://cms.pixso.cn/images/designskills/22Q4/11-react-ui-libraries-kits11.png'} text={number} username='测试用户名'/>
            )
          })
        }
        </View>
        <AtTabBar
          fixed
          backgroundColor='#ececec'
          selectedColor='#ea6bb8'
          tabList={[
            {title:'首页'},
            {title:'我的'},
            {title: '购物'}
          ]}
          onClick={this.switchTab.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}

