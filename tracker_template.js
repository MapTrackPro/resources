<script data-version='v1' data-widget-id='TRACKING_CODE' id="maptrack-TRACKING_CODE" type='text/javascript'>
  (function() {
    function async_load(){
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      var theUrl = 'https://app.maptrackpro.com/track/TRACKING_CODE';
      s.src = theUrl + ( theUrl.indexOf('?') >= 0 ? '&' : '?') + 'ref=' + encodeURIComponent(window.location.href);
      var embedder = document.getElementById("maptrack-TRACKING_CODE");
      embedder.parentNode.insertBefore(s, embedder);
    }
    if (window.attachEvent)
      window.attachEvent('onload', async_load);
    else
      window.addEventListener('load', async_load, false);
  })();
</script>