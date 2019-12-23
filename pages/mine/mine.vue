<template>
  <view class="mine">
    <view class="user-sesson flexbox between">
      <view class="img-box">
        <image :src="userImg"
               mode="scaleToFill"
               lazy-load="false">
        </image>
      </view>
      <view class="message"
            @click="login">
        <text>白色橄榄树</text>
      </view>
    </view>
    <view class="user-info flexbox between">
      <view class="box">
        <view>520</view>
        <view class="title">我的好友</view>
      </view>
      <view class="box">
        <view>520</view>
        <view class="title">我的收藏</view>
      </view>
      <view class="box">
        <view>520</view>
        <view class="title">浏览记录</view>
      </view>
    </view>
    <view class="wellet">
      <view class="title">
        钱包（元）
      </view>
      <view class="cash-withdrawal">提现</view>
      <view class="content flexbox j-start">
        <text class="money">
          180.00
        </text>
        <text>
          今日: 3.25
        </text>
        <text>
          昨日: 0.00
        </text>
      </view>
    </view>
    <view class="sub-icon flexbox j-start">
      <view class="box"
            v-for="(item, index) in mineIcon"
            :key="index">
        <view class="icon">
          <image :src="item.icon"
                 mode="scaleToFill"
                 lazy-load="false">
          </image>
        </view>
        <view class="text">{{item.label}}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      userImg: require('../../static/images/mine/user-info.png'),
      mineIcon: [
        { icon: require('../../static/images/mine/buyCar.png'), label: '购物车' },
        { icon: require('../../static/images/mine/coupon.png'), label: '优惠券' },
        { icon: require('../../static/images/mine/notice.png'), label: '消息通知' },
        { icon: require('../../static/images/mine/mine-order.png'), label: '我的订单' },
        { icon: require('../../static/images/mine/receving-address.png'), label: '收货地址' },
        { icon: require('../../static/images/mine/customer-server.png'), label: '客服' },
        { icon: require('../../static/images/mine/inviation.png'), label: '邀请好友' },
        { icon: require('../../static/images/mine/strategy.jpg'), label: '攻略' },
      ]
    }
  },
  methods: {
    login () {

      wx.login({
        // 通过这个接口获取code
        success (res) {
          // const promise = new promise((resolve, reject) => {
          if (res.code) {
            //发起网络请求
            wx.request({
              url: 'http://192.168.1.24:3000/weixinAppLogin',
              data: {
                code: res.code
              },
              success (getSesson) {
                getSesson = getSesson.data
                if (getSesson.errCode === 0) {
                  let obj = JSON.parse(getSesson.backData)
                  console.log(obj);

                }
              },
              fail (err) {
                console.log(err);

              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
          // })
        }
      })
    }
  },
}
</script>

<style lang="less" scope>
.mine {
  padding: 10px 30px 0 30px;
  box-sizing: border-box;
  .user-sesson {
    .img-box {
      width: 120rpx;
      height: 120rpx;
      image {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .message {
      flex: 1;
      padding-left: 10px;
      box-sizing: border-box;
    }
  }
  .user-info {
    margin-top: 14rpx;
    .box {
      view {
        text-align: center;
        margin-top: 15rpx;
        color: #000;
        &.title {
          color: #999;
        }
      }
    }
  }
  .wellet {
    padding: 30rpx 20rpx;
    color: #fff;
    background-color: #f4ac3a;
    border-radius: 20rpx;
    margin-top: 10px;
    position: relative;
    .title {
      font-size: 44rpx;
    }
    .cash-withdrawal {
      padding: 8rpx 10rpx 8rpx 30rpx;
      background-color: #fff;
      color: #000;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      border-top-left-radius: 36rpx;
      border-bottom-left-radius: 36rpx;
    }
    .content {
      font-size: 30rpx;
      margin-top: 20rpx;
      text {
        margin-right: 30rpx;
      }
      .money {
        font-size: 50rpx;
      }
    }
  }
  .sub-icon {
    flex-wrap: wrap;
    font-size: 34rpx;
    .box {
      text-align: center;
      width: 33%;
      margin: 20rpx 0;
      .icon {
        image {
          max-height: 60rpx;
          max-width: 60rpx;
        }
      }
    }
  }
}
</style>
