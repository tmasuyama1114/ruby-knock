// ページコンポーネント登録
// ここでel: '#app'を指定して登録することでViewファイル内で呼び出すことができる
import Vue from 'vue'
import HomeTop from './top'

new Vue({
    el: '#app',
    components: {
        HomeTop // これでViewファイル内では<home-top />で呼べる
    }
})