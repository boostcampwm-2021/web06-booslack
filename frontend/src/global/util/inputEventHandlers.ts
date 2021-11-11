function createAndDeleteCodeBlock(selection, event) {
  const thisElement = selection.focusNode;
  const parent = thisElement.parentElement;
  if (parent.classList.contains('ql-code-block')) {
    parent.innerHTML = parent.innerHTML.substr(0, parent.innerHTML.length - 2);

    const pElement = document.createElement('p');
    pElement.innerHTML = '<br>';
    parent.insertAdjacentElement('afterend', pElement);
    selection.collapse(pElement, 0);
  } else if (thisElement.data === '``') {
    parent.insertAdjacentHTML(
      'afterend',
      '<div class="ql-code-block"><br></div>',
    );
    parent.remove();
  } else {
    parent.insertAdjacentHTML(
      'afterend',
      '<div class="ql-code-block"><br></div>',
    );
    parent.innerHTML = parent.innerHTML.substr(0, parent.innerHTML.length - 2);
  }
  event.preventDefault();
}

function createBlockquote(selection) {
  const thisElement = selection.focusNode;
  const parent = thisElement.parentElement;
  if (parent.nodeName === 'P' && thisElement.data.startsWith('>')) {
    const blockquoteElement = document.createElement('blockquote');
    if (thisElement.data === '>') {
      blockquoteElement.innerHTML = '<br>';
    } else {
      blockquoteElement.innerText = thisElement.data.substring(1);
    }
    parent.insertAdjacentElement('afterend', blockquoteElement);
    parent.remove();
  }
}

function deleteBlockquote(selection) {
  selection.focusNode.insertAdjacentHTML('afterend', '<p><br></p>');
  selection.focusNode.remove();
}

function createList(selection, event) {
  const thisElement = selection.focusNode;
  if (thisElement.parentElement.nodeName === 'P') {
    if (thisElement.data === '*' || thisElement.data === '-') {
      const ulElement = document.createElement('ul');
      ulElement.insertAdjacentHTML('beforeend', '<li><br></li>');
      thisElement.parentElement.insertAdjacentElement('afterend', ulElement);
      thisElement.parentElement.remove();
      event.preventDefault();
    } else if (thisElement.data === '1.') {
      const olElement = document.createElement('ol');
      olElement.insertAdjacentHTML('beforeend', '<li><br></li>');
      thisElement.parentElement.insertAdjacentElement('afterend', olElement);
      thisElement.parentElement.remove();
      event.preventDefault();
    }
  }
}

function mergeList(selection) {
  const thisElement = selection.focusNode;
  const parent = thisElement.parentElement;
  let index = 0;
  for (let i = 0; i < parent.children.length; i++) {
    if (parent.children[i] === thisElement) {
      index = i;
    }
  }
  if (index !== 0 || index !== parent.children.length - 1) {
    if (
      parent.children[index - 1].nodeName ===
        parent.children[index + 1].nodeName &&
      (parent.children[index + 1].nodeName === 'OL' ||
        parent.children[index + 1].nodeName === 'UL')
    ) {
      const collapsePositionElement = parent.children[index - 1].lastChild;
      const moveList = [];
      for (let i = 0; i < parent.children[index + 1].children.length; i++) {
        moveList.push(parent.children[index + 1].children[i]);
      }
      for (let i = 0; i < moveList.length; i++) {
        parent.children[index - 1].appendChild(moveList[i]);
      }
      parent.removeChild(parent.children[index + 1]);
      parent.removeChild(parent.children[index]);
      selection.collapse(collapsePositionElement, 1);
    }
  }
}

function splitList(selection) {
  const thisElement = selection.focusNode;
  const parent = thisElement.parentElement;
  let index = 0;
  for (let i = 0; i < parent.children.length; i++) {
    if (parent.children[i] === thisElement) {
      index = i;
    }
  }
  if (index === parent.children.length - 1) {
    const pElement = document.createElement('p');
    pElement.innerHTML = '<br>';
    parent.insertAdjacentElement('afterend', pElement);
    if (index === 0) {
      parent.removeChild(thisElement);
      parent.remove();
    } else {
      parent.removeChild(thisElement);
    }
    selection.collapse(pElement, 0);
  } else {
    const list = [];
    const listParent =
      parent.nodeName === 'OL'
        ? document.createElement('ol')
        : document.createElement('ul');
    for (let i = index + 1; i < parent.children.length; i++) {
      list.push(parent.children[i]);
    }
    for (let i = 0; i < list.length; i++) {
      listParent.appendChild(list[i]);
    }
    parent.insertAdjacentElement('afterend', listParent);
    const pElement = document.createElement('p');
    pElement.innerHTML = '<br>';
    parent.insertAdjacentElement('afterend', pElement);
    parent.removeChild(thisElement);
    selection.collapse(pElement, 0);
  }
}

export function inputHandle(e): void {
  if (e.nativeEvent.data === '>') {
    const selection = document.getSelection();
    createBlockquote(selection);
  }
}

export function keydownHandle(e): void {
  if (e.code === 'Enter') {
    document.execCommand('defaultParagraphSeparator', false, 'p');
  }

  if (e.code === 'Space') {
    const selection = document.getSelection();
    createList(selection, e);
  }

  if (e.code === 'Backspace') {
    const selection = document.getSelection();
    const currentNode = <HTMLElement>selection.focusNode;
    if (
      currentNode.innerHTML === '<br>' &&
      currentNode.nodeName === 'P' &&
      currentNode.parentElement.firstElementChild === currentNode
    ) {
      e.preventDefault();
    }

    if (
      currentNode.innerHTML === '<br>' &&
      currentNode.nodeName === 'P' &&
      currentNode.previousSibling != null &&
      currentNode.nextSibling != null &&
      currentNode.previousSibling.nodeName === currentNode.nextSibling.nodeName
    ) {
      mergeList(selection);
      e.preventDefault();
    } else if (
      currentNode.innerHTML === '<br>' &&
      currentNode.nodeName === 'LI'
    ) {
      splitList(selection);
      e.preventDefault();
    } else if (
      currentNode.innerHTML === '<br>' &&
      currentNode.nodeName === 'BLOCKQUOTE'
    ) {
      deleteBlockquote(selection);
      e.preventDefault();
    }
  }

  if (e.code === 'Backquote') {
    const selection = document.getSelection();
    const currentNode = <HTMLElement>selection.focusNode;
    if (currentNode.nodeName === '#text' && currentNode.data.endsWith('``')) {
      createAndDeleteCodeBlock(selection, e);
    }
  }
}
