<template>
  <a-table
    :columns="columns"
    :dataSource="data"
    :pagination="pagination"
    :loading="loading">
    <template slot="name" slot-scope="name">
      {{name.first}} {{name.last}}
    </template>
  </a-table>
</template>
<script>

  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
    scopedSlots: {customRender: 'name'},
  }, {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [{text: 'Male', value: 'male'}, {text: 'Female', value: 'female'}],
    width: '20%',
  }, {
    title: 'Email',
    dataIndex: 'email',
  }];

  export default {
    data() {
      return {
        data: [],
        pagination: {},
        loading: false,
        columns,
      };
    },
    methods: {},
  };
</script>
