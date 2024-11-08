import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import baoxiu from '@/views/modules/baoxiu/list'
    import chat from '@/views/modules/chat/list'
    import chewei from '@/views/modules/chewei/list'
    import cheweiOrder from '@/views/modules/cheweiOrder/list'
    import dictionary from '@/views/modules/dictionary/list'
    import fangwu from '@/views/modules/fangwu/list'
    import gonggao from '@/views/modules/gonggao/list'
    import jiaofei from '@/views/modules/jiaofei/list'
    import weixui from '@/views/modules/weixui/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yuangong from '@/views/modules/yuangong/list'
    import config from '@/views/modules/config/list'
    import dictionaryBaoxiu from '@/views/modules/dictionaryBaoxiu/list'
    import dictionaryBaoxiuZhuangtai from '@/views/modules/dictionaryBaoxiuZhuangtai/list'
    import dictionaryChat from '@/views/modules/dictionaryChat/list'
    import dictionaryChewei from '@/views/modules/dictionaryChewei/list'
    import dictionaryCheweiOrder from '@/views/modules/dictionaryCheweiOrder/list'
    import dictionaryCheweiZhuangtai from '@/views/modules/dictionaryCheweiZhuangtai/list'
    import dictionaryFangwu from '@/views/modules/dictionaryFangwu/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryJiaofei from '@/views/modules/dictionaryJiaofei/list'
    import dictionaryJiaofeiShifou from '@/views/modules/dictionaryJiaofeiShifou/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'





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
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryBaoxiu',
        name: '报修类型',
        component: dictionaryBaoxiu
    }
    ,{
        path: '/dictionaryBaoxiuZhuangtai',
        name: '报修状态',
        component: dictionaryBaoxiuZhuangtai
    }
    ,{
        path: '/dictionaryChat',
        name: '数据类型',
        component: dictionaryChat
    }
    ,{
        path: '/dictionaryChewei',
        name: '车位类型',
        component: dictionaryChewei
    }
    ,{
        path: '/dictionaryCheweiOrder',
        name: '订单类型',
        component: dictionaryCheweiOrder
    }
    ,{
        path: '/dictionaryCheweiZhuangtai',
        name: '车位状态',
        component: dictionaryCheweiZhuangtai
    }
    ,{
        path: '/dictionaryFangwu',
        name: '房屋类型',
        component: dictionaryFangwu
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryJiaofei',
        name: '缴费类型',
        component: dictionaryJiaofei
    }
    ,{
        path: '/dictionaryJiaofeiShifou',
        name: '是否缴费',
        component: dictionaryJiaofeiShifou
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '状态',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/baoxiu',
        name: '报修',
        component: baoxiu
      }
    ,{
        path: '/chat',
        name: '投诉管理',
        component: chat
      }
    ,{
        path: '/chewei',
        name: '车位',
        component: chewei
      }
    ,{
        path: '/cheweiOrder',
        name: '车位订单',
        component: cheweiOrder
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/fangwu',
        name: '房屋',
        component: fangwu
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/jiaofei',
        name: '缴费',
        component: jiaofei
      }
    ,{
        path: '/weixui',
        name: '维修指派',
        component: weixui
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/yuangong',
        name: '员工',
        component: yuangong
      }


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
