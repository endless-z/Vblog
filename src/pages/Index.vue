<template>
  <Layout>
    <div style="min-height: 600px" v-loading="loading">
      <el-card shadow="never" style="min-height: 400px" v-if="general.id">
        <div slot="header">
          <span>{{ general.title }}</span>
        </div>
        <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
          发布 {{general.publishTime}}
          <br />
          更新 {{general.uploadTime}}
        </div>
        <div
          style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px"
        >
          <pre style="font-family: '微软雅黑'">{{general.desc}}</pre>
        </div>
        <div v-html="general.desc" class="markdown-body" style="padding-top: 20px"></div>
      </el-card>
      <el-card
        shadow="never"
        style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center"
        v-if="!general.id"
      >
        <font style="font-size: 30px;color:#dddddd ">
          <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
        </font>
      </el-card>
    </div>
  </Layout>
</template>
<page-query>
query {
  new: allStrapiNew {
    edges {
      node {
        id
        title
        desc
        startTime
        publishTime
        uploadTime
      }
    }
  }
}
</page-query>
<script>
// import GistApi from "@/api/gist";
export default {
  metaInfo: {
    title: "最新动态",
  },
  name: 'MainPage',
  data() {
    return {
      query: {
        page: 1,
        pageSize: 1,
      },
      loading: false
    };
  },
  computed: {
    general () {
      return this.$page.new.edges[0].node
    }
  }
};
</script>