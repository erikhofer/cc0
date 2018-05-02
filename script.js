var providers = [
  {
    id: 'pixabay',
    url: 'https://pixabay.com/photos/?q='
  },
  {
    id: 'pexels',
    url: 'https://www.pexels.com/search/'
  },
  {
    id: 'stocksnap',
    url: 'https://stocksnap.io/search/'
  }
];

$(function() {
  $('#submit').click(function(e) {
    e.preventDefault();
    search();
  });
  resetFocus();
});

function search() {
  var query = $('#query').val();
  $.each(providers, function(index, provider) {
    var iframe = $('#' + provider.id + ' iframe');
    iframe.attr('src', provider.url + query);
    resetFocus();
  });
}

function resetFocus() {
  setInterval(function() {
    $('#query').focus();
  }, 1000);
}