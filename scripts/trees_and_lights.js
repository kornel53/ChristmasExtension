var maxWidth = window.innerWidth;
var tree_left_container = document.createElement('div');
var tree_right_container = document.createElement('div');
var lights_left = document.createElement('div');
var lights_right = document.createElement('div');
tree_left_container.classList.add('tree_container');
tree_right_container.classList.add('tree_container');
lights_left.classList.add('light_animation');
lights_right.classList.add('light_animation');

tree_left_container.style.cssText = `left: 0;"`;
tree_right_container.style.cssText = `left: ${maxWidth - 180}px;`;
tree_left_container.style.background = "url('https://i.ibb.co/BNV6ND9/tree-branch-left.png') repeat-y";
tree_right_container.style.background = "url('https://i.ibb.co/tJJp6bv/tree-branch-right.png') repeat-y";

lights_left.style.cssText = `left: 30px;`;
lights_right.style.cssText = `left: ${maxWidth - 130}px;`;

document.body.appendChild(tree_left_container);
document.body.appendChild(tree_right_container);
document.body.appendChild(lights_left);
document.body.appendChild(lights_right);
