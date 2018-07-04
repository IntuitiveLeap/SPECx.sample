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
        var $thisItem = $(this);
        if ($thisItem.find('.lvl2').length === 0) {
            console.log($thisItem + 'has no nested items.')
            return false;                                    // no nested <li>? do nothing.
        }else if(!$thisItem.find('.lvl2').hasClass('hide')) {
            console.log($thisItem + "is showing it's sub-items. Hiding them now.")
            $thisItem.find('li').addClass('hide');           // nested <li> is showing? hide it and its children <li> (just in case they are peeking).
        }else{
            console.log($thisItem + "is hiding it's sub-items. Showing them now.")
            $thisItem.find('.lvl2').removeClass('hide');
            $thisItem.siblings().find('li').addClass('hide');
            return false;                                    // nested <li> is hidden? show nested <li> + hide sibling <li>.
        }
    });

    $('.lvl2').on('click', function() {
        var $self = $(this);
        if ($self.find('.lvl3').length === 0) {
            return false;
        }
        if (!$self.find('.lvl3').hasClass('hide')) {
            $self.find('.lvl3').addClass('hide');
        }
        if ($self.children().find('.lvl3').hasClass('hide')) {
            $self.find('.lvl3').removeClass('hide');
            $self.siblings().find('li').addClass('hide');
            return false;
        }else{
            $self.find('.lvl3').addClass('hide');
            $self.siblings().find('li').addClass('hide');
        }
    });

    $('.lvl3').on('click', function() {
        var $self = $(this);
        if ($self.find('.lvl4').length === 0 | !$self.find('.lvl4').hasClass('hide')) {
            return false;
        }
        if ($self.children().find('.lvl4').hasClass('hide')) {
            $self.find('.lvl4').removeClass('hide');
            $self.siblings().find('li').addClass('hide');
            return false;
        }else{
            $self.find('.lvl4').addClass('hide');
            $self.siblings().find('li').addClass('hide');
        }
    });
// end of script.
});
