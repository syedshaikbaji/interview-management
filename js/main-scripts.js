// jQuery.noConflict();
$(document).ready(function(){
    let topBarSectionHt = $('.js_top_bar_section');
    let searchEmpFormHt = $('.search_employee_form-in-employee_list-in-aside');
    let navigationSectionHt = $('.navigation-section');
    // $('.js_main_aside').css({'height': `calc(100vh - ${topBarSectionHt.outerHeight(true) + navigationSectionHt.outerHeight(true)}px)`})
    $('.navbar--sidenav_toggle_btn').on('click', function () {
        $('.bc_module_list, .navbar-toggler').toggleClass('is_open');
    });
    $('.js_openclose_popoverfilter').on('click', function () {
        $('.dashboard-filter-block').toggleClass('active');
    });
    $('.js_sidenav_toggle_btn').on('click', function () {
        $('.bc_module_list, .navbar-toggler').toggleClass('is_open');
    });
    // $('.mobile_employee_list_btn, .close_js_lc_sub_aside').on('click', function () {
    //     $('.js_lc_sub_aside').toggleClass('d-none');
    // });
    $('.bc_nav_profile--dropdown_btn').on('click', function (event) {
        $(this).closest('.bc_nav_profile').find('.bc_nav_profile--dropdown').toggleClass('active');
        $(this).closest('.bc_nav_profile').find('.bc_nav_profile--dropdown').hasClass('active') ?
            $('.bc_nav_profile--dropdown_btn').attr('aria-expanded', 'true') :
            $('.bc_nav_profile--dropdown_btn').attr('aria-expanded', 'false');
    });
    // $('[data-toggle="tooltip"]').tooltip();
    
    $('.req-status').on('change', function(){
        $(this).addClass('active');
    })
});