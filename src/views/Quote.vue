<template>
  <div class="quote">
    
    <div>
      <a target="_blank" href="https://www.npmjs.com/package/vueditor">vueditor套件引用</a>
    </div>
    <div>
      <label>按鈕文字顯示</label>
      <div id="editor_container_1"></div>
    </div>
      
    <label>內容</label>
    <div id="editor_container_2"></div>
  </div>
</template>
<script>
// @ is an alias to /src
import { createEditor } from 'vueditor';
import 'vueditor/dist/style/vueditor.min.css';


export default {
  name: 'Quote',
  components: {
      createEditor/*建立多個編輯器*/
  },
  mounted() {
    this.btn_title = createEditor('#editor_container_1', {
        toolbar: [
          // 'removeFormat', 'undo', '|' , 'justifyLeft', 'justifyCenter', 'justifyRight'
          'removeFormat', 'undo'
        ],
        uploadUrl: '',
        id: '',
        classList: []
    });
    this.content = createEditor('#editor_container_2', {
        toolbar: [
        'removeFormat', 'undo', '|', 'link', 'unLink', 'foreColor', 'backColor'
      ],
      fontSize: ['12px', '14px', '16px', '18px'],
    });
    // this.content.setContent('your content here');
  },
  methods: {
    
  }
}

</script>
