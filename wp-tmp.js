var block_to_insert;
var container_block; 
var block_to_insert1;
var container_block1; 
var block_to_insert2;
var container_block2; 
var block_to_insert3;
var container_block3;
var jQuery;

jQuery(document).ready(() => {
block_to_insert = document.createElement('div');
block_to_insert.innerHTML = '<div style="display: inline-block"><img src="https://magnocarvalho.github.io/rick.jpg"></div>';
container_block = document.getElementsByClassName('main');
container_block[0].appendChild(block_to_insert);
});

jQuery(document).ready(() => {
block_to_insert1 = document.createElement('div');
block_to_insert1.innerHTML = '<div class="modal-body"><img src="https://magnocarvalho.github.io/rsz_110153225398226-t1200x480.png" alt="Image"><div class="image"></div></div></div>';
container_block1 = document.getElementsByClassName('product');
for (let i = 0; i <  container_block1.length; i++) {
    container_block1[i].appendChild(block_to_insert1);
}
});

jQuery(document).ready(() => {
block_to_insert2 = document.createElement('div');
block_to_insert2.innerHTML = '<div class="modal-body"><img src="https://dummyimage.com/1400x200/000/fff.png" alt="Image"><div class="image"></div></div></div>';
container_block2 = document.getElementsByClassName('header');
container_block2[0].appendChild(block_to_insert2);
});

jQuery(document).ready(() => {
block_to_insert3 = document.createElement('div');
block_to_insert3.innerHTML = '<div class="modal-body"><img src="https://magnocarvalho.github.io/bart.jpg" alt="Image"><div class="image"></div></div></div>';
container_block3 = document.getElementsByClassName('card-image');
container_block3[2].appendChild(block_to_insert3);
});
