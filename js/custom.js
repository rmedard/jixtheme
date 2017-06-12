/**
 * Created by medard on 22/03/2017.
 */
(function ($) {

    //$('select').selectBoxIt();

    $('form#views-exposed-form-adverts-page-search-ads > div > div.form-item-combine').addClass('col-lg-6 col-md-6');
    $('form#views-exposed-form-adverts-page-search-ads > div > div.form-item-combine > div.input-group').css('width', '100%');
    $('form#views-exposed-form-adverts-page-search-ads > div > div.form-item-field-employer-sector-value').addClass('col-lg-4 col-md-4');
    $('form#views-exposed-form-adverts-page-search-ads > div > div.form-actions').addClass('col-lg-2 col-md-2');

    $('#edit-submit-adverts').removeClass('btn-xs');

    $('div.field--name-field-application-form > a').addClass('btn btn-success btn-xs btn-block');

    $('div.view-jobs-view > div.view-content > div.media > div:first-child').addClass('job-teaser-left col-md-2 col-sm-2 col-xs-2');
    $('div.view-jobs-view > div.view-content > div.media > div:last-child').addClass('job-teaser-right col-md-10 col-sm-10 col-xs-10');

}(jQuery));