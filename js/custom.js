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
        }
    };

}(jQuery, Drupal));