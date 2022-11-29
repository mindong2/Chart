// 매번 컴포넌트마다 호출하는걸 줄이기위해 플러그인화 코드 작성

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)

export default {
    //install이라는 이벤트에서 Vue를 실행 
    install(Vue) {
        // 라이브러리 로딩해와서 충돌이 나지않도록 prefix => $_
        Vue.prototype.$_Chart = Chart;
    }
}