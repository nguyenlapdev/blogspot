### Bước 1: Thêm CSS
Các bạn copy CSS bên dưới dán trước thẻ đóng </b:skin> và lưu lại

### Bước 2: Thêm JS
Các bạn copy đoạn JS bên dưới dán trước thẻ đóng </body> và lưu lại. Để code trong thể CDATA
```
<b:if cond='data:view.isSingleItem'>
  <script>
    //<![CDATA[
      <!-- Code here ->
    //]]>
  </script>
</b:if>
```

### Bước 3 : Lưu lại là xong.
