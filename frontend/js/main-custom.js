
    // $('.custom-file-input').on('change', function() {
    //     //get the file name
    //     var fileName = $(this).val();
    //     //replace the "Choose a file" label
    //     $(this).next('.custom-file-label').html(fileName);
    // })

    $(document).on('change', '.file-input', function() {
        console.log("files uploaded");
        var filesCount = $(this)[0].files.length;
        var textbox = $(this).prev();
        if (filesCount === 1) {
            var fileName = $(this).val().split('\\').pop();
            textbox.text(fileName);
        } else {
            textbox.text(filesCount + ' files selected');
        }
    });

//    step form
    $(document).ready(function () {
        var currentStep = 0;
        var steps = $(".step");

        showStep(currentStep);

        // "Next" button click event handler
        $(".nextBtn").click(function () {
            if (validateStep(currentStep)) {
                currentStep++;
                showStep(currentStep);
            }
        });

        // "Previous" button click event handler
        $(".prevBtn").click(function () {
            currentStep--;
            showStep(currentStep);
        });

        // "Submit" button click event handler
        $(".submitBtn").click(function () {
            if (validateStep(currentStep)) {
                $("#jobApply").submit();
            }
        });

        // Function to show the current step
        function showStep(step) {
            steps.hide();
            $(steps[step]).show();
            if (step == 0) {
                $(".prevBtn").hide();
            } else {
                $(".prevBtn").show();
            }
            if (step == steps.length - 1) {
                $(".nextBtn").hide();
                $(".submitBtn").show();
            } else {
                $(".nextBtn").show();
                $(".submitBtn").hide();
            }
        }

        // Function to validate the current step
        function validateStep(step) {
            var inputs = $(steps[step]).find("input, textarea");
            var valid = true;
            for (var i = 0; i < inputs.length; i++) {
                if (!inputs[i].checkValidity()) {
                    valid = false;
                    $(inputs[i]).addClass("invalid");
                } else {
                    $(inputs[i]).removeClass("invalid");
                }
            }
            return valid;
        }
    });





$('.solution_silder_wrap').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
$('.testimonail_silder').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.partner_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 5
        },
        1000: {
            items: 7
        }
    }
});


$(document).ready(function() {
  $('.accordion-panel').on('click', '.accordion__header', function() {
    $('.accordion__body').slideUp().removeClass('flipInX');
    if($(this).next().is(':hidden')) {
      $(this).next().slideDown().addClass('flipInX');
      $(this).closest('.accordion__header').addClass('open');
    } else {
      $(this).next().slideUp();
      $(this).closest('.accordion__header').removeClass('open');
    }
  });
});


    $('.custom_input').change(function () {
        var filename = $(this).val().split('\\').pop();
        $(this).next('.file-name').text(filename).css('visibility','visible');
    });


    $(document).ready(function() {
        // hide all steps except the first one
        $('.step-2, .step-3, .step-4, .step-5, .step-6, .step-7, .step-8, .step-9,.step-10').hide();
        
        // when the "Next" button is clicked, show the next step and hide the current step
        $('.continue').click(function() {
          var currentStep = $(this).parent();
          var nextStep = $(this).parent().next();
          currentStep.hide();
          nextStep.show();
          return false; // prevent page refresh
        });
        
        // when the "Back" button is clicked, show the previous step and hide the current step
        $('.Back').click(function() {
          var currentStep = $(this).parent();
          var previousStep = $(this).parent().prev();
          currentStep.hide();
          previousStep.show();
          return false; // prevent page refresh
        });
      });       

    $("#country_selector").countrySelect({
        preferredCountries: ['ca', 'gb', 'us']
    });




