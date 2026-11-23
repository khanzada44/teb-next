/* The inline scripts from the old footer.php, run once all libraries above are loaded. */
(function ($) {
  // forms send the page address along with the lead
  $('input[name="link"]').val(window.location.href);

  // shuffle the banner books on every visit
  var grd = $('#bannerbook');
  var imgs = grd.children();
  imgs.sort(function () { return Math.round(Math.random()) - 0.5; });
  grd.remove('section');
  for (var i = 0; i < imgs.length; i++) grd.append(imgs[i]);

  // lazy images
  var observer = lozad('.lozad', { rootMargin: '10px 0px', threshold: 0.1, enableAutoReload: true });
  observer.observe();

  // package buttons fill the hidden "package" field of the popup form
  $('.pkg_btn').click(function () { $('.pkg_nme').val($(this).attr('data-sku')); });

  // phone field with country flags and an input mask
  var $phone = $("input[name='phone']");
  if ($phone.length && $.fn.intlTelInput) {
    $phone.intlTelInput({
      geoIpLookup: function (cb) {
        $.get('https://ipinfo.io/', function () {}, 'jsonp').always(function (r) { cb(r && r.country ? r.country : ''); });
      },
      initialCountry: 'auto',
      separateDialCode: true
    });
    $phone.on('countrychange', function () {
      $(this).val('');
      var d = $(this).intlTelInput('getSelectedCountryData');
      var n = intlTelInputUtils.getExampleNumber(d.iso2, 0, 0);
      n = intlTelInputUtils.formatNumber(n, d.iso2, 2).replace('+' + d.dialCode + ' ', '');
      $(this).mask(n.replace(/[0-9+]/gi, '0'), { placeholder: n });
    });
    $phone.on('input', function () {
      if (/^1/.test(this.value)) this.value = this.value.replace(/^1/, '');
    });
  }
})(window.jQuery);
