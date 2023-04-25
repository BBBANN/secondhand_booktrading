<template>
  <div id="home">
    <!-- 顶部语录 start -->
    <el-divider content-position="left">{{
      sayings[getRandomSaying()]
    }}</el-divider>
    <!-- 顶部语录 end -->
    <!-- 轮播图 start -->
    <el-carousel height="140px">
      <el-carousel-item v-for="item in carouselImgs" :key="item">
        <img class="carouselImg" :src="item" />
      </el-carousel-item>
    </el-carousel>
    <!-- 轮播图 end -->
    <!-- 步骤 start -->
    <h3 class="smallTitle">二手书交易步骤：</h3>
    <el-card class="steps" shadow="hover">
      <el-steps :active="1">
        <el-step title="首先 1" description="寻找您心爱的图书~"></el-step>
        <el-step title="接着 2" description="下单并支付账单~"></el-step>
        <el-step title="最后 3" description="完成交易~"></el-step>
      </el-steps>
    </el-card>
    <!-- 步骤 end -->
    <!-- 其他服务 start -->
    <h3 class="smallTitle">其他服务：</h3>
    <div class="otherServe">
      <el-card v-for="item in otherServe" :key="item.name" shadow="hover">
        <div class="cardContent" @click="handleCard(item)">
          <img class="otherServeImg" :src="require(`../assets/${item.img}`)" />
          <div class="otherServeInfo">
            <p class="otherServeTitle">{{ item.label }}</p>
            <p>{{ item.info }}</p>
          </div>
        </div>
      </el-card>
    </div>
    <!-- 其他服务 end -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      carouselImgs: [
        "http://ehall.seu.edu.cn/attachment/upload/2019-12-16_03-14-34/34bdfe19-f951-4f86-9efb-2cbed2663bd1/banner1.jpg",
        "http://ehall.seu.edu.cn/attachment/upload/2019-12-11_06-23-47/6a58fce9-5d7b-4d6e-80e0-fbcc033016b4/banner3.jpg",
        "http://ehall.seu.edu.cn/attachment/upload/2019-12-11_06-24-02/1cc29806-2bef-4d33-a798-6b9c55345d87/banner4.jpg",
        "http://ehall.seu.edu.cn/attachment/upload/2019-12-16_03-14-52/1e03a885-8fb4-45ee-bff4-a056f92b313e/%E4%B8%9C%E5%A4%A7banner1.jpg",
      ],
      sayings: [
        "明天的太阳依然会升起，让我们一起期待着美好的明天。",
        "过去的不幸并不代表未来会一直如此。",
        "坚持下去，不要放弃自己的梦想。",
        "无论发生什么事情，你都是强大的，你可以克服任何困难。",
        "难过的时候，告诉自己这只是暂时的，明天会更好。",
        "不要害怕失败，失败是通向成功的必经之路。",
        "心灵的伤口需要时间去治愈，不要强求自己一下子就能好起来。",
        "每一次挫折都是一次成长的机会。",
        "难过的时候，找个人诉说，你会发现你并不孤单。",
        "健康的身体是幸福的基石，好好照顾自己。",
        "坚强不是没有眼泪，而是在流泪后依然坚强。",
        "保持微笑，即使是在最困难的时候。",
        "每一天都是一个新的开始，让我们珍惜每一天。",
        "坚信自己，相信自己能够克服所有的难关。",
        "人生是一场旅程，不要在路上失去自己。",
        "保持积极的态度，你的世界会因此变得更加美好。",
        "爱自己，尊重自己，你值得被爱和被尊重。",
        "记住你的梦想，不要被别人的意见和看法左右。",
        "生活中的每一个小美好都值得我们去感恩和珍惜。",
        "做自己喜欢的事情，不要因为别人的意见而改变自己。",
        "勇敢面对未来，你不知道下一秒钟会发生什么美好的事情。",
        "坚信自己的能力，你可以创造出自己想要的生活。",
        "不要让过去的错误阻碍你的未来，放下它，继续前进。",
        "看看自己已经走过的路，你已经走得很远了。",
        "每一个困难都是一道难关，你需要克服它才能更加强大。",
        "找到自己的方向。",
        "学会宽容，不要让怨恨和仇恨侵蚀你的心灵。",
        "不要害怕尝试新的事物，它们可能会带给你惊喜和快乐。",
      ],
      otherServe: [
        {
          path: "/buy",
          name: "buy",
          label: "购买图书",
          img: "buy.png",
          info: "Hey，我强烈推荐你买二手书！这是一种不仅实惠还环保的购书方式。买二手书可以省钱，也可以让旧书重获新生，环保又有爱心。而且，你还能在二手书中找到各种有趣的批注和书签，让阅读变得更加有趣哦！",
        },
        {
          path: "/upload",
          name: "upload",
          label: "上传图书",
          img: "upload.png",
          info: "将旧书卖给其他书迷不仅可以获得一些收入，还能为他们提供实惠又环保的购书选择，你也能让这些旧书重获新生，减少浪费。所以，快来尝试卖二手书吧，你会发现这是一种既经济又有意义的行为！",
        },
        {
          path: "/complaint",
          name: "complaint",
          label: "向上申诉",
          img: "complaint.png",
          info: "嘿，不要难过！如果你买的二手书有问题，不要担心，请向我们申诉，我们会帮助你解决问题，请继续享受二手书带给你的乐趣吧！",
        },
      ],
    };
  },
  methods: {
    getRandomSaying() {
      return Math.floor(Math.random() * 28);
    },
    handleCard(item) {
      if (item.name !== this.$route.name) {
        this.$router.push({
          name: item.name,
        });
      }
    },
  },
  mounted() {},
};
</script>

<style scoped lang="less">
@primary: rgb(64, 158, 255);
@base: #434a66;

#home {
  margin: 0 auto;
  width: 1140px;
  .el-divider__text {
    font-size: 14px;
    transition: all 0.5s;
    cursor: default;
    &:hover {
      font-size: 20px;
      color: @primary;
    }
  }
  .el-carousel {
    margin-top: 30px;
    width: 100%;
    .carouselImg {
      border-radius: 5px;
    }
  }
  .steps {
    margin-top: 30px;
  }
  .smallTitle {
    color: @base;
    margin-top: 30px;
  }
  .otherServe {
    display: flex;
    flex-wrap: wrap;
    padding-right: 20%;
    .el-card {
      flex: 80%;
      margin-top: 30px;
      transform: translateX(10%);
      height: 140px;
      cursor: pointer;
      .cardContent {
        display: flex;
        .otherServeImg {
          height: 90px;
        }
        .otherServeInfo {
          margin: 10px 30px;
          font-size: 15px;
          .otherServeTitle {
            margin: 0 0 10px 0;
            font-weight: 700;
            color: @base;
          }
        }
      }
    }
  }
}
</style>