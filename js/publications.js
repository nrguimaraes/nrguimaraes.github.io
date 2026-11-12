(function(){
  'use strict';
  var search=document.getElementById('pub-search');
  var year=document.getElementById('pub-year');
  var type=document.getElementById('pub-type');
  var count=document.getElementById('publication-count');
  var empty=document.getElementById('no-publications');
  var items=Array.from(document.querySelectorAll('.pub-item'));
  if(!search||!year||!type||!count) return;
  function filter(){
    var q=search.value.toLocaleLowerCase().trim(),y=year.value,t=type.value,n=0;
    items.forEach(function(item){
      var show=(y==='all'||item.dataset.year===y)&&(t==='all'||item.dataset.type===t)&&(!q||item.textContent.toLocaleLowerCase().includes(q));
      item.hidden=!show; if(show) n++;
    });
    count.textContent='Showing '+n+' of '+items.length+' publications';
    empty.hidden=n!==0;
  }
  search.addEventListener('input',filter);year.addEventListener('change',filter);type.addEventListener('change',filter);
})();
