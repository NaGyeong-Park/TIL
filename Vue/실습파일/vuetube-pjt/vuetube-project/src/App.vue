<template>
  <div id="app">
    <h1>My First Vuetube Project</h1>
    <search-bar @input-search="inputKeyword"></search-bar>
  <section>
    <video-detail :video="selectedVideo"></video-detail>
    <video-list :videos="videos" @select-video="onVideoSelect"></video-list>
  </section>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import axios from 'axios'
import VideoDetail from './components/VideoDetail.vue'
import VideoList from './components/VideoList.vue'

const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY // 숨겨야해
const API_URL = 'https://www.googleapis.com/youtube/v3/search' 

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
  data:() => {
    return {
      keyword: '',
      videos: [],
      selectedVideo: null,
    }
  },
  methods: {
    inputKeyword(keyword) {
      this.keyword = keyword
      axios.get(API_URL, {
        params: {
          key: API_KEY,
          q : this.keyword,
          type: 'video',
          part: 'snippet',
        }})
      .then(res=>{
        console.log(res.data.items);
        this.videos = res.data.items;
      })
      .catch(err=> {
        console.log(err);
      })
      }, 
    onVideoSelect: function (video) {
      this.selectedVideo = video
    }
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>