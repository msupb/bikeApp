document.addEventListener('deviceready', function(){
  var vibe = new Vue({
    el: '#vibe',
    data: {
    },
    methods: {
      vibe: function() {
        navigator.vibrate([10000]);
      }
    },
    mounted: function() {

    }
  });
});
