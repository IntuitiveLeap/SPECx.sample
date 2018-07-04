$(function() {

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
        var $self = $(this);
        if ($self.children().find('.lvl2').hasClass('hide')) {
            $self.find('.lvl2').removeClass('hide');
            $self.siblings().find('.lvl2').addClass('hide');
            return false;
        }else{
            $self.find('.lvl2').addClass('hide');
            $self.siblings().find('.lvl2').addClass('hide');
        }
    });

    $('.lvl2').on('click', function() {
        var $self = $(this);
        if ($self.children().find('.lvl3').hasClass('hide')) {
            $self.find('.lvl3').removeClass('hide');
            $self.siblings().find('.lvl3').addClass('hide');
            return false;
        }else{
            $self.find('.lvl3').addClass('hide');
            $self.siblings().find('.lvl3').addClass('hide');
        }
    });

    $('.lvl3').on('click', function() {
        var $self = $(this);
        if ($self.find('.lvl4').length === 0) {
            return false;
        }else if ($self.children().find('.lvl4').hasClass('hide')) {
            $self.find('.lvl4').removeClass('hide');
            $self.siblings().find('.lvl4').addClass('hide');
            return false;
        }else{
            $self.find('.lvl4').addClass('hide');
            $self.siblings().find('.lvl4').addClass('hide');
        }
    });
// end of script.
});
