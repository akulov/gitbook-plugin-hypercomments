require(['gitbook', 'jquery'], function (gitbook, $) {
    var lang = 'en',
        widgetId;

    // Load HC widget
    function loadHC() {
        var interval = setInterval(TM, 10);

        // Waiting when HC widget initialized
        function TM() {
            if ('HC' in window) {
                clearInterval(interval);

                if(!$('#hypercomments_widget').size()){
                    var div = $("<div>", {
                        "id": "hypercomments_widget"
                    });
                    $(".book-body .page-inner").append(div);
                }

                var params =  {
                    widget: 'Stream',
                    widget_id: widgetId,
                    href: window.location.href,
                    eager_load: true
                };

                HC.widget('Stream', params, 'add');
            }
        }
    }

    // Init HC widget
    gitbook.events.on("start", function (e, config) {
        widgetId = config.hypercomments.wid;
        lang = config.hypercomments.lang || $('html').attr('lang');

        (function() {
            if("HC_LOAD_INIT" in window)return;
            HC_LOAD_INIT = true;
            var hcc = document.createElement("script"); hcc.type = "text/javascript"; hcc.async = true;
            hcc.src = ("https:" == document.location.protocol ? "https" : "http")+"://w.hypercomments.com/widget/hc/"+widgetId+"/"+lang+"/widget.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hcc, s.nextSibling);
        })();

        loadHC();
    });

    gitbook.events.on("page.change", loadHC);
});
