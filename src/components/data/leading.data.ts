interface LeadingDataItem {
  title?: string,
  data: Map<string, {
    alt?: string,
    src?: string,
    url?: string,
    [key: string]: any
  }>
}

const list:LeadingDataItem[] = [
  {
    title: 'Vue',
    data: new Map([
      [
        'vue',
        {
          alt: 'vue',
          src: '/imgs/vue.svg',
          url: 'https://cn.vuejs.org/'
        }
      ],
      [
        'vue-router',
        {
          alt: 'vue-router',
          src: '/imgs/vue-router.svg',
          url: 'https://router.vuejs.org/zh/guide/'
        }
      ],
      [
        'vuex',
        {
          alt: 'vuex',
          src: '/imgs/vue.svg',
          url: 'https://vuex.vuejs.org/zh/guide/'
        }
      ],
      [
        'elementplus',
        {
          alt: 'elementplus',
          src: '/imgs/elementplus.svg',
          url: 'https://element-plus.org/zh-CN/component/button.html'
        }
      ],
      [
        'vueuse',
        {
          alt: 'vueuse',
          src: '/imgs/vueuse.svg',
          url: 'https://www.vueusejs.com/'
        }
      ],
      [
        'pinia',
        {
          alt: 'pinia',
          src: '/imgs/pinia.svg',
          url: 'https://pinia.vuejs.org/'
        }
      ]
    ])
  },
  {
    title: 'React',
    data: new Map([
      [
        'react',
        {
          alt: 'react',
          src: '/imgs/react.svg',
          url: 'https://zh-hans.react.dev/'
        }
      ],
      [
        'react-router',
        {
          alt: 'react-router',
          src: '/imgs/react-router.png',
          url: 'https://reactrouter.com/en/main'
        }
      ],
      [
        'redux',
        {
          alt: 'redux',
          src: '/imgs/redux.svg',
          url: 'https://redux.js.org/'
        }
      ],
      [
        'redux中文',
        {
          alt: 'redux',
          src: '/imgs/redux.svg',
          url: 'https://www.redux.org.cn/'
        }
      ],
      [
        'redux-saga',
        {
          alt: 'redux-saga',
          src: '/imgs/Redux-Saga.png',
          url: 'https://redux-saga.js.org/'
        }
      ],
      [
        'mobx',
        {
          alt: 'mobx',
          src: '/imgs/mobx.png',
          url: 'https://mobx.js.org/README.html'
        }
      ],
      [
        'antd',
        {
          alt: 'antd',
          src: '/imgs/antd.svg',
          url: 'https://ant.design/docs/react/introduce'
        }
      ],
    ])
  },
  {
    title: 'Others',
    data: new Map([
      [
        'nodejs',
        {
          alt: 'nodejs',
          src: '/imgs/nodejs.svg',
          url: 'https://nodejs.cn/api/'
        }
      ],
      [
        'Express',
        {
          url: 'https://www.expressjs.com.cn/'
        }
      ],
      [
        'jest',
        {
          alt: 'jest',
          src: '/imgs/jest.png',
          url: 'https://jestjs.io/'
        }
      ],
      [
        'babel',
        {
          alt: 'babel',
          src: '/imgs/babel.png',
          url: 'https://www.babeljs.cn/'
        }
      ],
      [
        'vite',
        {
          alt: 'vite',
          src: '/imgs/vite.svg',
          url: 'https://cn.vitejs.dev/'
        }
      ],
      [
        'webpack',
        {
          alt: 'webpackjs',
          src: '/imgs/webpack.svg',
          url: 'https://www.webpackjs.com/concepts/'
        }
      ],
      [
        'rollup',
        {
          alt: 'rollup',
          src: '/imgs/rollup.svg',
          url: 'https://rollupjs.org/'
        }
      ],
      [
        'typescript',
        {
          alt: 'typescript',
          src: '/imgs/ts.png',
          url: 'https://www.typescriptlang.org/'
        }
      ],
      [
        'typescript-play',
        {
          alt: 'typescript-play',
          src: '/imgs/ts.png',
          url: 'https://www.typescriptlang.org/play'
        }
      ]
    ])
  },
  {
    title: 'Functional Demos',
    data: new Map([
      [
        'upload',
        {
          alt: 'vue',
          url: '/upload'
        }
      ],
      [
        'myUpload',
        {
          alt: 'vue',
          url: '/myUpload'
        }
      ],
      [
        'Download',
        {
          alt: 'Download',
          url: '/download'
        }
      ],
      [
        'MyForm',
        {
          alt: 'vue',
          url: '/myForm'
        }
      ]
    ])
  }
]
export default list
