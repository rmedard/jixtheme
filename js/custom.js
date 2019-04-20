// noinspection JSAnnotator
/**
 * Created by medard on 22/03/2017.
 */

(function ($, Drupal) {

    'use strict';
    Drupal.behaviors.mainBehavior = {

        attach: function (context, settings) {

            const main = 'mainBehavior';

            if (settings.path.isFront) {
                $(context).find('nav#block-jir-main-menu > ul.menu > li:first-child').once(main).addClass('active');
            }

            $(context).find('form#views-exposed-form-adverts-page-search-ads input').once(main).addClass('input-sm');
            $(context).find('form#views-exposed-form-adverts-page-search-ads div.input-group > span').once(main).addClass('input-sm');
            $(context).find('form#views-exposed-form-adverts-page-search-ads select').once(main).addClass('input-sm');

            $(context).find('form#views-exposed-form-adverts-page-search-ads > div > div.form-item-combine').once(main).addClass('col-lg-6 col-md-6');
            $(context).find('form#views-exposed-form-adverts-page-search-ads > div > div.form-item-combine > div.input-group').once(main).css('width', '100%');
            $(context).find('form#views-exposed-form-adverts-page-search-ads > div > div.form-item-field-employer-sector-value').once(main).addClass('col-lg-4 col-md-4');
            $(context).find('form#views-exposed-form-adverts-page-search-ads > div > div.form-actions').once(main).addClass('col-lg-2 col-md-2');

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

            // select#edit-field-job-categorie
            const input = document.querySelector("#edit-field-job-contact-phone-number-0-value");
            window.intlTelInput(input, {initialCountry: 'bi', nationalMode: false});
            $('#edit-field-job-categorie').select2({
                theme: "bootstrap"
            });
            $('#edit-field-employer-secteur').select2({
               theme: "bootstrap"
            });

            if (isMobile.any()) {
                $('nav#block-jobstabsmenu > ul').removeClass('nav-justified');
                let searchBar = $('div#search-bar-input-form');
                if (searchBar.length) {
                    let searchBarHtml = searchBar.html();

                    let content = $('<div class="panel panel-default">\n' +
                        '                    <div class="panel-heading" style="border-bottom: 1px #ccc solid">\n' +
                        '                        <a href="#search-block-element" data-toggle="collapse" class="panel-title collapsed" role="button"><i class="fas fa-search"></i> Search</a>\n' +
                        '                    </div>\n' +
                        '                    <div class="panel-body panel-collapse collapse fade" id="search-block-element" style="padding:10px 0">' + searchBarHtml +
                        '                    </div>\n' +
                        '                </div>');
                    $('div.jix-search-bar').remove();
                    // searchBar.remove();
                    content.insertBefore($('div.main-container'));
                }
            }
        }
    };

    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    let deviceMql = window.matchMedia("(max-width: 767px)");
    deviceMql.addListener(handleDeviceChange);
    handleDeviceChange(deviceMql, $);

    function handleDeviceChange(deviceMql, $) {
        if (deviceMql.matches) {
            let searchBar = $('div#search-bar-input-form');
            if (searchBar.length) {
                let searchBarHtml = searchBar.html();

                let content = $('<div class="panel panel-default">\n' +
                    '                    <div class="panel-heading" style="border-bottom: 1px #ccc solid">\n' +
                    '                        <a href="#search-block-element" data-toggle="collapse" class="panel-title collapsed" role="button"><i class="fas fa-search"></i> Search</a>\n' +
                    '                    </div>\n' +
                    '                    <div class="panel-body panel-collapse collapse fade" id="search-block-element" style="padding:10px 0">' + searchBarHtml +
                    '                    </div>\n' +
                    '                </div>');
                $('div.jix-search-bar').remove();
                // searchBar.remove();
                content.insertBefore($('div.main-container'));
            }
        }
    }

}(jQuery, Drupal));