# django Start

가상환경 설정 > 패키지 다 깔아주기 > superuser, 일반 유저 만들어 POST맨으로 Token 값 받기

# Vuex Start

npm install : 모든 패키지 설치

```js
// index.js

...,
const routes = [
 
    ...,
 // router별로 View 지정해주기(views 안에 있는 파일들이다!)
 {
   path: '/login',
   name: 'login',
   component: LoginView,
 },
 {
   path: '/logout',
   name: 'logout',
   component: LogoutView,
 },
 {
   path: '/signup',
   name: 'signup',
   component: SignupView,
 },
 {
   path: '/profile/:username',
   name: 'profile',
   component: ProfileView,
 },
 {
   path: '/',
   name: 'articles',
   component: ArticleListView,
 },
 {
   path: '/articles/new',
   name: 'articleNew',
   component: ArticleNewView,
 },
 {
   path: '/articles/:articlePk',
   name: 'article',
   component: ArticleDetailView,
 },
 {
   path: '/articles/:articlePk/edit',
   name: 'articleEdit',
   component: ArticleEditView,
 },
 {
   path: '/404',
   name: 'NotFound404',
   component: NotFound404,
 },
 { // 위 경로말고 나머지 경로는 404로 보내준다
   path: '*',
   redirect: '/404',
 },
]

...
```



# Navigation Guard

장고에서 로그인 안한 사용자를 안보이게 해줬는데.. Vue에선 어떻게 하지?

## 전역가드(Global Before Guards)

URL을 이동할 때 마다, 이동하기 전 모든 경우에 발생! (URL 이동 할 때 마다 검문 좀 하겠습니다~)

router 객체의 메서드로, 콜백 함수를 인자로 받고 해당 콜백 함수는 3개의 인자를 받음

- to : 이동하려는 route의 정보를 담은 객체
- from : 직전 route의 정보를 담은 객체
- next : 실제 route의 이동을 조작하는 함수

__반드시 마지막에 next()로 route 이동을 실행해야 한다!__

# Vuex Module

getters actions mutations가 너~무 많아지면 모듈화하자! 커지면 커질수록 store에 다 담기 힘들겠구나. 파일 크기가 너무 커지는 구나. 그래서 Module 단위로 분리해야겠다~

index.js에는 modules에 등록 해주고, accounts와 articles의 내용들을 각자 파일에 적어주자.

## Module의 이름공간

다른 module에 작성되어 있어도, 실제로는 global namespace에 등록된다.

만약 __확실하게__ 모듈별로 구분하고 싶다면, `namespaced : true` 옵션을 써야한다.

```js
// index.js
...,
import articles  from '.modules/articles' 
import accounts  from '.modules/accounts' 
...,
export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {articles, accounts},
})
```



# accounts

Vue에서 사용자 인증방법은 토큰이 유효한지 안한지!

