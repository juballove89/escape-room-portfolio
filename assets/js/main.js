(function () {
      var urls = window.__FRAME_DATA_URLS;
      var TOTAL_FRAMES = urls && urls.length ? urls.length : 200;
      var LERP_SPEED = 0.18;
      var images = new Array(TOTAL_FRAMES);
      var currentFrame = 0, targetFrame = 0, loaded = 0, isReady = false;
      function framePath(i){ return 'frames-webp/frame_' + String(i+1).padStart(6,'0') + '.webp'; }
      var loaderEl = document.getElementById('loader');
      var barEl = document.getElementById('loader-bar');
      var canvas = document.getElementById('bgCanvas');
      var ctx = canvas.getContext('2d');
      function resize(){
        var w = innerWidth || document.documentElement.clientWidth || 1920;
        var h = innerHeight || document.documentElement.clientHeight || 1080;
        canvas.width = w;
        canvas.height = h;
      }
      addEventListener('resize', resize); resize();
      var FRAME_PHASE = 0.36, FADE_START = FRAME_PHASE + 0.012, FADE_END = FRAME_PHASE + 0.11;
      function drawFrame(img){
        if(!img||!img.naturalWidth) return;
        var cw=canvas.width, ch=canvas.height;
        if(cw<10||ch<10) return;
        ctx.clearRect(0,0,cw,ch);
        var p = getFrameScrubT();
        var ZOOM = 1.0;
        var parallaxX = Math.sin(p * Math.PI) * 6;
        var parallaxY = (p - 0.5) * 4;
        var s = Math.max(cw/img.naturalWidth, ch/img.naturalHeight) * ZOOM;
        var w = Math.max(img.naturalWidth*s, cw+2), drawH = Math.max(img.naturalHeight*s, ch+2);
        ctx.drawImage(img, (cw-w)/2 + parallaxX, (ch-drawH)/2 + parallaxY, w, drawH);
        if(canvas){ canvas.style.transform = 'none'; }
      }
      function pageScroll01(){
        var maxScroll = Math.max(document.documentElement.scrollHeight - innerHeight, 1);
        return Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      }
      function getFrameScrubT(){
        var pageP = pageScroll01();
        if (pageP <= FRAME_PHASE) return pageP / FRAME_PHASE;
        return 1;
      }
      function getFrameToStaticMix(){
        var p = pageScroll01();
        if (p <= FADE_START) return 0;
        if (p >= FADE_END) return 1;
        return (p - FADE_START) / (FADE_END - FADE_START);
      }
      function onFrameLoad(){ loaded++; if(barEl) barEl.style.width=(loaded/TOTAL_FRAMES*100)+'%'; if(loaded>=TOTAL_FRAMES){ isReady=true; if(loaderEl) loaderEl.style.display='none'; } }
      for(var i=0;i<TOTAL_FRAMES;i++){ images[i]=new Image(); images[i].onload=onFrameLoad; images[i].onerror=onFrameLoad; images[i].src=urls&&urls[i]?urls[i]:framePath(i); }
      window.__currentFrame = 0;
      function animate(){
        if(isReady) targetFrame = getFrameScrubT() * (TOTAL_FRAMES - 1);
        currentFrame += (targetFrame - currentFrame) * LERP_SPEED;
        var idx = Math.round(currentFrame);
        if(idx>=0&&idx<TOTAL_FRAMES) drawFrame(images[idx]);
        window.__currentFrame = currentFrame;
        var mix = getFrameToStaticMix();
        var bw = document.getElementById('bgWrap'), bd = document.getElementById('postFrameBackdrop');
        if (bw) bw.style.opacity = String(1 - mix);
        if (bd) bd.style.opacity = String(mix);
        var hero = document.getElementById('heroContent');
        if (hero) {
          var p = getFrameScrubT();
          var o = Math.max(0, 1 - p * 3.2);
          var scale = 1 - p * 0.08;
          var y = -p * 60 - Math.sin(p * Math.PI) * 15;
          hero.style.opacity = String(o);
          hero.style.transform = 'translateY(' + y + 'px) scale(' + scale + ')';
          hero.style.pointerEvents = o < 0.08 ? 'none' : 'auto';
        }
        // Section parallax disabled — using CSS scroll reveal instead
        requestAnimationFrame(animate);
      }
      if(isReady) animate(); else (function wait(){ if(loaded>=TOTAL_FRAMES){ isReady=true; if(loaderEl) loaderEl.style.display='none'; animate(); } else { requestAnimationFrame(wait); } })();
    })();