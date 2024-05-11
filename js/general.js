/*---------------------------------------------------------------------*/
/*---------------------------------------------------------------------*/
;(function($){ 

    /*================= Global Variable Start =================*/		   
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var IEbellow9 = !$.support.leadingWhitespace;
    var iPhoneAndiPad = /iPhone|iPod/i.test(navigator.userAgent);
    var isIE = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0;
    function isIEver () {
      var myNav = navigator.userAgent.toLowerCase();
      return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
    }
    //if (isIEver () == 8) {}
    var report_url = $(location).attr('pathname');
    var base_url = $("input[id=base_url]").val();	
    var jsFolder = base_url + "/themes/stpi/js/";
    var cssFolder = base_url + "themes/stpi/css/";	   	
    var ww = document.body.clientWidth, wh = document.body.clientHeight;
    var mobilePort = 1024, ipadView = 1024, wideScreen = 1600;
    
    /*================= Global Variable End =================*/	
    
    //css3 style calling 
    document.write('<link rel="stylesheet" type="text/css" href="' + cssFolder +'animate.css">');	
    
    /*================= On Document Load Start =================*/	
    $(document).ready( function(){
        
    /* For pop-up cookie read function */
        $(".field-hidden-string").val(report_url);
    
        if($.cookie('SESS624b78c3eda9f52f2e76741337efeedf') !== null){
             $(".commonBtn").removeClass("subscriber_details_popup");
         }	
                
        if ($("body").hasClass('path-user') || $("body").hasClass('path-member')) {
            var base_url = $('#base_url').val();
            if ($("form.user-login-form").length) {
                $("input[name='hiddenText']").val(base_url);
            }
        }
        if ($('body').hasClass('path-user') || $("body").hasClass('path-member')) {
            var base_url = $('#base_url').val();
            var encryptUrl = base_url + 'encrypt/jencrypt';
            $("form#user-login-form").jCryption({
                getKeysURL: encryptUrl + "?getPublicKey=true",
                handshakeURL: encryptUrl + "?handshake=true"
            });
            $("form#user-register-form").jCryption({
                getKeysURL: encryptUrl + "?getPublicKey=true",
                handshakeURL: encryptUrl + "?handshake=true"
            });
    
            $("form#user-pass").jCryption({
                getKeysURL: encryptUrl + "?getPublicKey=true",
                handshakeURL: encryptUrl + "?handshake=true"
            });
            
            
        }
    
    //Close on submit
             // $(".field--type-entity-reference").one('click',function(){
             // 	console.log("hello! i am here");
             //   $(".spb-controls").append('<span class="block-subscriberdetailspop-modal-close spb_close">Ã—</span>');
             //   });
    
        if($('body').hasClass('page-node-type-feedback')){
            var base_url = $('#base_url').val();
            var encryptUrl = base_url + 'encrypt/jencrypt';
            $("form.node-feedback-form").jCryption({
                getKeysURL: encryptUrl + "?getPublicKey=true",
                handshakeURL: encryptUrl + "?handshake=true"
            });
        }
        if($('body').hasClass('path-contact')){
            var base_url = $('#base_url').val();
            var encryptUrl = base_url + 'encrypt/jencrypt';
            $("form.contact-message-feedback-form").jCryption({
                getKeysURL: encryptUrl + "?getPublicKey=true",
                handshakeURL: encryptUrl + "?handshake=true"
            });
        }
        if($('body').hasClass('page-node-type-incubation-services')){
            var base_url = $('#base_url').val();
            var encryptUrl = base_url + 'encrypt/jencrypt';
            $("form.node-incubation-services-booking-form").jCryption({
                getKeysURL: encryptUrl + "?getPublicKey=true",
                handshakeURL: encryptUrl + "?handshake=true"
            });
        }
        if($("form#simplenews-subscriptions-block-f61c8429-5940-4215-81f7-91264c8c34cf").length){
            var base_url = $('#base_url').val();
            var encryptUrl = base_url + 'encrypt/jencrypt';
            $("form#simplenews-subscriptions-block-f61c8429-5940-4215-81f7-91264c8c34cf").jCryption({
                getKeysURL: encryptUrl + "?getPublicKey=true",
                handshakeURL: encryptUrl + "?handshake=true"
            });		
        }
        
        
        $('body').removeClass('noJS').addClass("hasJS");
        $(this).scrollTop(0);
        getWidth();
        
        //Set Element to vertical center using padding
         $.fn.verticalAlign = function () {return this.css("padding-top", ($(this).parent().height() - $(this).height()) / 2 + 'px');};
         
        setTimeout(function(){
            $('#loading').fadeOut();
            $('.vCenter').each(function () {$(this).verticalAlign();});
        }, 800);                                                   
        
        
        if($('form#node-feedback-form').length){
            
            $("#node-feedback-form").validate({      
                rules: {
                    'title': {
                        required: true
                    },
                    'title[0][value]': {
                        required: true,
                        lettersonly: true
                    },
                    'field_feedback_email[0][value]': {
                        required: true,
                        email: true
                    },
                    'field_feedback_subject[0][value]': {
                        required: true
                    },
                    'field_feedback_message[0][value]': {
                        required: true
                    },
                    'field_feedback_contact[0][value]': {
                        required: true,
                        number: true,
                        rangelength: [10, 10]
                    },
                    'field_reason':{				
                        required: {
                            depends: function(element){
                                if('_none' == $('#edit-field-reason').val()){
                                    //Set predefined value to blank.
                                    $('#edit-field-reason').val('');
                                }
                                return true;
                            }
                        }	
                        //required: true	
                    },
                    'captcha_response': {
                        required: true
                    }
                },
                messages: {
                    'title': {
                        required: 'Please enter name'
                    },
                    'title[0][value]': {
                        required: 'Please enter name',
                        lettersonly: 'Please enter valid name'
                    },
                    'field_feedback_email[0][value]': {
                        required: 'Please enter email',
                        email: 'Please enter valid email'
                    },
                    'field_feedback_subject[0][value]': {
                        required: 'Please enter subject'
                    },
                    'field_feedback_message[0][value]': {
                        required: 'Please enter message'
                    },
                    'field_feedback_contact[0][value]': {
                        required: 'Please enter contact number',
                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum and minimum 10 digits'
                    },
                    'field_reason': {
                        required: 'Please select purpose'
                    },
                    'captcha_response': {
                        required: 'Please enter text showing in the Image',
                    }
                },
                submitHandler: function(form) {
                    form.submit()
                }
            });	
            
            
            $('label[for="edit-field-purpose-other-0-value"]').hide();
            $('#edit-field-purpose-other-0-value').hide(); 
            $('#edit-field-reason').change(function(){
                if($('#edit-field-reason').val() == '346') {
                    $('label[for="edit-field-purpose-other-0-value"]').show();
                    $('#edit-field-purpose-other-0-value').show(); 
                } else {
                    $('label[for="edit-field-purpose-other-0-value"]').hide();
                    $('#edit-field-purpose-other-0-value').hide(); 
                } 
            });
            
        }
        if($('form#node-feedback-edit-form').length){
            
            $("#node-feedback-edit-form").validate({
                rules: {
                    'title': {
                        required: true
                    },
                    'title[0][value]': {
                        required: true,
                        lettersonly: true
                    },
                    'field_feedback_email[0][value]': {
                        required: true,
                        email: true
                    },
                    'field_feedback_subject[0][value]': {
                        required: true
                    },
                    'field_feedback_message[0][value]': {
                        required: true
                    },
                    'field_feedback_contact[0][value]': {
                        required: true,
                        number: true,
                        rangelength: [10, 10]
                    },
                    'field_reason':{				
                        required: {
                            depends: function(element){
                                if('_none' == $('#edit-field-reason').val()){
                                    //Set predefined value to blank.
                                    $('#edit-field-reason').val('');
                                }
                                return true;
                            }
                        }	
                        //required: true	
                    },
                    'captcha_response': {
                        required: true
                    }
                },
                messages: {
                    'title': {
                        required: 'Please enter name'
    
                    },
                    'title[0][value]': {
                        required: 'Please enter name',
                        lettersonly: 'Please enter valid name'
                    },
                    'field_feedback_email[0][value]': {
                        required: 'Please enter email',
                        email: 'Please enter valid email'
                    },
                    'field_feedback_subject[0][value]': {
                        required: 'Please enter subject'
                    },
                    'field_feedback_message[0][value]': {
                        required: 'Please enter message'
                    },
                    'field_feedback_contact[0][value]': {
                        required: 'Please enter contact number',
                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum and minimum 10 digits'
                    },
                    'field_reason': {
                        required: 'Please select reason'
                    },
                    'captcha_response': {
                        required: 'Please enter text showing in the Image',
                    }
                },
                submitHandler: function(form) {
                    form.submit()
                }
            });
            
        }	
        
        if($('form#node-incubation-services-booking-form').length){	
        
            $("#node-incubation-services-booking-form").validate({
                rules: {
                    'title': {
                        required: true
                    },
                    'title[0][value]': {
                        required: true
                    },
                    'field_incubation_booking_email[0][value]': {
                        required: true,
                        email: true
                    },
                    'field_incubation_booking_details[0][value]': {
                        required: true
                    },
                    'field_incubation_booking_subject[0][value]': {
                        required: true
                    },
                    'field_incubation_booking_message[0][value]': {
                        required: true
                    },
                    'field_incubation_booking_contact[0][value]': {
                        required: true,
                        number: true,
                        rangelength: [10, 10]
                    },
                    'captcha_response': {
                        required: true
                    }
                },
                messages: {
                    'title': {
                        required: 'Please enter name'
                    },
                    'title[0][value]': {
                        required: 'Please enter name'
                    },
                    'field_incubation_booking_email[0][value]': {
                        required: 'Please enter email',
                        email: 'Please enter valid email'
                    },
                    'field_incubation_booking_subject[0][value]': {
                        required: 'Please enter subject'
                    },
                    'field_incubation_booking_details[0][value]': {
                        required: 'Please enter incubation details'
                    },
                    'field_incubation_booking_message[0][value]': {
                        required: 'Please enter message'
                    },
                    'field_incubation_booking_contact[0][value]': {
                        required: 'Please enter contact number',
                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximim and minimum 10 digits'
                    },
                    'captcha_response': {
                        required: 'Please enter text showing in the Image',
                    }
                },
                submitHandler: function(form) {
                    form.submit()
                }
            });
        
        }
    
        if($('form#node-incubation-services-booking-edit-form').length){
            
            $("#node-incubation-services-booking-edit-form").validate({
                rules: {
                    'title': {
                        required: true
                    },
                    'title[0][value]': {
                        required: true
                    },
                    'field_incubation_booking_email[0][value]': {
                        required: true,
                        email: true
                    },
                    'field_incubation_booking_details[0][value]': {
                        required: true
                    },
                    'field_incubation_booking_subject[0][value]': {
                        required: true
                    },
                    'field_incubation_booking_message[0][value]': {
                        required: true
                    },
                    'field_incubation_booking_contact[0][value]': {
                        required: true,
                        number: true,
                        rangelength: [10, 10]
                    },
                    'captcha_response': {
                        required: true
                    }
                },
                messages: {
                    'title': {
                        required: 'Please enter name'
                    },
                    'title[0][value]': {
                        required: 'Please enter name'
                    },
                    'field_incubation_booking_email[0][value]': {
                        required: 'Please enter email',
                        email: 'Please enter valid email'
                    },
                    'field_incubation_booking_subject[0][value]': {
                        required: 'Please enter subject'
                    },
                    'field_incubation_booking_details[0][value]': {
                        required: 'Please enter incubation details'
                    },
                    'field_incubation_booking_message[0][value]': {
                        required: 'Please enter message'
                    },
                    'field_incubation_booking_contact[0][value]': {
                        required: 'Please enter contact number',
                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximim and minimum 10 digits'
                    },
                    'captcha_response': {
                        required: 'Please Enter text showing in the Image',
                    }
                },
                submitHandler: function(form) {
                    form.submit()
                }
            });
            
        }	
             
        if($('form#node-career-profile-form').length){
            
            $("#node-career-profile-form").validate({
                rules: {
                    'title': {
                        required: true
                    },
                    'title[0][value]': {
                        required: true,
                        lettersonly: true
                    },
                    'field_career_last_name[0][value]': {
                        required: true,
                        lettersonly: true
                    },
                    'field_career_email[0][value]': {
                        required: true,
                        email: true
                    },
                    'field_career_zip_code[0][value]': {
                        required: true,
                        number: true,
                        rangelength: [6, 6]
                    },
                    'field_career_city':{
                        required: {
                            depends: function(element){
                                if('_none' == $('#edit-field-career-city').val()){
                                    //Set predefined value to blank.
                                    $('#edit-field-career-city').val('');
                                }
                                return true;
                            }
                        }
                    },
                    'field_career_state_province':{
                        required: {
                            depends: function(element){
                                if('_none' == $('#edit-field-career-state-province').val()){
                                    //Set predefined value to blank.
                                    $('#edit-field-career-state-province').val('');
                                }
                                return true;
                            }
                        }
                    },
                    'field_applying_for_position':{
                        required: {
                            depends: function(element){
                                if('_none' == $('#edit-field-applying-for-position').val()){
                                    //Set predefined value to blank.
                                    $('#edit-field-applying-for-position').val('');
                                }
                                return true;
                            }
                        }
                    },
                    'field_career_address[0][value]': {
                        required: true
                    },
                    'field_career_phone_number[0][value]': {
                        required: true,
                        number: true,
                        rangelength: [10, 10]
                    },
                    'captcha_response': {
                        required: true
                    }
                },
                messages: {
                    'title': {
                        required: 'Please enter name'
                    },
                    'title[0][value]': {
                        required: 'Please enter first name',
                        lettersonly: 'Please enter valid first name'
                    },
                    'field_career_last_name[0][value]': {
                        required: 'Please enter last name',
                        lettersonly: 'Please enter valid last name'
                    },
                    'field_career_email[0][value]': {
                        required: 'Please enter email',
                        email: 'Please enter valid email'
                    },
                    'field_career_phone_number[0][value]': {
                        required: 'Please enter phone number',
                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum and minimum 10 digits'
                    },
                    'field_career_zip_code[0][value]': {
                        required: 'Please enter zip code',
                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum and minimum 6 digits'
                    },
                    'field_career_city': {
                        required: 'Please select city'
                    },
                    'field_career_state_province': {
                        required: 'Please select state/province'
                    },
                    'field_applying_for_position': {
                        required: 'Please select position'
                    },
                    'field_career_address[0][value]': {
                        required: 'Please enter address',
                    },
                    'captcha_response': {
                        required: 'Please enter text showing in the Image',
                    }
                },
                submitHandler: function(form) {
                    form.submit()
                }
            });
            
        }	
        
        if($('form#node-career-profile-edit-form').length){	
        
            $("#node-career-profile-edit-form").validate({
                rules: {
                    'title': {
                        required: true
                    },
                    'title[0][value]': {
                        required: true,
                        lettersonly: true
                    },
                    'field_career_last_name[0][value]': {
                        required: true,
                        lettersonly: true
                    },
                    'field_career_email[0][value]': {
                        required: true,
                        email: true
                    },
                    'field_career_zip_code[0][value]': {
                        required: true,
                        number: true,
                        rangelength: [6, 6]
                    },
                    'field_career_city':{
                        required: {
                            depends: function(element){
                                if('_none' == $('#edit-field-career-city').val()){
                                    //Set predefined value to blank.
                                    $('#edit-field-career-city').val('');
                                }
                                return true;
                            }
                        }
                    },
                    'field_career_state_province':{
                        required: {
                            depends: function(element){
                                if('_none' == $('#edit-field-career-state-province').val()){
                                    //Set predefined value to blank.
                                    $('#edit-field-career-state-province').val('');
                                }
                                return true;
                            }
                        }
                    },
                    'field_applying_for_position':{
                        required: {
                            depends: function(element){
                                if('_none' == $('#edit-field-applying-for-position').val()){
                                    //Set predefined value to blank.
                                    $('#edit-field-applying-for-position').val('');
                                }
                                return true;
                            }
                        }
                    },
                    'field_career_address[0][value]': {
                        required: true,
                    },	
                    'field_career_phone_number[0][value]': {
                        required: true,
                        number: true,
                        rangelength: [10, 10]
                    },
                    'captcha_response': {
                        required: true
                    }
                },
                messages: {
                    'title': {
                        required: 'Please enter name'
                    },
                    'title[0][value]': {
                        required: 'Please enter first name',
                        lettersonly: 'Please enter valid first name'
                    },
                    'field_career_last_name[0][value]': {
                        required: 'Please enter last name',
                        lettersonly: 'Please enter valid last name'
                    },
                    'field_career_email[0][value]': {
                        required: 'Please enter email',
                        email: 'Please enter valid email'
                    },
                    'field_career_phone_number[0][value]': {
                        required: 'Please enter phone number',
                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum and minimum 10 digits'
                    },
                    'field_career_zip_code[0][value]': {
                        required: 'Please enter zip code',
                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum and minimum 6 digits'
                    },
                    'field_career_city': {
                        required: 'Please select city'
                    },
                    'field_career_state_province': {
                        required: 'Please select state/province'
                    },
                    'field_applying_for_position': {
                        required: 'Please select position'
                    },
                    'field_career_address[0][value]': {
                        required: 'Please enter address',
                    },
                    'captcha_response': {
                        required: 'Please enter text showing in the Image',
                    }
                },
                submitHandler: function(form) {
                    form.submit()
                }
            });
        
        }
        
        // Index Banner Slider	
        if( $(".sliderBanner").length) {
            var owl = $(".sliderBanner");
            var autoplay;
            if (owl.children().length == 1) {autoplay = false}
            else {autoplay = true}
            owl.owlCarousel({
                loop:autoplay
                ,autoplay:autoplay
                ,mouseDrag:autoplay
                ,autoplayTimeout:3000
                ,autoplaySpeed:3000
                ,smartSpeed:3000
                ,nav:autoplay	
                ,dots:false
                //,animateIn: 'fadeIn'	
                ,items : 1
                ,autoplayHoverPause: true
                //dots : false		
                ,onInitialized: function(event) {
                    if (owl.children().length > 1) { 
                         //owl.trigger('stop.owl.autoplay');
                         //this.settings.autoplay = true;
                         //this.settings.loop = true;
                    }
                }
            });
    
            
            if($(".indexBanner .item").length) {			
             
             setTimeout(function(){ 
    
                    $('.indexBanner .item > img').each(function(){
                    var banimgSrc = $(this).attr('src');		
                    $(this).parent().css('background-image', 'url(' + banimgSrc +')');
                    
                  });
    
                 }, 2000);	
          
            }
            
        };
            
        if($(".bgBackgound  img").length) {
            $('.bgBackgound  img').each(function(){
                var banimgSrc = $(this).attr('src');		
                $(this).parent().css('background-image', 'url(' + banimgSrc +')');
                
            });
            }
            
                if($(".stpiOpenChallImgHolder img").length) {
            $('.stpiOpenChallImgHolder  img').each(function(){
                var banimgSrc = $(this).attr('src');		
                $(this).parents(".stpiOpenChallImgHolder").css('background-image', 'url(' + banimgSrc +')');
                
            });
            }
    
    
            if($(".innerBannerSection  img").length) {
            $('.innerBannerSection  img').each(function(){
                var banimgSrc = $(this).attr('src');		
                $(this).parent().css('background-image', 'url(' + banimgSrc +')');
                
            });
            }
        
    
            
            //scheme slider
        if( $(".scheme").length) {
            $('.schemeSlider ').owlCarousel({
                 loop:true
                ,autoplay:true
                
                ,autoWidth: false
                ,autoplayTimeout:3000
                ,smartSpeed:1200
                ,margin:30
                ,nav:true
                ,dots:false
                ,navText : ["",""]
                ,responsive:{
                    0:{
                        items:1
                    },
                    768:{
                        items:2
                    },
                    1024:{
                        items:3
                    },
                    1200:{
                        items:4
                    }
                }
            })
        };	
    
    
    
            //scheme slider
        if( $(".incubationSlider").length) {
            $('.incubationSlider ').owlCarousel({
                 loop:true
                ,autoplay:true
                
                ,autoWidth: false
                ,autoplayTimeout:3000
                ,smartSpeed:1200
            
                ,nav:true
                ,dots:false
                ,navText : ["",""]
                ,responsive:{
                    0:{
                        items:1
                    },
                    768:{
                        items:1
                    },
                    1024:{
                        items:1
                    },
                    1200:{
                        items:1
                    }
                }
            })
        };	
    
    
    //services slider
        if( $(".servicesWarpper").length) {
            $('.servicesWarpper ').owlCarousel({
                 loop:true
                ,autoplay:true
                ,autoWidth: false
                ,autoplayTimeout:3000
                ,smartSpeed:1200
                ,margin:0
                ,nav:true
                ,dots:false
                ,navText : ["",""]
                ,responsive:{
                    0:{
                        items:1
                    },
                    768:{
                        items:2
                    },
                    1024:{
                        items:3
                    },
                    1200:{
                        items:5
                    }
                }
            })
        };
    
    
    
        //new window open for external link
              $('a').not(".litebox, .singleVideoPopup, .colorbox, .video-popup,.socialIcone a,.directorateInfo a, .noExteMessage").filter(function() {
                return this.hostname && this.hostname !== location.hostname;
            }).click(function(e) {
                e.preventDefault();
                var url = $(this).attr("href");
                smoke.confirm("You are about to proceed to an external website. Click Yes to proceed.", function(e) {
                    if (e) {
                        window.open(url, "_blank");
                    } else {
                        return false;
                    }
                }, {
                    ok: "Yes",
                    cancel: "No",
                    classname: "custom-class",
                    reverseButtons: true
                });
            }); 		
    
        // Inner Banner Slider	
        if( $(".slider").length) {
            var owl2 = $(".slider");
            var autoplay;
            if (owl2.children().length == 1) {autoplay = false	}
            else {autoplay = true}
            
            owl2.owlCarousel({
                loop:autoplay
                ,autoplay:autoplay
                ,mouseDrag:autoplay
                ,autoplayTimeout:3000
                ,autoplaySpeed:800
                ,smartSpeed:1200
                ,nav:autoplay
                ,dots:autoplay
                ,items : 1
                ,autoplayHoverPause: true
                //dots : false		
                ,onInitialized: function(event) {
                    if (owl2.children().length > 1) { 
                    }
                }
            });
        };
        
        
        //clientLogo
        if( $(".clientLogo").length) {
            $('.clientLogo .owl-carousel').owlCarousel({
                 loop:true
                ,autoplay:true
                ,autoWidth: false
                ,autoplayTimeout:3000
                ,smartSpeed:1200
                ,margin:30
                ,nav:true
                ,dots:false
                ,navText : ["",""]
                ,responsive:{
                    0:{
                        items:1
                    },
                    640:{
                        items:2
                    },
                    901:{
                        items:3
                    },
                    1200:{
                        items:4
                    }
                }
            })
        };
        
        
        
        // accordian js start here
        if( $(".accordion").length){
           $('.accordion .accordDetail').hide();
           $(".accordion .accordDetail:first").show(); 
           $(".accordion .accTrigger:first").addClass("active");	
           $('.accordion .accTrigger').click(function(){
              if ($(this).hasClass('active')) {
                   $(this).removeClass('active');
                   $(this).next().slideUp();
              } else {
                  if ($('body').hasClass('desktop')) {
                   $('.accordion .accTrigger').removeClass('active');
                   $('.accordion .accordDetail').slideUp();
                  }
                   $(this).addClass('active');			   
                   $(this).next().slideDown();
              }
              return false;
           });
        };
        
        
        
            //recentblogSlider
        if( $(".recentblogSlider").length) {
            $('.recentblogSlider ').owlCarousel({
                 loop:true
                ,autoplay:true
                ,autoWidth: false
                ,autoplayTimeout:3000
                ,smartSpeed:1200
                ,margin:30
                ,nav:true
                ,dots:false
                ,navText : ["",""]
                ,responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            })
        };	
        
        // Back to Top function
        if( $("#backtotop").length){
            $(window).scroll(function(){
                if ($(window).scrollTop()>120){
                $('#backtotop').fadeIn('250').css('display','block');}
                else {
                $('#backtotop').fadeOut('250');}
            });
            $('#backtotop').click(function(){
                $('html, body').animate({scrollTop:0}, '200');
                return false;
            });
        };
        
        // Responsive Tabing Script
        if( $(".functionTab .resTab").length) {
            $('.functionTab .resTab').responsiveTabs({
                 rotate: false
                ,startCollapsed: 'tab' //accordion
                ,collapsible: 'accordion' //accordion
                ,scrollToAccordion: true
                ,scrollToAccordionOnLoad:false
            });
        };
        
        // Responsive Tabing Script
        if( $(".stpiCentersSlider .resTab").length) {
            $('.stpiCentersSlider .resTab').responsiveTabs({
                 rotate: false
                ,startCollapsed: 'tab' //accordion
                ,collapsible: 'accordion' //accordion
                ,scrollToAccordion: true
                ,scrollToAccordionOnLoad:false
            });
        };	
        
        // home page stpi center js start here
        if( $(".stpiCentersSlider .carouselBlock").length) {
            $('.stpiCentersSlider .carouselBlock').owlCarousel({
                 loop:false
                ,autoplay:false
                ,autoWidth: false
                ,autoplayTimeout:3000
                ,smartSpeed:1200
                ,margin:10
                ,nav:true
                ,dots:false
                ,navText : ["",""]
                ,responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    767:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            })
        };
    
    
    
    
    
    
            // campaign team slider
        if( $(".whatsNewSlider .carouselBlock").length) {
            var owl2 = $(".whatsNewSlider .carouselBlock");
            var autoplay;
            if (owl2.children().length == 1) {autoplay = false	}
            else {autoplay = true}
            
            owl2.owlCarousel({
                loop:autoplay
                ,autoplay:autoplay
                ,mouseDrag:autoplay
                ,autoplayTimeout:3000
                ,autoplaySpeed:800
                ,smartSpeed:1200
                ,margin:10
                ,nav:true
                ,dots:false
                ,items : 1
                
                ,autoplayHoverPause: true
                //dots : false		
                ,onInitialized: function(event) {
                    if (owl2.children().length > 1) { 
                    }
                }
            });
                
    
        };
        
    
    
        
        // campaign team slider
        if( $(".campaingsSlider").length) {
            var owl2 = $(".campaingsSlider");
            var autoplay;
            if (owl2.children().length == 1) {autoplay = false	}
            else {autoplay = true}
            
            owl2.owlCarousel({
                loop:autoplay
                ,autoplay:autoplay
                ,mouseDrag:true
                ,autoplayTimeout:3000
                ,autoplaySpeed:800
                ,smartSpeed:1200
                ,nav:autoplay
                ,dots:false
                ,navText : ["",""]
                ,items : 1
                ,autoplayHoverPause: true
                //dots : false		
                ,onInitialized: function(event) {
                    if (owl2.children().length > 1) { 
                    }
                }
            });
        };
        
        
        
        // homepage team slider	
        if( $(".teamSlider").length) {
            var teamSlider = $(".teamSlider");
            var autoplay;
            if (teamSlider.children().length == 1) {autoplay = false	}
            else {autoplay = true}
            
            teamSlider.owlCarousel({
                loop:autoplay
                ,autoplay:autoplay
                ,mouseDrag:autoplay
                ,autoplayTimeout:3000
                ,autoplaySpeed:800
                ,smartSpeed:1200
                ,nav:true
                ,dots:false
                ,items : 1
                ,autoHeight:true
                ,autoplayHoverPause: true
                //dots : false		
                ,onInitialized: function(event) {
                    if (teamSlider.children().length > 1) { 
                    }
                }
                
            });
        };
    
        
        
            
    //team slider  slider start	
    if($(".TeamMembersSlider").length){
            
            $('.teamSlider ul li').wrapInner('<div class="teamSliderInfo"></div>');
            
        var teamMember = $(".teamSlider ul li .teamSliderInfo").clone();
        
        $('.TeamMembersSlider').append('<div class="teamMobSlider"><div class="owlCarousel"></div></div>');
        $(".teamMobSlider .owlCarousel").append(teamMember);
        $('.teamSliderInfo').wrap('<div class="item"></div>');
    
        
       //$(".ourService").append("<div class='servicesMobSlider owlCarousel '></div>");
       //var serviceBoxWrap = $(".serviceBoxWrap").clone();
       //$(".servicesMobSlider").append(serviceBoxWrap);
       //$(".servicesMobSlider .serviceBoxWrap").each(function(){
       //$(this).wrap('<div class="item"></div>');
       //})
       //(cloneSector2).appendTo(".servicesWarpper .servicesMobSlider .swiper-wrapper");
    }
    
    
        
        
        setTimeout(function(){ 
                            
                
        //recentblogSlider
        if( $(".teamMobSlider").length) {
            $('.teamMobSlider .owlCarousel').owlCarousel({
                 loop:true
                ,autoplay:true
                ,autoWidth: false
                ,autoplayTimeout:3000
                ,smartSpeed:1200
                ,margin:10
                ,nav:true
                ,dots:false
                ,navText : ["",""]
                ,responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            })
        };				
                            
                            
       }, 3000);
        
    //team slider  slider end
    
        
        /*if( $(".ourJourney .carouselBlock").length) {
            $('.ourJourney .carouselBlock').owlCarousel({
                 loop:true
                ,autoplay:false
                ,autoplayTimeout:3000
                ,smartSpeed:1200
                ,margin:10
                ,nav:true
                ,dots:false
                ,navText : ["",""]
                ,responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:5
                    },
                    1000:{
                        items:10
                    }
                }
            })
        };*/
        
        //our journey slider	
        if( $(".ourJourney .carouselBlock").length) {
            $('.ourJourney .carouselBlock').owlCarousel({
                 loop:false
                ,autoplay:false
                ,autoplayTimeout:3000
                ,smartSpeed:1200
                ,margin:10
                ,nav:true
                ,dots:false
                ,navText : ["",""]
                ,responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:4
                    },
                    1300:{
                        items:7
                    },
                    1300:{
                        items:10
                    }
                }
            })
        };
        
        //aos 
        AOS.init({
        once: true,
        
        disable: function() {
        var maxWidth = 1024;
        return window.innerWidth < maxWidth;
          }
         
        })
    
        
        
        //board of directors and government countcil homepage slider
        if( $(".boardOfDirectors .carouselBlock").length) {
            $('.boardOfDirectors .carouselBlock').owlCarousel({
                 loop:false
                 ,navRewind:true
                ,autoplay:false
                ,autoplayTimeout:3000
                ,smartSpeed:1200
                ,margin:20
                ,dots:false
                ,nav:true
                ,responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:1
                    },
                    640:{
                        items:1
                    },
                    767:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            })
        };
        
        
        // count
    
    /**/	if( $(".count").length > 0){
            $('.count').counterUp({
                delay: 1,
                time: 10
            });
        }
    
        
        
        
        if( $(".marqueeScrolling li").length > 1){
            var $mq = $('.marquee').marquee({
                 speed: 25000
                ,gap: 0
                ,duplicated: true
                ,pauseOnHover: true
                });
            $(".btnMPause").toggle(function(){
                $(this).addClass('play');
                $(this).text('Play');
                $mq.marquee('pause');
            },function(){
                $(this).removeClass('play');
                $(this).text('Pause');
                $mq.marquee('resume');
                return false;
            });
        };
        
        // Multiple Ticker	
        if( $(".ticker").length){
            $('.ticker').each(function(i){
                $(this).addClass('tickerDiv'+i).attr('id', 'ticker'+i);
                $('#ticker'+i).find('.tickerDivBlock').first().addClass('newsTikker'+i).attr('id', 'newsTikker'+i);
                $('#ticker'+i).find('a.playPause').attr('id', 'stopNews'+i)
                $('#newsTikker'+i).vTicker({ speed: 1E3, pause: 4E3, animation: "fade", mousePause: false, showItems: 3, height: 150, direction: 'up' })
                $("#stopNews"+i).click(function () {
                    if($(this).hasClass('stop')){
                        $(this).removeClass("stop").addClass("play").text("Play").attr('title', 'Play');
                    }else{
                        $(this).removeClass("play").addClass("stop").text("Pause").attr('title', 'pause');
                    }
                    return false;
                });
            });
        };
        
        
        
        
        
        // Responsive Tabing Script
        if( $(".socialEngagement .resTab").length) {
            $('.socialEngagement .resTab').responsiveTabs({
                 rotate: false
                ,startCollapsed: 'tab' //accordion
                ,collapsible: 'accordion' //accordion
                ,scrollToAccordion: true
                ,scrollToAccordionOnLoad:false
            });
        };
        
        
    
        
        // Responsive Tabing Script
        if( $(".eventsBox .resTab").length) {
            $('.eventsBox .resTab').responsiveTabs({
                 rotate: false
                ,startCollapsed: 'tab' //accordion
                ,collapsible: 'accordion' //accordion
                ,scrollToAccordion: true
                ,scrollToAccordionOnLoad:false
            });
        };
        
        
        // Responsive Tabing Script
        if( $(".ourJourney .resTab").length) {
        $('.ourJourney .resTab').responsiveTabs({
             rotate: false
            ,startCollapsed: 'tab' //accordion
        ,collapsible: 'accordion' //accordion
        ,scrollToAccordion: true
       ,scrollToAccordionOnLoad:false
        });	
    };
                    
        if( $(".accordion").length){
           $('.accordion .accordDetail').hide();
           $(".accordion .accordDetail:first").show(); 
           $(".accordion .accTrigger:first").addClass("active");	
           $('.accordion .accTrigger').click(function(){
              if ($(this).hasClass('active')) {
                   $(this).removeClass('active');
                   $(this).next().slideUp();
              } else {
                  if ($('body').hasClass('desktop')) {
                   $('.accordion .accTrigger').removeClass('active');
                   $('.accordion .accordDetail').slideUp();
                  }
                   $(this).addClass('active');			   
                   $(this).next().slideDown();
              }
              return false;
           });
        };
        
        if( $(".tableData").length > 0){
            $('.tableData').each(function(){
                $(this).wrap('<div class="tableOut"></div>');
                $(this).find('tr').each(function(){
                $(this).find('td:first').addClass('firstTd');
                $(this).find('th:first').addClass('firstTh');
                $(this).find('th:last').addClass('lastTh');
                });
                $(this).find('tr:last').addClass('lastTr');
                $(this).find('tr:even').addClass('evenRow');
                $(this).find('tr:nth-child(2)').find('th:first').removeClass('firstTh');
            });	
        };
        
        if( $("table").length > 0){
            $('table').addClass('responsiveTable');	
            $( "table" ).wrap( "<div class='tableOut'></div>" );
        }
        
        // Responsive Table
        if( $(".responsiveTable").length){
            $(".responsiveTable").each(function(){		
            $(this).find('td').removeAttr('width');
            //$(this).find('td').removeAttr('align');
            var head_col_count =  $(this).find('tr th').size();
            // loop which replaces td
            for ( i=0; i <= head_col_count; i++ )  {
                // head column label extraction
                var head_col_label = $(this).find('tr th:nth-child('+ i +')').text();
                // replaces td with <div class="column" data-label="label">
                $(this).find('tr td:nth-child('+ i +')').attr("data-label", head_col_label);
            }
            });
        };
        
        //skip to main content
        $('.skipContent').on('click',function (e) {
                e.preventDefault();
        
                var target = this.hash;
                var $target = $(target);
        
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top - 80
                }, 1000, 'swing', function () {
                    //window.location.hash = target;
                });
            });
            
        //about page  to main content
            $('.region-footer-about-stpi a').on('click',function (e) {
    
    
    
                var target = this.hash;
                var $target = $(target);
        
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top - 80
                }, 1000, 'swing', function () {
                    //window.location.hash = target;
                        
                });
                
            });
            
             //about page  to main content
            
            
            $('.aboutSkipContent').on('click',function (e) {
                var target = this.hash;
                var $target = $(target);
                  $('html, body').stop().animate({
                    'scrollTop': $target.offset().top - 80
                }, 1000, 'swing', function () {
                });
            });
            
    
        // Search Box
        if($(".search").length) {
            $('.search > a').click(function(e){
                e.preventDefault();
                if(!$(this).hasClass('active')){
                    $(this).addClass('active');
                    $(this).next().slideDown(300);
                } else {
                    $(this).removeClass('active');
                    $(this).next().slideUp(300);
                }
                return false;
            });
        }
        $('.search').click(function(e){
            e.stopPropagation();
        });
        
        $(document).click(function(){
            $('.search .region-search-section').slideUp();
            $('.search > a').removeClass('active');
        });
        
    
    
        
        // Responsive Table
        if( $(".tableScroll").length){
            $(".tableScroll").each(function(){
                $(this).wrap('<div class="tableOut"></div>');
            });
        };
        
        // Back to Top function
        if( $("#backtotop").length){
            $(window).scroll(function(){
                if ($(window).scrollTop()>120){
                $('#backtotop').fadeIn('250').css('display','block');}
                else {
                $('#backtotop').fadeOut('250');}
            });
            $('#backtotop').click(function(){
                $('html, body').animate({scrollTop:0}, '200');
                return false;
            });
        };
        
        // Get Focus Inputbox
        if( $(".getFocus").length){
                $(".getFocus").each(function(){
                $(this).on("focus", function(){
                if ($(this).val() == $(this)[0].defaultValue) { $(this).val("");};
              }).on("blur", function(){
                  if ($(this).val() == "") {$(this).val($(this)[0].defaultValue);};
              });								  
            });
        };
        
        // For device checking
        if (isMobile == false) {
        
        };
        
        
        
        
        
        // Video JS
        if( $(".videoplayer").length){	
            $(".videoplayer").each(function(){
                var $this = $(this);
                var poster = $this.children("a").find("img").attr("src");
                var title = $this.children("a").find("img").attr("alt");	
                var videotype = $this.children("a").attr("rel");
                var video = $this.children("a").attr("href");
                $this.children("a").remove();
                
                projekktor($this, {
                 poster: poster
                ,title: title
                ,playerFlashMP4: '../videoplayer/jarisplayer.swf'
                ,playerFlashMP3: '../videoplayer/jarisplayer.swf'
                ,width: "100%"
                ,height: 300
                ,controls:false
                ,autoplay:true
                ,scaleVideo:true
                ,loop:true
                ,setResize:true
                ,fullscreen:true
                ,addplugins: ['related']
                ,playlist: [
                    {0: {src: video, type: videotype}}
                ],
                plugin_display: {
                    logoImage: '',
                    logoDelay: 1
                }
                }, function(player) {} // on ready 
                );
            })
        };
        
        // Google Map gmap3 
        if( $("#gmap").length){	
        
            var lang = 23.021666;
            var lati = 72.55464;
            var contentString = '<div id="content">'+
            '<strong>' + 'Silver Touch Technologies Limited' + '</strong>'+
            '<div id="bodyContent">'+ '2nd Floor, Saffron Towers,' + '<br/>' +
            'Near Panchwati Circle,' + '<br/>' +
            'Ahmedabad, Gujarat 380006'
            '</div></div>';
            
            var map = new google.maps.Map(document.getElementById('gmap'), {
            zoom: 15
            ,center: new google.maps.LatLng(lang , lati)
            ,mapTypeId: google.maps.MapTypeId.ROADMAP
            });	
            
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            google.maps.event.addListener(map, 'click', function() {
              infowindow.close();
            });
            var marker = new google.maps.Marker({
              map: map,
              position: new google.maps.LatLng(lang , lati)
            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });
            infowindow.open(map,marker);
        };
        
        if( $(".litebox").length){	
            $('.litebox').liteBox();
        };	
        
        $('.equalHeights > div').equalHeight();
        
        setTimeout (function(){
            if( $(".fixedErrorMsg").length){					 
                $(".fixedErrorMsg").slideDown("slow");				 
                setTimeout( function(){$('.fixedErrorMsg').slideUp();},5000 );
            }
            if( $(".fixedSuccessMsg").length){					 
                $(".fixedSuccessMsg").slideDown("slow");				 
                setTimeout( function(){$('.fixedSuccessMsg').slideUp();},5000 );
            }
        },500);
        
        /*================= On Document Load and Resize Start =================*/
        $(window).on('resize', function () {
                                         
            ww = document.body.clientWidth; 
            wh = document.body.clientHeight;		
            
            $('.vCenter').each(function () {$(this).verticalAlign();});	
            
            if($("body").hasClass("mobilePort")){
                $("body").removeClass("wob");
            }
            
            //$('.container').resize(function(){});
            
        }).trigger('resize');
        /*================= On Document Load and Resize End =================*/
        
        /*Navigation */
        if( $("#nav").length) {
            if($(".toggleMenu").length == 0){
                $("#mainNav").prepend('<a href="#" class="toggleMenu"><span class="mobileMenu">Menu</span><span class="iconBar"></span></a>');	
            }
            $(".toggleMenu").click(function() {
                $(this).toggleClass("active");
                $("#nav").slideToggle();
                //return false;
            });
        
           $(".dropdown ").click(function() {
                $(this).children().children("#nav").slideToggle();
                //return false;
            });
           
           
            $("#nav li a").each(function() {
                if ($(this).next().length) {
                    $(this).parent().addClass("parent");
                };
            })
            $("#nav li.parent").each(function () {
                if ($(this).has(".menuIcon").length <= 0) $(this).append('<i class="menuIcon">&nbsp;</i>')
            });
            dropdown('nav', 'hover', 1);
            adjustMenu();	
        };
        
        
        
        
    //our services responsive slider start	
    if($(".ourService").length){
       $(".ourService").append("<div class='servicesMobSlider owlCarousel '></div>");
       var serviceBoxWrap = $(".serviceBoxWrap").clone();
       $(".servicesMobSlider").append(serviceBoxWrap);
       $(".servicesMobSlider .serviceBoxWrap").each(function(){
       $(this).wrap('<div class="item"></div>');
    })
       //(cloneSector2).appendTo(".servicesWarpper .servicesMobSlider .swiper-wrapper");
    }
    
    //our services responsive slider end	
    
        if( $(".ourService").length) {
            
            $('.servicesMobSlider ').owlCarousel({
                 loop:true
                ,autoplay:true
                ,autoplayTimeout:3000
                ,smartSpeed:10
                ,margin:0
                ,dots:false
                ,nav:true
                ,center:true
                ,responsive:{
                    0:{
                        items:1
                    },
                
                    500:{
                        items:2
                    },
                        
                    767:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }
            })
        };
        
        //our services responsive slider end
        
        //event details start	
        if( $(".eventDetail img").length > 1  ) {
            
            $('.eventDetail .eventDetailSlider ').owlCarousel({
                
                 
                         
                 loop:true
                 
                ,autoplay:true
                ,autoplayTimeout:3000
                ,smartSpeed:1200
                ,margin:0
                ,dots:false
                ,nav:true
                ,navText : ["",""]
    
                ,responsive:{
                    0:{
                        items:1
                    },
                
                    500:{
                        items:1
                    },
                        
                    767:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            })
            };
             $('.eventDetailSlider img').each(function(){
    
                var banimgSrc = $(this).attr('src');		
                $(this).parent().attr('href', banimgSrc);
            });
         
        //news details start	
        if( $(".newsDetail").length) {
            
            $('.newsDetail .newsDetailSlider ').owlCarousel({
                 loop:true
                ,autoplay:true
                ,autoplayTimeout:3000
                ,smartSpeed:1200
                ,margin:5
                ,dots:false
                ,nav:true
                ,navText : ["",""]
    
                ,responsive:{
                    0:{
                        items:1
                    },
                
                    500:{
                        items:2
                    },
                        
                    767:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }
            })
         };
        $('.newsDetailSlider .owl-item img').each(function(){
    
                var banimgSrc = $(this).attr('src');		
                $(this).parent().attr('href', banimgSrc);
        });
        
        
        
        
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>STPI</small>';
                }
            }
        });
        
        
        
            //news details end
    
        
        
        
            
            
    //center for excellence responsive slider start	
    if($(".centerOfExce").length){
      $(".centerOfExce").prepend("<div class='rotatingMobSlider owlCarousel '></div>");
      $(".rotatingMobSlider").insertAfter(".centerOfExce .container > h2")
       var tab  = $(".tab ").clone();
       $(".rotatingMobSlider").append(tab);
     $(".rotatingMobSlider .tab").each(function(){
     $(this).wrap('<div class="item"></div>'); 
      })
        //(cloneSector2).appendTo(".servicesWarpper .servicesMobSlider .swiper-wrapper");
    }
    
        if( $(".centerOfExce").length) {
            
            var $owl = $('.rotatingMobSlider');
    
    $owl.children().each( function( index ) {
      $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });
    
    $owl.owlCarousel({
      center: true,
      loop: false,
      items: 5,
      mouseDrag:false
     ,touchDrag:false
     ,dots:true
        ,nav:true
     ,responsive:{
                    0:{
                        items:1
                        ,center:true
                        ,mouseDrag:false
                ,touchDrag:false
                    },
                
                    500:{
                        items:3
                        ,center:true
                        ,mouseDrag:false
                ,touchDrag:false
                    },
                        
                    767:{
                        items:3
                        ,center:true
                        ,mouseDrag:false
                ,touchDrag:false
                    },
                    1000:{
                        items:5
                        ,center:true
                        ,mouseDrag:false
                ,touchDrag:false
                    }
                }
    });
    
            $owl.on('translated.owl.carousel', function(e) {
        $owl.find(".item a.tab").removeClass("selected");											 
       $owl.find(".center a.tab").trigger("click").addClass("selected");
    });
    $(document).on('click', '.owl-item>div', function() {
      $owl.trigger('to.owl.carousel', $(this).data( 'position' ) ); 
    });
    setTimeout(function(){
                     $(".rotatingMobSlider .owl-item:first").find("a.tab").addClass("selected");
                },800);	
            
        };
        
        $(".rotatingMobSlider h2").click(function(){
                        
                        $('.rotatingMobSlider a').removeClass('selected');
                        $(this).parent().addClass('selected');
                            
        
        });
        
        //center for excellence responsive slider end
        
            
            
            
        
    if($('.datepicker').length){
        $.datepicker.setDefaults({
          showOn: "both"
          ,dateFormat:"dd/mm/yy"
          ,changeMonth: true
          ,changeYear: true
          //,buttonImage: "images/calendar.png"
         //,buttonImageOnly: true
          ,shortYearCutoff: 50
          ,buttonText: "<span class='sprite calIcon'></span>"
          ,beforeShow: function (textbox, instance) {
            instance.dpDiv.css({
                marginTop: /*(textbox.offsetHeight)*/ 0 + 'px'
                ,marginLeft: 0 + 'px'
            });
            }
        });
        
        $( ".datepicker" ).datepicker({
               dateFormat:"dd/mm/yy"
               ,showOn: "both"
               ,buttonText: "<span class='sprite calIcon'></span>"
               ,shortYearCutoff: 50
             //,buttonImage: "images/calendar.png"
             //,buttonImageOnly: true
               ,beforeShow: function (textbox, instance) {
                instance.dpDiv.css({
                        marginTop: /*(textbox.offsetHeight)*/ 0 + 'px'
                        ,marginLeft: 0 + 'px'
                        });
                }
          });	
    }
        
        
        
        
            jQuery('.login').on('click', function(event) {   
            jQuery('.searchDataToggle').toggle('show');
              event.stopPropagation();
                });
                    jQuery('.searchDataToggle').on('click', function(event) {   
                      event.stopPropagation();
                });
            
    
                $(document).on('click', function() {   
                jQuery('.searchDataToggle').hide();
               });
    
        
        
    if( $(".datetimepicker").length){
        $( ".datetimepicker" ).datetimepicker({
               dateFormat:"dd-mm-yy", 
               showOn: "both",
               buttonText: "<span class='sprite calIcon'></span>",
               //buttonImage: "images/calendar.png"
               //buttonImageOnly: true,
               beforeShow: function (textbox, instance) {
                instance.dpDiv.css({
                        marginTop: /*(textbox.offsetHeight)*/ 15 + 'px',
                        marginLeft: -13 + 'px'
                        });
                }
          });
    }
    
    
    
    
    
    
    //megamenu start
            $(".megaMenu").click( function(e){
                        e.preventDefault();
                        $("body").addClass("megaMenuBody");
            });	
            $(".megaMenuClose").click( function(e){
                    e.preventDefault();
                    $("body").removeClass("megaMenuBody");
            });	
            
            
            
            $(".aboutSkipContent").click( function(e){
                    $("body").removeClass("megaMenuBody");
            });	
            
    //megamenu end		
                
    //about section another page about page direct
        if(window.location.hash) {
                var hash = window.location.href;			
                var res = '#' + hash.split('#')[1];
                if($(res).length){
                setTimeout(function(){
                    $(".region-megamenumegamenu a").each(function(){						   
                        var targetLink = $(res);								 
                        $('html,body').animate({scrollTop: $(targetLink).offset().top - 80},1000);
                    
                    });
                },800);
                }	
            }
    
    
    
    
        //$(".panIndia .directorate-data").on('click',function(){
            //alert("hey");	   
        //});	
        
        // Message on Cookie Disabled
        $.cookie('cookieWorked', 'yes', { path: '/' });
        if ($.cookie('cookieWorked') == 'yes') {
            }
        else{
            if( $("div.jsRequired").length == 0){
                $("body").prepend(
                    '<div class="jsRequired">Cookies are not enabled on your browser. Need to adjust this in your browser security preferences. Please enable cookies for better user experience.</div>'
                );	
            }
        }
        
        $(" #view-directorate #directorateInfo[data-id = '384']").addClass("active");
        $(" #view-directorate").each(function(){
            $(' #view-directorate #directorateInfo').css('display','none');
        });
        $(" #view-directorate #directorateInfo[data-id = '384']").css('display','block');
        //map js
        //.directorateLft .selectInfo a
        $(".directorateLft .selectInfo ul li").on('click', function (event) {
                 $target = $(event.target);   
                $(".directorateLft li a").removeClass("active");
                $target.parent().addClass('active');
             $(".mapLocations .mapIcons").removeClass("active");
                var data = $(".directorateLft li a.active").attr('data-id');
                //alert(data);
                        
                $(" #view-directorate .directorateInfo[data-id]").each(function(){
                    var allDataDirectorateId =  $(this).data("id");
                    if(data == allDataDirectorateId){
                        $(' #view-directorate #directorateInfo').removeClass('active');
                        $('*[data-id="'+ data +'"]').addClass('active');
                        if($(' #view-directorate #directorateInfo').hasClass('active')){
                            $(' #view-directorate #directorateInfo').css('display','none');
                            $('*[data-id="'+ data +'"]').css('display','block');
                        }
                        //$('*[data-id="'+ data +'"]').css('display','block');
                    }
                });
            
          
                /*$(".views-element-container #view-directorate").each(function(){ 
                    var allDataDirectorateId =  $(".views-element-container #view-directorate .directorateInfo").attr("data-id");
                    alert(data);
                    alert(allDataDirectorateId);
                    if(allDataDirectorateId == data){
                        $('.views-element-container #view-directorate .directorateInfo').css('display','block');
                    }	
                });	*/
                    
        });    
            
         
        
        /*$(".hyderabad").on('click',function(){
             $(".mapLocations .mapIcons").removeClass("active");										
            $(".mapLocations .hyderabad ").addClass('active');								   
                                           
        });
        $(".guwahati").on('click',function(){
             $(".mapLocations .mapIcons").removeClass("active");								
            $(".mapLocations .guwahati ").addClass('active');								   
                                           
        });
        $(".gandhinagar").on('click',function(){
             $(".mapLocations .mapIcons").removeClass("active");								
            $(".mapLocations .gandhinagar ").addClass('active');								   
                                           
        });
            
        $(".noida").on('click',function(){
             $(".mapLocations .mapIcons").removeClass("active");								
            $(".mapLocations .noida ").addClass('active');								   
                                           
        });
                    
        $(".thiruvananthapuram").on('click',function(){
             $(".mapLocations .mapIcons").removeClass("active");								
            $(".mapLocations .thiruvananthapuram ").addClass('active');								   
                                           
        });
                                    
        $(".bengaluru").on('click',function(){
             $(".mapLocations .mapIcons").removeClass("active");								
            $(".mapLocations .bengaluru ").addClass('active');								   
                                           
        });
        
        $(".maharashtra-pune").on('click',function(){
             $(".mapLocations .mapIcons").removeClass("active");								
            $(".mapLocations .maharashtra-pune ").addClass('active');								   
                                           
        });
        
        $(".chennai").on('click',function(){
             $(".mapLocations .mapIcons").removeClass("active");								
            $(".mapLocations .chennai ").addClass('active');								   
                                           
        });
                
        $(".bhubaneswar").on('click',function(){
             $(".mapLocations .mapIcons").removeClass("active");								
            $(".mapLocations .bhubaneswar ").addClass('active');								   									   
        });*/
        if($(".mapLocations .mapIcons").length){	
        $(".directorate-data:first a").addClass("active");
      $(".mapLocations .mapIcons[data-id = '384']").addClass("active");
            $(".mapLocations .mapIcons").on('click', function (event) {         
                $(".mapLocations .mapIcons").removeClass("active");       
                $(this).addClass('active');		
                var data = $(this).attr('data-id');
                if($(this).hasClass(".active")){
    
                }else{
                    $(".directorateLft li a").removeClass("active");
                    $(".directorateInfo").hide();
                    $(".directorateLft li").find("a[data-id='" + data + "']").addClass("active");				
                    $(".directorateInfo[data-id='" + data + "']").show();
                }
                });	
            }
        //rotating slider
        
        if( $(".rotating-slider").length) {
        
        //rotating-slider.js start
    (function($) {
      $.fn.rotatingSlider = function(options) {
        var rotatingSlider = {
          init: function(el) {
            this.$slider = $(el);
            this.$slidesContainer = this.$slider.children("ul.slides");
            this.$slides = this.$slidesContainer.children("li");
            this.$clipPath;
            this.$directionControls;
            this.$currentSlide;
            this.$nextSlide;
            this.$previousSlide;
            this.settings = $.extend(
              {
                autoRotate: !0,
                autoRotateInterval: 6000,
                draggable: !0,
                directionControls: !0,
                directionLeftText: "&lsaquo;",
                directionRightText: "&rsaquo;",
                rotationSpeed: 750,
                slideHeight: 200,
                slideWidth: 200,
                beforeRotationStart: function() {},
                afterRotationStart: function() {},
                beforeRotationEnd: function() {},
                afterRotationEnd: function() {}
              },
              options
            );
            this.slideAngle = 360 / this.$slides.length;
            this.currentRotationAngle = 0;
            this.autoRotateIntervalId = !1;
            this.rotateTimoutId = !1;
            this.currentlyRotating = !1;
            this.readyToDrag = !1;
            this.dragStartPoint;
            this.dragStartAngle;
            this.currentlyDragging = !1;
            this.markupIsValid = !1;
            this.validateMarkup();
            if (this.markupIsValid) {
              this.renderSlider();
              this.setCurrentSlide();
              this.bindEvents();
              if (this.settings.autoRotate) {
                this.startAutoRotate();
              }
            }
          },
          bindEvents: function() {
            if (this.settings.draggable) {
              this.$slidesContainer.on(
                "mousedown touchstart",
                this.handleDragStart.bind(this)
              );
              this.$slidesContainer.on(
                "mousemove touchmove",
                this.handleDragMove.bind(this)
              );
              this.$slidesContainer.on(
                "mouseup mouseleave touchend",
                this.handleDragEnd.bind(this)
              );
            }
            if (this.settings.directionControls) {
              this.$slider
                .find("ul.direction-controls .left-arrow button")
                .click(this.handleLeftDirectionClick.bind(this));
              this.$slider
                .find("ul.direction-controls .right-arrow button")
                .click(this.handleRightDirectionClick.bind(this));
            }
          },
          handleDragStart: function(e) {
            this.readyToDrag = !0;
            this.dragStartPoint =
              e.type === "mousedown" ? e.pageX : e.originalEvent.touches[0].pageX;
          },
          handleDragMove: function(e) {
            if (this.readyToDrag) {
              var pageX =
                e.type === "mousemove" ? e.pageX : e.originalEvent.touches[0].pageX;
              if (
                this.currentlyDragging === !1 &&
                this.currentlyRotating === !1 &&
                (this.dragStartPoint - pageX > 6 ||
                  this.dragStartPoint - pageX < -6)
              ) {
                this.stopAutoRotate();
                if (this.settings.directionControls) {
                  this.$directionControls.css("pointer-events", "none");
                }
                window.getSelection().removeAllRanges();
                this.currentlyDragging = !0;
                this.dragStartAngle = this.currentRotationAngle;
              }
              if (this.currentlyDragging) {
                this.currentRotationAngle =
                  this.dragStartAngle -
                  (this.dragStartPoint - pageX) /
                    this.settings.slideWidth *
                    this.slideAngle;
                this.$slidesContainer.css(
                  "transform",
                  "translateX(-50%) rotate(" + this.currentRotationAngle + "deg)"
                );
              }
            }
          },
          handleDragEnd: function(e) {
            this.readyToDrag = !1;
            if (this.currentlyDragging) {
              this.currentlyDragging = !1;
              this.currentRotationAngle =
                Math.round(this.currentRotationAngle / this.slideAngle) *
                this.slideAngle;
              this.rotate();
              if (this.settings.directionControls) {
                this.$directionControls.css("pointer-events", "");
              }
            }
          },
          handleLeftDirectionClick: function(e) {
            e.preventDefault();
            this.stopAutoRotate();
            this.rotateClockwise();
          },
          handleRightDirectionClick: function(e) {
            e.preventDefault();
            this.stopAutoRotate();
            this.rotateCounterClockwise();
          },
          renderSlider: function() {
            var halfAngleRadian = this.slideAngle / 2 * Math.PI / 180;
            var innerRadius =
              1 / Math.tan(halfAngleRadian) * this.settings.slideWidth / 2;
            var outerRadius = Math.sqrt(
              Math.pow(innerRadius + this.settings.slideHeight, 2) +
                Math.pow(this.settings.slideWidth / 2, 2)
            );
            upperArcHeight =
              outerRadius - (innerRadius + this.settings.slideHeight);
            lowerArcHeight = innerRadius - innerRadius * Math.cos(halfAngleRadian);
            var slideFullWidth = Math.sin(halfAngleRadian) * outerRadius * 2;
            var slideFullHeight =
              upperArcHeight + this.settings.slideHeight + lowerArcHeight;
            var slideSidePadding = (slideFullWidth - this.settings.slideWidth) / 2;
            var fullArcHeight =
              outerRadius - outerRadius * Math.cos(halfAngleRadian);
            var lowerArcOffset =
              (slideFullWidth - Math.sin(halfAngleRadian) * innerRadius * 2) / 2;
            this.$slider.css("height", this.settings.slideHeight + "px");
            this.$slider.css("width", this.settings.slideWidth + "px");
            this.$slidesContainer.css("height", outerRadius * 2 + "px");
            this.$slidesContainer.css("width", outerRadius * 2 + "px");
            this.$slidesContainer.css("transform", "translateX(-50%)");
            this.$slidesContainer.css("top", "-" + upperArcHeight + "px");
            var pathCoords = "M 0 " + fullArcHeight;
            pathCoords +=
              " A " +
              outerRadius +
              " " +
              outerRadius +
              " 0 0 1 " +
              slideFullWidth +
              " " +
              fullArcHeight;
            pathCoords +=
              " L " + (slideFullWidth - lowerArcOffset) + " " + slideFullHeight;
            pathCoords +=
              " A " +
              innerRadius +
              " " +
              innerRadius +
              " 0 0 0 " +
              lowerArcOffset +
              " " +
              slideFullHeight +
              " Z";
            this.$slider.append(
              //'<svg><defs><clipPath id="slideClipPath"><path /></clipPath></defs></svg>'
            );
            this.$slider.find("#slideClipPath>path").attr("d", pathCoords);
            this.$slides.each(
              function(i, el) {
                var $slide = $(el);
                $slide.css(
                  "transform-origin",
                  "center " + (innerRadius + this.settings.slideHeight) + "px"
                );
                $slide.css("height", this.settings.slideHeight + "px");
                $slide.css("width", this.settings.slideWidth + "px");
                $slide.css(
                  "padding",
                  upperArcHeight +
                    "px " +
                    slideSidePadding +
                    "px " +
                    lowerArcHeight +
                    "px " +
                    slideSidePadding +
                    "px "
                );
                $slide.css("top", upperArcHeight + "px");
                $slide.css(
                  "transform", 
                  "translateX(-50%) rotate(" +
                    this.slideAngle * i +
                    "deg) translateY(-" +
                    upperArcHeight +
                    "px)"
                );
                
                $slide.css("-webkit-clip-path", "url(#slideClipPath)");
                $slide.css("clip-path", "url(#slideClipPath)");
              }.bind(this)
            );
            if (this.settings.directionControls) {
              var directionArrowsHTML = '<ul class="direction-controls">';
              directionArrowsHTML +=
                '<li class="left-arrow"><button>' +
                this.settings.directionLeftText +
                "</button></li>";
              directionArrowsHTML +=
                '<li class="right-arrow"><button>' +
                this.settings.directionRightText +
                "</button></li>";
              directionArrowsHTML += "</ul>";
              this.$slider.append(directionArrowsHTML);
              this.$directionControls = this.$slider.find("ul.direction-controls");
            }
          },
          rotateClockwise: function() {
            this.currentRotationAngle = this.currentRotationAngle + this.slideAngle;
            this.rotate();
          },
          rotateCounterClockwise: function() {
            this.currentRotationAngle = this.currentRotationAngle - this.slideAngle;
            this.rotate();
          },
          rotate: function() {
            this.beforeRotationStart();
            this.currentlyRotating = !0;
            this.$slider.addClass("currently-rotating");
            $(".slides").removeClass("currentlyrotating");
            this.setCurrentSlide();
            if (this.rotateTimeoutId) {
              clearTimeout(this.rotateTimeoutId);
              this.rotateTimeoutId = !1;
            }
            this.$slidesContainer.css(
              "transition",
              "transform " + this.settings.rotationSpeed / 1000 + "s ease-in-out"
            );
            this.$slidesContainer.css(
              "transform",
              "translateX(-50%) rotate(" + this.currentRotationAngle + "deg)"
            );
            this.afterRotationStart();
            this.rotateTimeoutId = setTimeout(
              function() {
                this.beforeRotationEnd();
                this.currentlyRotating = !1;
                this.$slider.removeClass("currently-rotating");
                $(".slides").removeClass("currentlyrotating");
                this.$slidesContainer.css("transition", "none");
                if (
                  this.currentRotationAngle >= 360 ||
                  this.currentRotationAngle <= -360
                ) {
                  this.currentRotationAngle =
                    this.currentRotationAngle >= 360
                      ? this.currentRotationAngle - 360
                      : this.currentRotationAngle + 360;
                  this.$slidesContainer.css(
                    "transform",
                    "translateX(-50%) rotate(" + this.currentRotationAngle + "deg)"
                  );
                }
                this.afterRotationEnd();
              }.bind(this),
              this.settings.rotationSpeed
            );
          },
          setCurrentSlide: function() {
            var currAngle = this.currentRotationAngle;
            if (
              this.currentRotationAngle >= 360 ||
              this.currentRotationAngle <= -360
            ) {
              currAngle = currAngle >= 360 ? currAngle - 360 : currAngle + 360;
            }
            this.$currentSlide = this.$slides.eq(-currAngle / this.slideAngle);
            this.$nextSlide = this.$currentSlide.is(":last-child")
              ? this.$slides.first()
              : this.$currentSlide.next();
            this.$previousSlide = this.$currentSlide.is(":first-child")
              ? this.$slides.last()
              : this.$currentSlide.prev();
            this.$slides.removeClass("active-slide");
            this.$slides.removeClass("next-slide");
            this.$slides.removeClass("previous-slide");
            this.$currentSlide.addClass("active-slide");
            this.$nextSlide.addClass("next-slide");
            this.$previousSlide.addClass("previous-slide");
          },
          startAutoRotate: function() {
            this.autoRotateIntervalId = setInterval(
              function() {
                this.rotateCounterClockwise();
              }.bind(this),
              this.settings.autoRotateInterval
            );
          },
          stopAutoRotate: function() {
            if (this.autoRotateIntervalId) {
              clearInterval(this.autoRotateIntervalId);
              this.autoRotateIntervalId = !1;
            }
          },
          validateMarkup: function() {
            if (
              this.$slider.hasClass("rotating-slider") &&
              this.$slidesContainer.length === 1 &&
              this.$slides.length >= 2
            ) {
              this.markupIsValid = !0;
            } else {
              this.$slider.css("display", "none");
              console.log("Markup for Rotating Slider is invalid.");
            }
          },
          beforeRotationStart: function() {
            this.settings.beforeRotationStart();
          },
          afterRotationStart: function() {
            this.settings.afterRotationStart();
          },
          beforeRotationEnd: function() {
            this.settings.beforeRotationEnd();
          },
          afterRotationEnd: function() {
            this.settings.afterRotationEnd();
          }
        };
        return this.each(function() {
          rotatingSlider.init(this);
        });
      };})(jQuery);
    
    jQuery(function() {  jQuery(".rotating-slider").rotatingSlider({
      /*  slideHeight: Math.min(100, window.innerWidth - 20),
        slideWidth: Math.min(100, window.innerWidth - 20),
        rotationSpeed: 800,
        autoRotateInterval: 6000000000,
        afterRotationStart: function() {
          console.log(
            "Rotating to slide " + ($(".rotating-slider .active-slide").index() + 1)
          );	 
        }*/
        autoRotate: true,
        autoRotateInterval: 600000,
        draggable: true,
        directionControls: true,
        directionLeftText: '&lsaquo;',
        directionRightText: '&rsaquo;',
        rotationSpeed: 750,
         slideHeight: Math.min(100, window.innerWidth - 20),
        slideWidth: Math.min(100, window.innerWidth - 20),
        /* Callback Functions */
        beforeRotationStart: function(){},
        afterRotationStart: function(){},
        beforeRotationEnd: function(){},
        afterRotationEnd: function(){	
                var tabId = $(".active-slide a").attr("data-id");
        $(".customTabcontent").find(".tabsList").hide();	
        $(".customTabcontent").find(".tabsList[data-id="+ tabId +"]").show();	
            }
      }); });	}
    
    if($(".rotating-slider").length){
        $("ul.direction-controls button").on("click", function(){
        alert(1);													 
        $(".slides").removeClass("currentlyrotating");														 
        });
        $(".rotating-slider li").bind("click",function(){
                //var topPosition = $(this).offset().top;
                //var sliderHeight = $(".rotating-slider").height();
                //alert(topPosition);
                //alert(sliderHeight);
            /*if($(this).offset.top === 5){
                alert(1);
                }else{
                alert(2);	
                }	*/	
                
        var activePosition = $(this).prevAll().length;
        var slideLiLength = $(".slides li").length;
        var maindeg = 360 / slideLiLength;
        var rotateDeg = maindeg * activePosition;
        //var mainDivRotate = $(".slides").css("transform");
        //alert(mainDivRotate);
        $(this).siblings("li").removeClass("active-slide");		
        $(this).addClass("active-slide");
        $(this).next().removeClass("previous-slide").addClass("next-slide");
        $(this).prev().removeClass("next-slide").addClass("previous-slide");
        var currentLi = $("li.active-slide")
        //$(".slides").addClass("currentlyrotating");	
         if (currentLi.is(':first-child')) {
             $(".slides").css('-ms-transform', 'rotate(0) translateX(-50%)');
            $(".slides").css('transition', 'transform 0.8s ease-in-out');
         }else if(currentLi.is(':last-child')) {
            $(".slides").css('-ms-transform', 'translateX(-50%) rotate(-360deg) ');
            $(".slides").css('transition', 'transform 0.8s ease-in-out');
         }
         else{
        $(".slides").css('transform', ' translateX(-50%) rotate(-' + rotateDeg + 'deg)');
        $(".slides").css('transition', 'transform 0.8s ease-in-out');	
         }
        });
    
        }
        
    
        
        $(".coeTab .tabContainer .tabContent[data-id = '4']").addClass("active");
        $(".coeTab .tabContainer .tabContent").each(function(){
            $('.coeTab .tabContainer .tabContent').css('display','none');
        });
        $(".coeTab .tabContainer .tabContent[data-id = '4']").css('display','block');
        
        $(".slides").on("click", ".tab", function(e) {
            e.preventDefault();
            $(".tab").removeClass("active");
            $(".tab-content").removeClass("show");
            $(this).addClass("active");
            $($(this).attr("href")).addClass("show");
        
        });
    
    
         $('button').click(function(){ 
            setTimeout(function(){ $(".slides li.active-slide .tab").addClass("test");	}, 3000);									
         });
        
     if($(".rotating-slider").length){
         $(".rotating-slider a").on("click",function(){
        var tabId = $(this).attr("data-id");
        //alert(tabId);
        $(this).parents(".centerOfExce").find(".tabsList").hide();	
        $(this).parents(".centerOfExce").find(".tabsList[data-id="+ tabId +"]").show();	
        });
         $(".rotating-slider li:first a").trigger("click");
         }
    if($(".rotatingMobSlider").length){
         $(".rotatingMobSlider .tab").click(function(e){
            e.preventDefault();	
            var tabId = $(this).attr("data-id");
        //alert(tabId);
        $(this).parents(".container").find(".tabsList").hide();	
        $(this).parents(".container").find(".tabsList[data-id="+ tabId +"]").show();	
            });
          $(".rotatingMobSlider .item:first a").trigger("click");
        }	
        
        //rotating-slider.js end	
    
    });
    
    /*================= On Document Load End =================*/
    
    /*================= On Window Resize Start =================*/	
    $(window).bind('resize orientationchange', function() {
        getWidth();												
        adjustMenu();
        $('.vCenter').each(function () {$(this).verticalAlign();});
    });
    
    /*================= On Window Resize End =================*/	
    
    /*================= On Window Load Start =================*/
    $(window).load(function() {
        var tabId = $(".active-slide a").attr("data-id");
        $(".customTabcontent").find(".tabsList").hide();	
        $(".customTabcontent").find(".tabsList[data-id="+ tabId +"]").show();
            
    });
    /*================= On Document Load End =================*/
    
    
    function getWidth() {
        ww = document.body.clientWidth;
        if(ww>wideScreen){$('body').removeClass('device').addClass('desktop widerDesktop');}
        if(ww>mobilePort && ww<=wideScreen){	$('body').removeClass('device widerDesktop').addClass('desktop');}
        if(ww<=mobilePort) {$('body').removeClass('desktop widerDesktop').addClass('device');}
        if(ww > 767 && ww < 1025){$('body').addClass('ipad');}
        else {$('body').removeClass('ipad');}	
    }
    
    })(jQuery);
    
    
    function validate() {
        return false;
    };
    
    $(document).ready(function() {
    window.onscroll = function() {myFunction()};
    
    var header = document.getElementById("header");
    var sticky = header.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
                
    });
    
    
    $(document).ready(function() {
                        
    //skip to main content for inner pages
    $(".innerPageContent").attr("id","content");
    
            
                        
                        
        $('.open-popup-link').magnificPopup({
            type: 'inline',
            midClick: true,
            mainClass: 'mfp-fade'
        });	
        
        $('.popup-youtube, .popup-vimeo, .popup-gmaps, .video-popup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
        });
        
        $('.Count').each(function () {
      var $this = $(this);
      jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 8000,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter));
        }
      });
    });
        
    });
    
    /*social sharing poppup*/
      $.fn.socialSharingPopup = function (e, intWidth, intHeight, blnResize) {
        
        // Prevent default anchor event
        e.preventDefault();
        
        // Set values for window
        intWidth = intWidth || '500';
        intHeight = intHeight || '400';
        strResize = (blnResize ? 'yes' : 'no');
    
        // Set title and open popup with focus on it
        var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share'),
            strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,            
            objWindow = window.open(this.attr('href'), strTitle, strParam).focus();
      }
      
      
      $(document).ready(function ($) {
        $('.socialIcone a').on("click", function(e) {
          $(this).socialSharingPopup(e);
        });
      });