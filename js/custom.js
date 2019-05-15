// noinspection JSAnnotator
/**
 * Created by medard on 22/03/2017.
 */

(function ($, Drupal) {

    'use strict';
    Drupal.behaviors.mainBehavior = {

        attach: function (context, settings) {

            const main = 'mainBehavior';

            const mobileDetect = new MobileDetect(window.navigator.userAgent);
            const isMobile = mobileDetect.mobile() !== null;

            console.log("Is mobile? : " + isMobile);

            if (settings.path.isFront) {
                $(context).find('nav#block-jir-main-menu > ul.menu > li:first-child').once(main).addClass('active');
            }

            $(context).find('form#views-exposed-form-adverts-page-search-ads input').once(main).addClass('input-sm');
            $(context).find('form#views-exposed-form-adverts-page-search-ads div.input-group > span').once(main).addClass('input-sm');
            $(context).find('form#views-exposed-form-adverts-page-search-ads select').once(main).addClass('input-sm');

            $(context).find('form#views-exposed-form-adverts-page-search-ads div.form-item-combine').once(main).addClass('col-lg-6 col-md-6');
            $(context).find('form#views-exposed-form-adverts-page-search-ads div.form-item-field-job-categorie-target-id').once(main).addClass('col-lg-4 col-md-4');
            $(context).find('form#views-exposed-form-adverts-page-search-ads div.form-actions').once(main).addClass('col-lg-2 col-md-2');

            $(context).find('div.field--name-field-application-form > a').once(main).addClass('btn btn-success btn-xs btn-block');

            $(context).find('div.view-jobs-view > div.view-content > div.media > div:first-child').once(main).addClass('job-teaser-left col-md-2 col-sm-2 col-xs-2');
            $(context).find('div.view-jobs-view > div.view-content > div.media > div:last-child').once(main).addClass('job-teaser-right col-md-10 col-sm-10 col-xs-10');

            if (settings.path.currentPath === 'node/add/job') {
                $(context).find('div#edit-field-job-company-name-wrapper').once(main).append("<div><a href='/node/add/employer'>Vous ne trouvez pas l'employeur? Cliquez ici.</a></div>");
            }

            //Hide super featured jobs box when empty
            const superFeaturedBox = $(context).find('div.super-featured-jobs');
            if ($.trim(superFeaturedBox.text()) === '') {
                superFeaturedBox.hide();
            }

            // Fold searchBar in panel
            if (isMobile) {
                console.log('This is mobile...');
                let searchBar = $('div.region-jir-search-bar');
                if (searchBar.length) {
                    let searchBarHtml = searchBar.html();

                    let content = $('<div class="panel panel-default">\n' +
                        '                    <div class="panel-heading" style="border-bottom: 1px #ccc solid">\n' +
                        '                        <a href="#search-block-element" data-toggle="collapse" class="panel-title collapsed" role="button"><i class="fas fa-search"></i> Search</a>\n' +
                        '                    </div>\n' +
                        '                    <div class="panel-body panel-collapse collapse fade" id="search-block-element" style="padding:10px 0">' + searchBarHtml +
                        '                    </div>\n' +
                        '                </div>');
                    searchBar.html(content);
                    // searchBar.remove();
                    // content.insertBefore($('div.main-container'));
                }
            }

            $.fn.select2.defaults.set( "theme", "bootstrap" );

            const input = document.querySelector("#edit-field-job-contact-phone-number-0-value");
            window.intlTelInput(input, {initialCountry: 'bi', nationalMode: false});
            $("#edit-field-employer-secteur").select2({
                theme: "bootstrap"
            });
        }
    };

})(jQuery, Drupal);