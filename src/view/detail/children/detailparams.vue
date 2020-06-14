<template>
  <div class="params-info" v-if="Object.keys(itemParams).length!==0">
    <table v-for="(table,index) in itemParams.rule.tables" class="info-table" :key="index">
      <tr class="info-tr" v-for="(tr,indey) in table" :key="indey">
        <td class="info-td" v-for="(td,indexz) in tr" :key="indexz">{{td}}</td>
      </tr>
    </table>

    <table>
      <tr v-for="tr in itemParams.info.set" class="info-params">
        <td class="params-key">{{tr.key}}</td>
        <td class="params-value">{{tr.value}}</td>
      </tr>
    </table>

    <div class="info-img" v-if="itemParams.info.image">
      <img :src="itemParams.info.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailparams",
    props:{
      itemParams:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .params-info{
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .params-info table{
    width: 100%;
    border-collapse: collapse;
  }
  .params-info table tr{
    height: 42px;
  }
  .params-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  /*给key一个宽度,否则value值会挤key值*/
  .params-key{
    width: 95px;
  }
  .info-params{
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .params-value {
    color: #eb4868
  }
  .info-img img {
    width: 100%;
  }
</style>
