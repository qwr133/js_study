
//문서의 객체들 = DOM

// <div id='box'>
//   <input id='abc' class='zzz xxx vvv' type='text'>
// </div

let box, input;

box = {
    tagName: 'div',
    attributes: {
        id: 'box'
    },
    children: [input],
    // parentNode: document.body
};

input = {
    tagName: 'input',
    attributes: {
        id: 'abc',
        classList: ['zzz', 'xxx', 'vvv'],
        type: 'text'
    },
    parentNode: box
};


console.log(input.parentNode);