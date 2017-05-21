$(document).ready(function() {

    var $inner = $('.myBrand .inner');
    var $app = $('.myBrand .app');
    var $blurb = $('.myBrand .blurb');
    var $btn1 = $('.myBrand .myButton1');

    if ($blurb.is(":hidden")) {
        $blurb.slideDown(1000);
    }

    var $showInfoBtn = $('#showInfoBtn');
    var $extrasPanel = $('.extrasPanel');
    $showInfoBtn.on('click', function() {
        if ($extrasPanel.is(":hidden")) {
            $extrasPanel.show(600);
            $showInfoBtn.html('Hide "Extra Info" &Uarr; ');
        }else{
            $extrasPanel.hide(600);
            $showInfoBtn.html('Show "Extra Info" &Darr; ');
        }
    });

    $('.lvl1').on('click', function() {
        var self = this;
        $(self).children().toggle(300);
        $(self).siblings().children().hide(300);
    });

    $('.lvl2').on('click', function() {
        var self = this
        self.children().toggle(300);
        self.siblings().children().hide(300);
        self.parent().parent().siblings().hide(300);
    });

});
