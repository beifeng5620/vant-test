<template>
  <div id="app">
    <van-tabs sticky scrollspy swipeable>
      <van-tab title="标签 1"
        ><div style="height: 100px; width: 100%; background-color: red;">
          内容 1
        </div></van-tab
      >
      <van-tab title="标签 2"
        ><div style="height: 100px; width: 100%; background-color: blue;">
          内容 2
        </div></van-tab
      >
      <van-tab title="标签 3"
        ><div style="height: 100px; width: 100%; background-color: yellow">
          内容 3
        </div></van-tab
      >
      <van-tab title="标签 4"
        ><div style="width: 100%; background-color: green">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <van-cell v-for="item in list" :key="item" :title="item" />
          </van-list></div
      ></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 3; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 9) {
          this.finished = true;
        }
      }, 1000);
    }
  }
};
</script>

<style></style>
