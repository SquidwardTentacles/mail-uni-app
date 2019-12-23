<template>
  <view class="content">
    <view class="search-box">
      <view class="input-box flexbox j-start">
        <image :src="searchIcon"
               mode="scaleToFill"
               lazy-load="false">
        </image>
        <input type="text"
               placeholder="请输入商品名称">
      </view>
    </view>
    <view class="coupon-img">
      <image :src="couponImg"
             mode="scaleToFill"
             lazy-load="false">
      </image>
    </view>
    <view class="nav-bar flexbox between">
      <view v-for="(item, index) in navBar"
            :key="index">
        <image :src="item.imgUrl"
               mode="scaleToFill"
               lazy-load="false">
        </image>
        <view>{{item.label}}</view>
      </view>
    </view>
    <view class="function-box flexbox between">
      <view class="superior">
        <image :src="functionImg.superiorImg"
               mode="scaleToFill"
               lazy-load="false">
        </image>
      </view>
      <view class="right flexbox between">
        <image :src="functionImg.happyPlay"
               mode="scaleToFill"
               lazy-load="false">
        </image>
        <image :src="functionImg.nineImg"
               mode="scaleToFill"
               lazy-load="false">
        </image>
      </view>
    </view>
    <view class="nav-title flexbox between">
      <view class="texts"
            :class="{'over-hidden':overShow}">
        <view>
          <text v-for="(item, index) in navTitle"
                @click="navClick(index)"
                :class="{'active':navId===index}"
                :key="index">{{item}}</text>
        </view>
      </view>
      <image :src="navIcon"
             @click="overShow!=overShow"
             mode="scaleToFill"
             lazy-load="false">
      </image>
    </view>
  </view>
</template>

<script>
import indexPic from '../../static/js/base64-img.json'
export default {
  data () {
    return {
      title: 'Hello',
      searchIcon: require('../../static/images/index-icon/search-icon.svg'),
      couponImg: require('../../static/images/index-icon/coupon.jpg'),
      navBar: [
        {
          imgUrl: require('../../static/images/index-icon/coupon-icon.jpg'),
          label: '优惠券'
        },
        {
          imgUrl: require('../../static/images/index-icon/jd-icon.jpg'),
          label: '京东'
        },
        {
          imgUrl: require('../../static/images/index-icon/brand.jpg'),
          label: '品牌'
        },
        {
          imgUrl: require('../../static/images/index-icon/z-icon.jpg'),
          label: '直销'
        },
      ],
      functionImg: {
        superiorImg: '../../static/images/index-icon/superior-products.jpg',
        happyPlay: '../../static/images/index-icon/happy-play_16.jpg',
        nineImg: '../../static/images/index-icon/9.9.jpg'
      },
      navTitle: [
        '精选', '女装', '美妆', '女鞋', '食品', '生鲜', '电器'
      ],
      navIcon: require('../../static/images/index-icon/selecter-icon.jpg'),
      navId: 0,
      overShow: true
    }
  },
  onLoad () {

  },
  methods: {
    navClick (i) {
      this.navId = i
    }
  }
}
</script>

<style lang="less">
.content {
  padding: 10px 30px 0 30px;
  box-sizing: border-box;
  .search-box {
    .input-box {
      background-color: #eeeeee;
      height: 40px;
      padding: 3px 10px;
      box-sizing: border-box;
      border-radius: 40px;
      image {
        width: 32rpx;
        height: 32rpx;
        display: inline-block;
        color: #a7a7a7;
        margin-right: 3px;
      }
    }
  }
  .coupon-img {
    image {
      max-height: 310rpx;
      width: 100%;
      margin-top: 10px;
    }
  }
  .nav-bar {
    margin-top: 10px;
    view {
      text-align: center;
      font-size: 40rpx;
      image {
        max-width: 80rpx;
        max-height: 80rpx;
      }
    }
  }
  .function-box {
    width: 100%;
    margin-top: 10px;
    height: 460rpx;
    .superior {
      height: 100%;
      width: 48%;
      image {
        max-height: 100%;
        max-width: 99%;
      }
    }
    .right {
      width: 48%;
      flex-direction: column;
      height: 100%;
      image {
        max-width: 99%;
        height: 47%;
      }
    }
  }
  .nav-title {
    margin-top: 10px;
    image {
      width: 40rpx;
      height: 40rpx;
    }
    view {
      &.over-hidden {
   
      white-space: normal;
      width: calc(100% - 80rpx);
      // overflow: hidden;
	  view {
		  width:100% ;
	  }
	     }
      text {
        // white-space: nowrap;
		min-width: 46rpx ;
		disp: inline-block;
        padding: 4rpx 15rpx;
        &.active {
          border-radius: 30rpx;
          background-color: #f5b047;
          color: #fff;
        }
      }
    }
  }
}
</style>
