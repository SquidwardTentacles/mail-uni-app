<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style>
/*每个页面公共css */
.flexbox {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.flexbox.between {
  justify-content: space-between;
}
.flexbox.a-start {
  align-items: flex-start;
}
.flexbox.j-end {
  justify-content: flex-end;
}
.flexbox.j-start {
  justify-content: flex-start;
}
.flexbox.j-center {
  justify-content: center;
}
.flexbox.a-start {
  align-items: start;
}
a {
  text-decoration: none;
}
p,
h1,
h2,
h3 {
  margin: 0;
  padding: 0;
}
input {
  border: none;
  outline: none;
}
li {
  margin-bottom: 0;
  list-style: none;
}
ul {
  padding: 0;
  margin: 0;
}
</style>
