<template>
  <div class="children">
    <p v-text="ch_msg"></p>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Children',
  props: ['ch_msg'],
  data() {
    return {
      ch_new_msg: '由子階回傳的資料'
    }
  }
}

</script>
