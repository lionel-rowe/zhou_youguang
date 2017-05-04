$(document).ready(function() {

  var currentEl, currentTooltip, currentGloss, splitUp;
  
  var el = '.zh';
  
  /*
  addGloss() works on <span>s with class `zh`. The <span> gloss must be set as the custom attributr `data-gloss` and must be in a specific format, namely "{Chinese characters} {Pinyin with tonemarks}".

  For example:
    <span class="zh" data-gloss="周有光 Zhōu Yǒuguāng" />
  
  The first word in the gloss is treated as the Chinese character version, and words at indexes 2 and above are treated as the Pinyin version.
    
  */

  function addGloss() {
    
    for (i = 0; i < $(el).length; i++) {
      currentEl = $(el+':eq('+i+')');
      currentTooltip = function() {
        currentGloss = currentEl.attr('data-gloss');
        splitUp = currentGloss.split(/\s+/);
        
        return splitUp[0] + ' ' + splitUp.slice(1).join(' ');
      }
      
      currentEl.append('<span class="tooltip">' + currentTooltip() + '</span>');
    }
  }

  addGloss();

});