import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import jingfeishenqing from '@/views/modules/jingfeishenqing/list'
    import keyanxiangmu from '@/views/modules/keyanxiangmu/list'
    import liuyan from '@/views/modules/liuyan/list'
    import news from '@/views/modules/news/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryJingfeishenqingYesno from '@/views/modules/dictionaryJingfeishenqingYesno/list'
    import dictionaryKeyanxiangmu from '@/views/modules/dictionaryKeyanxiangmu/list'
    import dictionaryKeyanxiangmuYesno from '@/views/modules/dictionaryKeyanxiangmuYesno/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import jingfeishenqingAdd from '@/views/modules/jingfeishenqing/add-or-update'






//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryJingfeishenqingYesno',
        name: '审核结果',
        component: dictionaryJingfeishenqingYesno
    }
    ,{
        path: '/dictionaryKeyanxiangmu',
        name: '资料类型',
        component: dictionaryKeyanxiangmu
    }
    ,{
        path: '/dictionaryKeyanxiangmuYesno',
        name: '审核结果',
        component: dictionaryKeyanxiangmuYesno
    }
    ,{
        path: '/dictionaryNews',
        name: '公告信息类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/jingfeishenqing',
        name: '经费申请审核',
        component: jingfeishenqing
      }
    ,{
        path: '/keyanxiangmu',
        name: '科研项目',
        component: keyanxiangmu
      }
    ,{
        path: '/liuyan',
        name: '留言版',
        component: liuyan
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
	  ,{
	      path: '/jingfeishenqingAdd',
	      name: '经费申请',
	      component: jingfeishenqingAdd
	    },
	  


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
