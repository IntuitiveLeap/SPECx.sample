$(function() {

    var $inner = $('.myBrand .inner');
    var $app = $('.myBrand .app');
    var $blurb = $('.myBrand .blurb');
    var $btn1 = $('.myBrand .myButton1');

    if ($blurb.is(":hidden")) {
        $blurb.slideDown(600);
    }

    var $showInfoBtn = $('#showInfoBtn');
    var $extrasPanel = $('.extrasPanel');
    $showInfoBtn.on('click', function() {
        if ($extrasPanel.is(":hidden")) {
            $extrasPanel.show(400);
            $showInfoBtn.html('Hide "Extra Info" &Uarr; ');
        }else{
            $extrasPanel.hide(400);
            $showInfoBtn.html('Show "Extra Info" &Darr; ');
        }
    });

    $('.lvl1').on('click', function() {
        var $thisItem = $(this);
        if ($thisItem.find('.lvl2').length === 0) {
            return false;                                    // no nested <li>? do nothing.
        }else if(!$thisItem.find('.lvl2').hasClass('hide')) {
            $thisItem.children().find('li').addClass('hide');           // nested <li> is showing? hide thisItem's descendant <li>.
            return false;
        }else{
            $thisItem.find('.lvl2').removeClass('hide');
            $thisItem.siblings().find('li').addClass('hide');
            return false;                                    // nested <li> is hidden? show thisItem's nested <li> + hide siblings' nested <li>.
        }
    });

    $('.lvl2').on('click', function() {
        var $thisItem = $(this);
        if ($thisItem.find('.lvl3').length === 0) {
            return false;                                    // no nested <li>? do nothing.
        }else if(!$thisItem.find('.lvl3').hasClass('hide')) {
            $thisItem.children().find('li').addClass('hide');           // nested <li> is showing? hide thisItem's descendant <li>.
            return false;
        }else{
            $thisItem.find('.lvl3').removeClass('hide');
            $thisItem.siblings().find('li').addClass('hide');
            return false;                                    // nested <li> is hidden? show thisItem's nested <li> + hide thisItem's sibling <li>.
        }
    });

    $('.lvl3').on('click', function() {
        var $thisItem = $(this);
        if ($thisItem.find('.lvl4').length === 0) {
            return false;                                    // no nested <li>? do nothing.
        }else if(!$thisItem.find('.lvl4').hasClass('hide')) {
            $thisItem.children().find('li').addClass('hide');           // nested <li> is showing? hide its children <li> (just in case they are peeking).
            return false;
        }else{
            $thisItem.find('.lvl4').removeClass('hide');
            $thisItem.siblings().find('li').addClass('hide');
            return false;                                    // nested <li> is hidden? show nested <li> + hide sibling <li>.
        }
    });

    $('.lvl4').on('click', function() {
        var $thisItem = $(this);
        if ($thisItem.find('.lvl5').length === 0) {
            return false;                                    // no nested <li>? do nothing.
        }else if(!$thisItem.find('.lvl5').hasClass('hide')) {
            $thisItem.children().find('li').addClass('hide');           // nested <li> is showing? hide its children <li> (just in case they are peeking).
            return false;
        }else{
            $thisItem.find('.lvl5').removeClass('hide');
            $thisItem.siblings().find('li').addClass('hide');
            return false;                                    // nested <li> is hidden? show nested <li> + hide sibling <li>.
        }
    });
// end of script.
});
