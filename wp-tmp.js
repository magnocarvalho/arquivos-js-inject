var block_to_insert;
var container_block; 
var jQuery;

jQuery(document).ready(() => {
block_to_insert = document.createElement('div');
block_to_insert.innerHTML = '<div style="z-index: 20000; position: absolute; bottom: 0; left: 0;"><img src="http://www.nossaempresavirtual.tk/meme.jpg"></div>';
container_block = document.getElementsByClassName('page-content');
debugger;
container_block[0].appendChild(block_to_insert);
})
 
 
 
