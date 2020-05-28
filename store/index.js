/* eslint-disable */
const API_URL = 'http://host-wordpress.test/wp-json/wp/v2'
// const PROD_URL = 'https://boye.verdics.com/wp-json/wp/v2'
export const state = () => ({
  posts: [],
  singlePost: [],
  twoPosts: [],
  newsPost: [],
  blogPost: {},
  breakingNews: [],
  pages: [],
  loading: false
})

export const mutations = {
  RECIEVE_POST(state, payload) {
    state.posts = payload
  },
  RECIEVE_SINGLE_POST(state, payload) {
    state.singlePost = payload
  },
  RECIEVE_TWO_POST(state, payload) {
    state.twoPosts = payload
  },
  RECIEVE_NEWS_POST(state, payload) {
    state.newsPost = payload
  },
  RECIEVE_BLOG_POST(sate, payload) {
    state.blogPost = payload
  },
  RECIEVE_BREAKING_NEWS(state, payload) {
    state.breakingNews = payload
  },
  RECIEVE_PAGES(state, payload) {
    state.pages = payload
  },
  UPDATE_LOADING(state, payload) {
    state.loading = payload
  }
}

export const actions = {
  getPages({state, commit }) {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/pages`)
      .then(x => x.json())
      .then(pages => {
        resolve(pages)
        commit('RECIEVE_PAGES', pages)
      })
    })  
  },

  getPosts({ state, commit }) {
    if (state.posts.length) return
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/posts?page=1&per_page=20`)
      .then(x => x.json())
      .then(posts => {
        resolve(posts)
        commit('RECIEVE_POST', posts)
      }).catch(err => {
        reject(err)
      })
    })
  },

  async getSinglePost({ state, commit, dispatch }) {
    if (state.singlePost.length) return
    commit('UPDATE_LOADING', true)
    try {
      const res = await fetch(`${API_URL}/posts?include[]=43`)
      const data = await res.json()
      const posts = await data
      dispatch('getTwoPosts')
      commit('RECIEVE_SINGLE_POST', posts)
      commit('UPDATE_LOADING', false)
    } catch (err) {

    }
  },
  async getTwoPosts({ commit, dispatch }) {
    try {
      const p1 = fetch(`${API_URL}/posts?include[]=14`).then(x => x.json())
      const p2 = fetch(`${API_URL}/posts?include[]=12`).then(x => x.json())
      const data = (await Promise.all([p1, p2])).flat()
      // const data = await res.json()
      const posts = await data
      commit('RECIEVE_TWO_POST', posts)
      dispatch('getNews')
    } catch (err) {

    }
  },
  async getNews({ commit }) {
    try {
      const res = await fetch(`${API_URL}/posts?categories=3&per_page=6`).then(x => x.json())
      const posts = res
      commit('RECIEVE_NEWS_POST', posts)
    } catch (err) {

    }
  },
  async getBreakingNews({ commit, dispatch }) {
    try {
      const p1 = fetch(`${API_URL}/posts?include[]=14`).then(x => x.json())
      const p2 = fetch(`${API_URL}/posts?include[]=12`).then(x => x.json())
      const p3 = fetch(`${API_URL}/posts?include[]=14`).then(x => x.json())
      const data = (await Promise.all([p1, p2, p3])).flat()
      // const data = await res.json()
      const posts = await data
      commit('RECIEVE_BREAKING_NEWS', posts)
    } catch (err) {

    }
  }
}