````js
// modules/accounts.js
...,
export default {
  // namespaced: true,

  // state는 절대 직접 접근하지 않겠다!
  state: {
    // 새로고침을 할 때 localStorage에 토큰이 있으면 그거로,
    // 없으면 빈 값으로!
    token: localStorage.getItem('token') || '',
  },

  // 모든 state는 getters를 통해서 접근하겠다!
  // state 관련 정보는 모두 getters에서 꺼낼거야.
  getters: {
    // return이 boolean이면 좋을텐데
    isLoggedIn: state => !!state.token,
    // 한번 뒤집으면 boolean 반대 => 한번 더 뒤집으면 원래 boolean
    currentUser: state => {return state.currentUser},
    profile: state => {return state.profile},
    authError: state => {return state.authError},
  },

  mutations: {
    SET_TOKEN: (state, token) => state.token = token,
    SET_CURRENT_USER: (state, user) => state.currentUser = user,
    SET_PROFILE: (state, profile) => state.profile = profile ,
    SER_AUTH_ERROR: (state, error) => state.authError = error ,
  },

  actions: {
    saveToken({ commit }, token) {
      /* 
      state.token 추가 
      localStorage에 token 추가
      */
     commit('SET_TOKEN', token)
     localStorage.setItem('token', token)
    },

    removeToken({ commit }) {
      /* 
      state.token 삭제
      localStorage에 token 추가
      */
     commit('SET_TOKEN', '')
     localStorage.setItem('token', '')
    },

      ...,
````



## accounts Signup

```js
// modules/accounts.js

...,

    actions: {
        signup({ commit, dispatch }, credentials) {
      /* 
      POST: 사용자 입력정보를 signup URL로 보내기
        성공하면
          응답 토큰 저장
          현재 사용자 정보 받기
          메인 페이지(ArticleListView)로 이동
        실패하면
          에러 메시지 표시
      */
     axios({
       //drf에서 가져온다
       url: drf.accounts.signup(),
       method: 'POST',
       data: {credentials}
     })
     .then(res =>{
       const token = res.data.key
       dispatch('saveToken', token)
       
       router.push({name:'article'})
      .catch(err => {
        // 사용자에게  error 메세지 보여줘야지
        console.log(err)
        commit('SER_AUTH_ERROR',err.response.data)
      })
     })
    },
        ...,
```

```vue
<!--views/SignupView-->

<template>
  <div>
    <h1>Signup</h1>
      <!--잘못 입력 했을 때 메세지 보여줘야지-->
     <account-error-list v-if="authError"></account-error-list>

    <form @submit.prevent="signup(credentials)">
      <div>
        <label for="username">Username: </label>
        <input type="text" id="username" required
        v-model="credentials.username" />
      </div>
      <div>
        <label for="password1">Password: </label>
        <input type="password" id="password1" required
        v-model="credentials.password1"/>
      </div>
      <div>
        <label for="password2">Password Confirmation:</label>
        <input type="password" id="password2" required
        v-model="credentials.password2"/>
      </div>
      <div>
        <button>Signup</button>
      </div>
    </form>
  </div>
</template>

<script>
  import { mapActions, mapActions } from 'vuex'
  import AccountErrorList from '@/components/AccountErrorList.vue' 
    
  export default {
    components: {AccountErrorList},
    name: 'SignupView',
    data() {
      return {
        credentials: {
          username: '',
          password1: '',
          password2: '',
        }
      }
    },
    computed: {
      ...mapGetters(['authError'])
      },
    methods: {
      ...mapActions('signup')
    },
  }
</script>

<style></style>

```

```vue
<!--components/AccountErrorList-->
<template>
  <div class="account-error-list">
    <p v-for="(errors, field) in authError" :key="field">
      {{field}}
      <ul>
        <li v-for="(error, idx) in errors" :key="idx">
          {{error}}
          </li>
      </ul>
    </p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'AccountErrorList',
    computed: {
      ...mapGetters(['authError'])
    },
  }
</script>

<style>
  .account-error-list {
    color: red;
  }
</style>
```

## accounts : Login

위 코드와 굉장히 유사합니다!

생략~



## accounts Logout

```js
// modules/accounts.js

...,

    actions: {
        ...,
            
    logout({ getters, dispatch }) {
      /* 
      POST: token을 logout URL로 보내기
        성공하면
          토큰 삭제
          사용자 알람
          LoginView로 이동
        실패하면
          에러 메시지 표시
      */
     axios({
       url: drf.accounts.logout(),
       method: 'POST',
       //data : {}
       headers : getters.authError,
     })
     .then(() => {
       dispatch('removeToken')
       alert('성공적으로 logged out')
       router.push({name:'login'})
     })
     .error(err =>{
       console.error(err.response)
     })
    },
        ...,
```

```vue
<!--views/LogoutView.vue-->
<template>
  <div>
    <h1>Logout</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

  export default {
    methods: {
      ...mapActions(['logout'])
    },
    computed: {
      ...mapGetters(['isLoggedIn'])
    },
    created() {
      if (this.isLoggedIn){
        this.logout();
      } else {
        alert('잘못된 접근')
        this.$router.back()
      }
    },
  }
</script>

<style></style>

```



## account profile

```js
// modules/accounts.js

...,

    actions: {
        ...,
            
    fetchProfile({ commit, getters }, { username }) {
      /*
      GET: profile URL로 요청보내기
        성공하면
          state.profile에 저장
      */
     axios({
       url: drf.accounts.profile(username),
       method: 'get',
       headers: getters.authHeader,
     })
     .then(res => {
       commit('SET_PROFILE', res.data)
     })
    },
        ...,
```

```vue
<!--views/ProfileView.vue-->
<template>
  <div>
    <h1>{{profile.username}}</h1>

    <h2>작성한 글</h2>
    <ul>
      <li v-for="article in profile.articles" :key="article.pk">
        <route-link :to="{ name: 'article', params: {articlePk: article.pk}}">
        {{article.title}}
        </route-link>
      </li>
    </ul>
    <h2>좋아요 한 글</h2>
    <ul>
      <li v-for="article in profile.like_articles" :key="article.pk">
        <router-link :to="{ name: 'article', params: {articlePK : article.pk}}">
          {{article.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'ProfileView',
    computed: {
      ...mapGetters(['profile'])
    },
    methods: {
      ...mapActions(['fetchProfile'])
    },
    created() {
      // profileView에 들어왔을 때 variableRouting로 변수처리 되어있던 부분이
      // this.$route로 들어온다
      const payload = { username : this.$route.params.username }
      this.fetchProfile(payload)
    },
  }
</script>

<style></style>

```



# Articles

## ArticleList

```js
// modules/articles.js
fetchArticles({ commit, getters }) {
      /* 게시글 목록 받아오기
      GET: articles URL (token)
        성공하면
          응답으로 받은 게시글들을 state.articles에 저장
        실패하면
          에러 메시지 표시
      */
     axios({
       url: drf.articles.articles(),
       method: 'GET',
       headers: getters.authHeader,
     })
     .then(res => commit('SET_ARTICLES', res.data))
     .catch(err => console.error(err.response))
    },
```

```vue
<!--views/ArticleList.vue-->
<template>
  <div>
    <h1>Home</h1>
    <ul>
      <li v-for="article in articles" :key="article.pk">
        <!-- 작성자 -->
        {{article.user.username}}
        
        <!-- 글 이동 링크(제목) -->
        <router-link :to="{name:'article', params :{articlePK : article.pk}}">
        {{article.title}}
        </router-link>

        <!-- 댓글 개수/ 좋아요 개수 -->
        =>
        ({{ article.comment_count }} | + {{article.like_count}}
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'ArticleList',
    computed: {
      ...mapGetters(['articles'])
    },
    methods: {
      ...mapActions(['fetchArticles'])
    },
    created() {
      this.fetchArticles()
    },
  }
</script>

<style></style>
```

## ArticleDetail

```js
// modules/articles.js
fetchArticle({ commit, getters }, articlePK) {
      /* 단일 게시글 받아오기
      GET: article URL (token)
        성공하면
          응답으로 받은 게시글들을 state.articles에 저장
        실패하면
          단순 에러일 때는
            에러 메시지 표시
          404 에러일 때는
            NotFound404 로 이동
      */
      axios({
        url: drf.articles.articles(articlePK),
        method: 'GET',
        headers: getters.authHeader,
      })
      .then(res => commit('SET_ARTICLE', res.data))
      .catch(err => {
        console.error(err.response)
        // 없는 게시글 보여달라그러면 404 보여주기!
        if (err.response.status === 404) {
          router.push({name: 'NotFound404'})
        }
      })
    },
```

```vue
<!--views/ArticleDetailView.vue-->
<template>
  <div>
    <h1>{{ article.title }}</h1>

    <p>
      {{ article.content }}
    </p>
    <!-- Article Edit/Delete UI -->
    <div>
      <button>Edit</button>
      |
      <button>Delete</button>
    </div>

    <!-- Article Like UI -->
    <div>
      Likeit:
      <button>{{article.like_users.length}}</button>
    </div>

    <hr />
    <!-- Comment UI -->
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'ArticleDetail',
    data() {
      return {
        articlePk: 123,
      }
    },
    computed: {
      ...mapGetters(['isAuthor', 'article'])
    },
    methods: {
      ...mapActions(['fetchArticle'])
    },
    created() {
      // URL에 있는 articlePK를 잡아서 articles.js로 넘겨줘
      const articlePK = this.$route.params.articlePK
      this.fetchArticle(articlePK)
    },
  }
</script>

<style></style>
```

## Like Article&Like

```js
// modules/articles.js
fetchArticle({ commit, getters }, articlePK) {
      /* 단일 게시글 받아오기
      GET: article URL (token)
        성공하면
          응답으로 받은 게시글들을 state.articles에 저장
        실패하면
          단순 에러일 때는
            에러 메시지 표시
          404 에러일 때는
            NotFound404 로 이동
      */
      axios({
        url: drf.articles.articles(articlePK),
        method: 'GET',
        headers: getters.authHeader,
      })
      .then(res => commit('SET_ARTICLE', res.data))
      .catch(err => {
        console.error(err.response)
        // 없는 게시글 보여달라그러면 404 보여주기!
        if (err.response.status === 404) {
          router.push({name: 'NotFound404'})
        }
      })
    },
        ...,
            
   likeArticle({ commit, getters }) {
      /* 좋아요
      POST: likeArticle URL(token)
        성공하면
          state.article 갱신
        실패하면
          에러 메시지 표시
      */
     axios({
       url: drf.articles.likeArticle(3),
       method: 'POST',
       headers: getters.authHeader,
     })
     .then(res => commit('SET_ARTICLE', res.data))
     .catch(err => console.error(err.response))
    },
```

```vue
<!--views/ArticleDetailView.vue-->
<template>
  <div>
    <h1>{{ article.title }}</h1>

    <p>
      {{ article.content }}
    </p>
    <!-- Article Edit/Delete UI -->
    <div>
      <button>Edit</button>
      |
      <button>Delete</button>
    </div>

    <!-- Article Like UI -->
    <div>
      Likeit:
      <button
      @click="likeArticle(articlePK)">{{article.like_users.length}}</button>
    </div>

    <hr />
    <!-- Comment UI -->
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'ArticleDetail',
    data() {
      return {
        articlePk: this.$route.params.articlePK,
      }
    },
    computed: {
      ...mapGetters(['isAuthor', 'article'])
    },
    methods: {
      ...mapActions(['fetchArticle', 'likeArticle'])
    },
    created() {
      // URL에 있는 articlePK를 잡아서 articles.js로 넘겨줘
      this.fetchArticle(this.articlePK)
    },
  }
</script>

<style></style>
```

## Navbar

```vue
<!--App.vue-->
<template>
  <div id="app">
    <nav-bar></nav-bar>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'

  import { mapActions } from 'vuex'

  export default {
    name: 'App',
    components: { NavBar },
    methods: {
      ...mapActions(['fetchCurrentUser'])
    },
    created() {
      this.fetchCurrentUser()
    }
  }
</script>

<style></style>
```

```js
//index.js 
...,
    router.beforeEach((to, from, next) => {
  // ex) '/' => '/articles/1' 할 때
  // 이전 페이지에서 발생한 에러메세지 삭제
  store.commit('SET_AUTH_ERROR', null)

  const { isLoggedIn } = store.getters

  // Login 필요 없는 route의 name
  const noAuthPages = ['login', 'signup']

  // 현재 이동하고자 하는 페이지가
  // Authentication이 필요한가?
  const isAuthRequired = !noAuthPages.includes
  {to.name}

  // Auth가 필요한데, 로그인이 되어있지 않다면?
  if (isAuthRequired && !isLoggedIn) {
    alert('Please Login. Redirecting...')
    next({name : 'login'})
  } else {
    next()
  }

})

/*
Navigation Guard 설정
  (이전 페이지에서 있던 에러 메시지 삭제)

  로그인(Authentication)이 필요 없는 route 이름들 저장(/login, /signup)

  0. router 에서 이동 감지

  1. 현재 이동하고자 하는 페이지가 로그인이 필요한지 확인
  
  2. 로그인이 필요한 페이지인데 로그인이 되어있지 않다면
    로그인 페이지(/login)로 이동

  3. 로그인이 되어 있다면
    원래 이동할 곳으로 이동
  
  4. 로그인이 되어있는데 /login, /signup 페이지로 이동한다면
    메인 페이지(/)로 이동
    

*/
```



# Article CUD

## CreateArticle

```js
// articles.js
...,
    export default {
        ...,
          actions: {
            createArticle({ commit, getters }) {
          /* 게시글 생성
          POST: articles URL (게시글 입력정보, token)
            성공하면
              응답으로 받은 게시글을 state.article에 저장
              ArticleDetailView 로 이동
            실패하면
              에러 메시지 표시
          */
         axios({
           url: drf.articles.createArticle(),
           method: 'POST',
           data: {}
         })
         .then(res=> {
           commit('SET_ARTICLE', res.data)
           router.push({
             name: 'article',
             params : {articlePk: getters.article.pk}
           })
         })
        ...,

```

```vue
<!--ArticleNewView.vue-->
<template>
  <div>
      <h1>New Article</h1>
    <article-form :article="article"
    action="create"></article-form>
  </div>
</template>

<script>
import ArticleForm from '@/components/ArticleForm.vue'

export default {
    name: 'AritcleNewView',
    data() {
      return {
        article: {
          pk: null,
          title: '',
          content: '',
        }
      }
    },
    components: { ArticleForm },
  }
</script>

<style></style>
```

form은 부품이니까 component

new랑 edit이랑 안에 들어가는 Form은 같다. 

=> ArticleNewView는 title이랑 content를 빈 값으로 넘길거다! : __빈 거를 인자로 내리듯이 : Props__

=> ArticleEditView는 title과 contnet가 값이 있다 : __차있는 것을 인자로 내리듯이 : Props__



## Edit Article

```js
// articles.js
...,
import _ from 'lodash'

export default {
    ...,
    
  getters: {
    ...,
    // 빈 객체 판별이 JS에서 의외로 큰 난제임..
    // lodash 선생님 도와주십쇼
    // isArticle: state => !!state.article,
    isArticle: state => !_.isEmpty(state.article),
    },
        ...,
            
  actions: {
      ...,
      updateArticle({ commit, getters }, {pk, title, content}) {
      /* 게시글 수정
      PUT: article URL (게시글 입력정보, token)
        성공하면
          응답으로 받은 게시글을 state.article에 저장
          ArticleDetailView 로 이동
        실패하면
          에러 메시지 표시
      */
     axios({ 
       url: drf.articles.article(pk),
       method: 'PUT',
       data: { title: title, content: content},
       headers: getters.authHeader,
     })
     .then(res=> {
      commit('SET_ARTICLE', res.data)
      router.push({
        name: 'article',
        params : {articlePk: getters.article.pk}
      })
    })
    },
```

```vue
<!--ArticleEditView.vue-->
<template>
  <div>
    <h1>Edit Article</h1>
    <article-form v-if="isArticle"  :article="article"
    action="update"></article-form>
  </div>
</template>

<script>
import ArticleForm from '@/components/ArticleForm.vue'
import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'AritcleEditView',
    components: { ArticleForm },
    computed: { 
      ...mapGetters(['article', 'isArticle'])
     },
    methods: {
      ...mapActions(['fetchArticle'])
    },
    created() {
      // articlePk
      // fetchArticle : 숫자만 넘겨줘~
      // 비동기상태니까 articlePk가 언제 넘어갈지 몰라 ㅠㅠ...
      // Edit 페이지 다 렌더링 되고 데이터가 넘어가니깐
      // v-if를 활용해서 
      this.fetchArticle(this.$route.params.articlePk)
    },
  }
</script>

<style></style>
```

```vue
<!--ArticleForm.vue-->
<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="title">title: </label>
      <input v-model="newArticle.title" type="text" id="title" />
    </div>
    <div>
      <label for="content">contnet: </label>
      <textarea v-model="newArticle.content" type="text" id="content"></textarea>
    </div>
    <div>
      <button>{{action}}</button>
    </div>
  </form>
</template>

<script>
  // import { mapActions } from 'vuex'

  export default {
    name: 'ArticleForm',
    props: {
      article: Object,
      action: String,
    },
    data() {
      return {
        newArticle: {
          title: this.article.title,
          content: this.article.content,
        }
      }
    },

    methods: {
      ...mapActions(['createArticle', 'updateArticle']),
      // 왜 바로 안넘어가게하나요? newArticle 값이 넘어가야지!!
      // 너 create하는거야 edit하는거야? : action이 알려줄거야!
      onSubmit() {
        if (this.action === 'create') {
          this.createArticle(this.newArticle)
        } else if (this.action === 'update') {
          // 하나로 묶어주고~ : articles.js.updateArticle에서 하나의 인자만 받
          const payload = {
            articlePk: this.article.pk,
            ...this.newArticle,
          }
          this.updateArticle(payload)
        }
      },
    },
  }
</script>

<style></style>
```



## delete article

```js
// articles.js
...,
export default {
    ...,
  actions: {
    ...,
    deleteArticle({ commit, getters }, articlePK) {
      /* 게시글 삭제
      사용자가 확인을 받고
        DELETE: article URL (token)
          성공하면
            state.article 비우기
            AritcleListView로 이동
          실패하면
            에러 메시지 표시
      */
     if (confirm("Are you sure you want to delete this?") {
       axios({
         url: drf.articles.article(articlePk),
         method: 'delete',
         headers: getters.headers,
       })
       .then(() => {
         commit('SET_ARTICLE', {})
         router.push({name: 'articles'})
       })
       .catch(err => console.log(err.response);)
     }
    },
```

```vue
<!--ArticleDelete.vue-->

<button @click="deleteArticle(articlePk)">Delete</button>
```

```vue
<!--ArticleDetailView.vue-->
<template>
  <div>
    <h1>{{ article.title }}</h1>

    <p>
      {{ article.content }}
    </p>
    <!-- Article Edit/Delete UI -->
    <div v-if="isAuthor">
      <router-link :to="{ name: 'articleEdit', params: {articlePk}}">
        <button>Edit</button>
      </router-link>
        |
        <button @click="deleteArticle(articlePk)">Delete</button>
    </div>

    <!-- Article Like UI -->
    <div>
      Likeit:
      <button
      @click="likeArticle(articlePK)">{{article.like_users.length}}</button>
    </div>

    <hr />
    <!-- Comment UI -->
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'ArticleDetail',
    data() {
      return {
        articlePk: this.$route.params.articlePK,
      }
    },
    computed: {
      ...mapGetters(['isAuthor', 'article'])
    },
    methods: {
      ...mapActions([
        'fetchArticle',
        'likeArticle',
        'deleteArticle',
        ])
    },
    created() {
      // URL에 있는 articlePK를 잡아서 articles.js로 넘겨줘
      this.fetchArticle(this.articlePK)
    },
  }
</script>

<style></style>
```

