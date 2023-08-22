// jQuery.noConflict();
$(document).ready(function(){
    let topBarSectionHt = $('.js_top_bar_section');
    let searchEmpFormHt = $('.search_employee_form-in-employee_list-in-aside');
    let navigationSectionHt = $('.navigation-section');
    
    $('.navbar--sidenav_toggle_btn').on('click', function () {
        openCloseSideNavigation();
    });
    $('.js_sidenav_toggle_btn').on('click', function () {
        openCloseSideNavigation();
    });
    $('.mobilenavigation-backdrop').on('click', function () {
        openCloseSideNavigation();
    });
    function openCloseSideNavigation(){
        $('.bc_module_list, .navbar-toggler').toggleClass('is_open');
        $('.mobilenavigation-backdrop').toggleClass('active');
    }
    $('.js_openclose_popoverfilter').on('click', function () {
        $('.dashboard-filter-block').toggleClass('active');
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