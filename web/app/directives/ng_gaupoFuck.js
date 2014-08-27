gaupoBlog.directive('gaupoFuckCode', ['$timeout',
    function(time) {
        var e;

        function highlighCode(pre) {
                if (pre) {
                    for (var i = 0; i < pre.length; i++) {
                        if (pre[0]) {
                            // pre[0].className += ' hljs';
                            hljs.highlightBlock(pre[0]);
                        }
                    }
                }
        }

        function link(scope, element, attrs) {
            //finished biding            
            time(function() {
               var pre = element[0].getElementsByTagName('pre');
                highlighCode(pre);
            }, 0);

            scope.$on('dataLoaded', function() {
                time(function() {
                  var pre = element[0].getElementsByTagName('pre');
                highlighCode(pre);
                }, 0);                
            }); 
        };

        return {
            link: link
        };
    }
]);
