<style lang="scss">
.component__daily-item {
  .component__daily-item-github {
    margin: .5em 0;
    .component__daily-item-github--button {
      line-height: 14px;
      background-color: #eff3f6;
      background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);
      color: #24292e;
      background-position: -1px -1px;
      background-repeat: repeat-x;
      background-size: 110% 110%;
      border: 1px solid rgba(27,31,35,.2);
      border-radius: .25em;
      display: inline-block;
      font-size: 14px;
      font-weight: 600;
      padding: 6px 12px;
      position: relative;
      vertical-align: middle;
      white-space: nowrap;
      cursor: pointer;
      user-select: none;
    }
  }
  .component__daily-item-lang {
    margin: .5em 0;
    span {
      font-size: 12px;
      line-height: 14px;
      background-color: #C0C4CC;
      color: #FFF;
      font-weight: bold;
      padding: 2px 4px;
      border-radius: 2px;
      margin-left: 2px;
      cursor: pointer;
      user-select: none;
    }
  }
  .component__daily-item-link {
    margin: .5em 0;
  }
}
</style>

<template>
  <div class="component__daily-item">
    <!-- github 信息 -->
    <p v-if="watch || star || fork" class="component__daily-item-github">
      <span v-if="watch" class="component__daily-item-github--button">
        <i class="fas fa-eye"></i>
        watch {{watch}}
      </span>
      <span v-if="star" class="component__daily-item-github--button">
        <i class="fas fa-star"></i>
        star {{star}}
      </span>
      <span v-if="fork" class="component__daily-item-github--button">
        <i class="fas fa-code-branch"></i>
        fork {{fork}}
      </span>
    </p>
    <!-- 编程语言 -->
    <p v-if="lang" class="component__daily-item-lang">
      <span v-for="lang in lang.split(',')" :key="lang">
        {{lang}}
      </span>
    </p>
    <!-- 介绍 -->
    <blockquote v-if="note">
      <p>{{note}}</p>
    </blockquote>
    <!-- 链接 -->
    <p v-if="url" class="component__daily-item-link">
      <span
        class="hint--top hint--medium hint--rounded"
        :aria-label="url">
        <a :href="url" target="_blank">
          <i class="fas fa-external-link-square-alt"></i>
          {{urlSimplify(url)}}
        </a>
      </span>
      <!-- 非中文内容 -->
      <span
        v-if="isChinese === false"
        class="hint--top hint--small hint--rounded"
        aria-label="非中文内容">
        <i class="fas fa-language" style="color: #E6A23C;"></i>
      </span>
      <!-- VPN -->
      <span
        v-if="vpn"
        class="hint--top hint--small hint--rounded"
        aria-label="需特殊网络">
        <i class="far fa-dizzy" style="color: #F56C6C;"></i>
      </span>
      <!-- video -->
      <span 
        v-if="video"
        class="hint--top hint--small hint--rounded"
        aria-label="视频资源">
        <i class="fab fa-youtube" style="color: #67C23A;"></i>
      </span>
    </p>
  </div>
</template>

<script>
import url from 'url'
export default {
  props: [
    'note',
    'url',
    'lang',
    'watch',
    'star',
    'fork',
    'isChinese',
    'vpn',
    'video'
  ],
  methods: {
    urlSimplify (u) {
      return url.parse(u).host
    }
  }
}
</script>
