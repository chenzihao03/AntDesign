<template>
  <div class="container">
    <div class="card-add-class card-class" @click="addNew">
      <div style="padding-top: 20px;">
        <a-icon type="plus" class="add-class"/>
        <p>新建大屏</p>
      </div>
    </div>
    <div v-for="(item,index) in cardList.slice((currentPage-1)*pageSize,currentPage*pageSize)"
         :key="index"
         :span="7"
         class="card-class"
         @mouseover="setShow(item)"
         @mouseout="setHidden(item)">
      <div class="card-info">
        <img :src="item.imgUrl" alt>
        <div class="edit-class" v-show="item.editShow">
          <p class="p-class">编辑</p>
        </div>
      </div>
      <div class="card-main">
        <span class="main-name">{{item.title}}</span>
        <div class="main-list">
          <div class="list-view">
            <a-tooltip placement="bottom" v-for="(item,index) in buttonList" :key="index">
              <a-icon :type="item.icon"/>
              <template slot="title">
                {{item.name}}
              </template>
            </a-tooltip>
            <span>{{item.issue}}</span>
          </div>
        </div>
      </div>
    </div>
    <pagination
      :pageSize="pageSize"
      :currentPage="currentPage"
      :total="cardList.length"
      @setCurrent="setCurrent"
      class="footer-class"></pagination>
  </div>
</template>
<script>
  import Pagination from '@/common/components/screenpagination'

  export default {
    components: {
      Pagination,
    },
    data() {
      return {
        show: false,
        currentPage: 1,
        buttonList: [{
          name: "删除",
          icon: "delete",
          methods: "delete"
        }, {
          name: "编辑",
          icon: "edit",
          methods: "edit"
        }, {
          name: "预览",
          icon: "eye",
          methods: "eye"
        }, {
          name: "复制",
          icon: "copy",
          methods: "copy"
        }],
        cardList: [{
          title: "大屏模板",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/f26107bbb77a84949285617848745d81.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板1",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/454472c2daac5f428a9f9f63657b22f0.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/f26107bbb77a84949285617848745d81.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板1",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/454472c2daac5f428a9f9f63657b22f0.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/f26107bbb77a84949285617848745d81.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板1",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/454472c2daac5f428a9f9f63657b22f0.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/f26107bbb77a84949285617848745d81.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板1",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/454472c2daac5f428a9f9f63657b22f0.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/f26107bbb77a84949285617848745d81.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板1",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/454472c2daac5f428a9f9f63657b22f0.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/f26107bbb77a84949285617848745d81.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板1",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/454472c2daac5f428a9f9f63657b22f0.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/f26107bbb77a84949285617848745d81.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板1",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/454472c2daac5f428a9f9f63657b22f0.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/f26107bbb77a84949285617848745d81.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板1",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/454472c2daac5f428a9f9f63657b22f0.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/f26107bbb77a84949285617848745d81.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板1",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/454472c2daac5f428a9f9f63657b22f0.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/f26107bbb77a84949285617848745d81.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板1",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/454472c2daac5f428a9f9f63657b22f0.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/f26107bbb77a84949285617848745d81.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板1",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/454472c2daac5f428a9f9f63657b22f0.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/f26107bbb77a84949285617848745d81.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板1",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/454472c2daac5f428a9f9f63657b22f0.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/f26107bbb77a84949285617848745d81.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板1",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/454472c2daac5f428a9f9f63657b22f0.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/f26107bbb77a84949285617848745d81.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板1",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/454472c2daac5f428a9f9f63657b22f0.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/f26107bbb77a84949285617848745d81.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板1",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/454472c2daac5f428a9f9f63657b22f0.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/f26107bbb77a84949285617848745d81.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板1",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/454472c2daac5f428a9f9f63657b22f0.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/f26107bbb77a84949285617848745d81.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板1",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/454472c2daac5f428a9f9f63657b22f0.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/f26107bbb77a84949285617848745d81.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板1",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/454472c2daac5f428a9f9f63657b22f0.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/f26107bbb77a84949285617848745d81.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板1",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/454472c2daac5f428a9f9f63657b22f0.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/f26107bbb77a84949285617848745d81.jpg",
          issue: "已发布",
          editShow: false
        }, {
          title: "大屏模板1",
          imgUrl: "https://oss.bladex.vip/caster/upload/20200512/454472c2daac5f428a9f9f63657b22f0.jpg",
          issue: "已发布",
          editShow: false
        }]
      };
    },
    methods: {
      setShow(item) {
        item.editShow = true;
      },
      setHidden(item) {
        item.editShow = false;
      },
      setCurrent(val) {
        this.currentPage = val;
      },
      addNew() {
        let routeData = this.$router.resolve({
          path: "/newBoard",
          // query: {
          //   name: 'lei',
          //   age: 18,
          //   phoneNum: 12345678901
          // }
        });
        window.open(routeData.href, '_blank');
      }
    },
    computed: {
      pageSize() {
        if (window.screen.width <= 1600 && window.screen.height <= 900) {
          return 11;
        }
        if (window.screen.width <= 1920 && window.screen.height <= 1080) {
          return 14;
        }
        if (window.screen.width <= 2560 && window.screen.height <= 1440) {
          return 34;
        }
      }
    }
  };
</script>
<style scoped>
  .layout-class {
    overflow: hidden;
    background-color: #171b22;
  }

  .footer-class {
    left: 45%;
    bottom: 10px;
    position: absolute;
    background-color: #171b22;
  }

  .card-class {
    position: relative;
    margin: 20px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 258px;
    height: 184px;
    border: 1px solid #3a4659;
    overflow: hidden;
    float: left;
  }

  .card-class:hover {
    box-shadow: 0 0 20px 0 #000;
    border: 1px solid #00baff;
  }

  .card-class img {
    width: 100%;
    height: 100%;
  }

  .card-main {
    font-size: 12px;
    width: 100%;
    height: 36px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background: #1d262e;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 5px;
    color: #bcc9d4;
  }

  .main-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .main-name {
    width: 100px;
    padding: 0 5px;
    line-height: 28px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    border: 1px solid transparent;
  }

  .list-view {
    margin-right: 2px;
  }

  .list-view i {
    margin-right: 10px;
  }

  .card-add-class {
    height: 184px;
    width: 258px;
    border: 1px solid #00baff;
    font-size: 14px;
    color: #8eeeff;
    background-image: -webkit-gradient(linear, right top, left top, color-stop(0, rgba(0, 222, 255, .39)), to(rgba(0, 174, 255, .19)));
    background-image: linear-gradient(-90deg, rgba(0, 222, 255, .39), rgba(0, 174, 255, .19));
    -webkit-box-shadow: 0 0 10px 0 rgba(55, 224, 255, .3);
    box-shadow: 0 0 10px 0 rgba(55, 224, 255, .3);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    margin: 20px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
    float: left;
  }

  .card-class:hover {
    box-shadow: 0 0 30px #000;
  }

  .add-class {
    display: block;
    padding-bottom: 10px;
    text-align: center;
    font-size: 19px;
  }

  .add-class span {
    letter-spacing: 2px;
  }

  .edit-class {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(29, 38, 46, .8);
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: flex;
  }

  .p-class {
    display: inline-block;
    vertical-align: middle;
    height: 32px;
    line-height: 32px;
    padding: 0 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    text-align: center;
    font-size: 14px;
    background-image: linear-gradient(-225deg, #00d3f1, #12b3ff);
    color: #293f52;
    border: none;
    -webkit-transition: .3s ease;
    transition: .3s ease;
    cursor: pointer;
  }
</style>
