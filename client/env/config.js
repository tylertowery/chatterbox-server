// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', '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');
});

// Put your campus prefix here
window.CAMPUS = 'rfp';
