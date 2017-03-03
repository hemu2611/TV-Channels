function ChangeVideo(vid)
 {        

    switch (vid) 
    {
          case 1:
          {
            document.getElementById("channelname").innerHTML = " Now Playing... SUN TV"; 
            if ( Hls.isSupported() ) 
             {
            var video = document.getElementById('my-video');
var hls = new Hls();
              hls.loadSource('http://ipsunvj.channelsiptv.com/sunvjpointtIPTV22jlljf4/sunINsource/chunks.m3u8');
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
              video.play();
              });
            }
               break;
            }
           

          case 2:
          {
            document.getElementById("channelname").innerHTML = " Now Playing... VIJAY TV";
            if ( Hls.isSupported() ) 
             {
            var video = document.getElementById('my-video');
            var hls = new Hls();
              hls.loadSource('http://ipsunvj.channelsiptv.com/sunvjpointtIPTV22jlljf4/vijayINsource/chunks.m3u8');
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
              video.play();
              });
            }
                 break;
            
         }
          case 3:
          {
            document.getElementById("channelname").innerHTML = " Now Playing... KALAIGNAR TV"; 
            if ( Hls.isSupported() ) 
             {
            var video = document.getElementById('my-video');
var hls = new Hls();
              hls.loadSource('http://ch.channelsiptv.com/iptvlivee34543bnn98/kalai/chunks.m3u8');
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
              video.play();
              });
            }
               break;
            }

          case 4:
          {
            document.getElementById("channelname").innerHTML = "Now Playing... THANTHI TV"; 
            if ( Hls.isSupported() ) 
             {
            var video = document.getElementById('my-video');
var hls = new Hls();
              hls.loadSource('http://d30zz3d0a9ty3e.cloudfront.net/httporg/ngrp:thanthi_all/chunklist_b500000.m3u8');
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
              video.play();
              });
            }
               break;
            }

          case 5:
          {
            document.getElementById("channelname").innerHTML = "Now Playing... TENTKOTTA TV"; 
            if ( Hls.isSupported() ) 
             {
            var video = document.getElementById('my-video');
var hls = new Hls();
              hls.loadSource('http://tentkotta-thunderstorm.amagi.com/amagi_hls_data_Tentkotta-Primary/CDN/640x360_1604000/index.m3u8');
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
              video.play();
              });
            }
               break;
            }
          case 6:
          {
            document.getElementById("channelname").innerHTML = "Now Playing... K TV"; 
            if ( Hls.isSupported() ) 
             {
            var video = document.getElementById('my-video');
var hls = new Hls();
              hls.loadSource('http://ch.channelsiptv.com/india_iptv2345kk22/ktvINDIA/chunks.m3u8');
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
              video.play();
              });
            }
               break;
            }

          case 7:
          {
            document.getElementById("channelname").innerHTML = "Now Playing... EE TV"; 
            if ( Hls.isSupported() ) 
             {
            var video = document.getElementById('my-video');
var hls = new Hls();
              hls.loadSource('http://live.streamjo.com:1935/eetlive/eettv/chunklist_w1720544616.m3u8');
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
              video.play();
              });
            }
               break;
            }

          case 8:
          {
            document.getElementById("channelname").innerHTML = "Now Playing... JAYA MOVIES"; 
            if ( Hls.isSupported() ) 
             {
            var video = document.getElementById('my-video');
var hls = new Hls();
              hls.loadSource('http://ch.channelsiptv.com/india_iptv2345kk22/jayamovieINDIA/chunks.m3u8');
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
              video.play();
              });
            }
               break;
            }
          case 9:
          {
            document.getElementById("channelname").innerHTML = "Now Playing... JAYA TV"; 
            if ( Hls.isSupported() ) 
             {
            var video = document.getElementById('my-video');
var hls = new Hls();
              hls.loadSource('http://ch.channelsiptv.com/india_iptv2345kk22/jayatvINDIA/chunks.m3u8');
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
              video.play();
              });
            }
               break;
            } 
                 
          case 10:
          {
            document.getElementById("channelname").innerHTML = "Now Playing... Adithya TV"; 
            if ( Hls.isSupported() ) 
             {
            var video = document.getElementById('my-video');
var hls = new Hls();
              hls.loadSource('http://ch.channelsiptv.com/india_iptv2345kk22/adithiyaINDIA/chunks.m3u8');
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
              video.play();
              });
            }
               break;
            } 
            
          case 11:
          {
            document.getElementById("channelname").innerHTML = "Now Playing... Siripoli TV"; 
            if ( Hls.isSupported() ) 
             {
            var video = document.getElementById('my-video');
var hls = new Hls();
              hls.loadSource('http://ch.channelsiptv.com/iptvlivee34543bnn98/siri/chunks.m3u8');
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
              video.play();
              });
            }
               break;
            } 
            
          case 12:
          {
            document.getElementById("channelname").innerHTML = "Now Playing... MV Digital TV"; 
            if ( Hls.isSupported() ) 
             {
            var video = document.getElementById('my-video');
var hls = new Hls();
              hls.loadSource('http://176.31.232.47:8081/apkland_live/mvdigital/chunklist_w949734764.m3u8');
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
              video.play();
              });
            }
               break;
            }

          case 13:
          {
            document.getElementById("channelname").innerHTML = "Now Playing... Sun Music TV"; 
            if ( Hls.isSupported() ) 
             {
            var video = document.getElementById('my-video');
var hls = new Hls();
              hls.loadSource('http://ch.channelsiptv.com/india_iptv2345kk22/sunmusicINDIA/chunks.m3u8');
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
              video.play();
              });
            }
               break;
            }  
          case 14:
          {
            document.getElementById("channelname").innerHTML = "Now Playing... MK Tunes TV"; 
            if ( Hls.isSupported() ) 
             {
            var video = document.getElementById('my-video');
var hls = new Hls();
              hls.loadSource('http://ch.channelsiptv.com/iptvlivee34543bnn98/mktunes/chunks.m3u8');
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
              video.play();
              });
            }
               break;
            }  
            
          
          case 15:
          {
            document.getElementById("channelname").innerHTML = "Now Playing... Peppers TV"; 
            if ( Hls.isSupported() ) 
             {
            var video = document.getElementById('my-video');
var hls = new Hls();
              hls.loadSource('http://xlbor33arvaj.hls.live.wmncdn.net/peppers/live.stream/tracks-v1a1/index.m3u8');
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
              video.play();
              });
            }
               break;
            }  
          case 16:
          {
            document.getElementById("channelname").innerHTML = "Now Playing... Santhora TV"; 
            if ( Hls.isSupported() ) 
             {
            var video = document.getElementById('my-video');
var hls = new Hls();
              hls.loadSource('http://rtmp.santhoratv.zecast.net/santhoratv/santhoratv/chunklist_w1936221919.m3u8');
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
              video.play();
              });
            }
               break;
            }

          case 17:
          {
            document.getElementById("channelname").innerHTML = "Now Playing... Discovery Tamil TV"; 
            if ( Hls.isSupported() ) 
             {
            var video = document.getElementById('my-video');
var hls = new Hls();
              hls.loadSource('http://ch.channelsiptv.com/india_iptv2345kk22/discoverytamil/chunks.m3u8');
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
              video.play();
              });
            }
               break;
            }  
             case 18:
          {
            document.getElementById("channelname").innerHTML = "Now Playing... Zee Tamil TV"; 
            if ( Hls.isSupported() ) 
             {
            var video = document.getElementById('my-video');
var hls = new Hls();
              hls.loadSource('http://176.31.232.47:8081/apkland_live/zeetamil/chunks.m3u8');
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
              video.play();
              });
            }
               break;
            }  
    }
              
  }
  