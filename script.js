$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 1400) {
        // console.log("Works")
        document.getElementById(`navbar`).style.backgroundColor = '#3081C1';
    }

 });

 $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() < $(document).height() - 1200) {

        document.getElementById(`navbar`).style.backgroundColor = '';
    }
 });
