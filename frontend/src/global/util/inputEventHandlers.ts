const createAndDeleteCodeBlock = (selection, event) => {
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
};

const createBlockquote = (selection) => {
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
};

const deleteBlockquote = (selection) => {
  const thisElement = selection.focusNode;
  thisElement.insertAdjacentHTML('afterend', '<p><br></p>');
  thisElement.remove();
};

const createList = (selection, event) => {
  const thisElement = selection.focusNode;
  const parent = thisElement.parentElement;
  if (parent.nodeName === 'P') {
    if (thisElement.data === '*' || thisElement.data === '-') {
      const ulElement = document.createElement('ul');
      ulElement.insertAdjacentHTML('beforeend', '<li><br></li>');
      parent.insertAdjacentElement('afterend', ulElement);
      parent.remove();
      event.preventDefault();
    } else if (thisElement.data === '1.') {
      const olElement = document.createElement('ol');
      olElement.insertAdjacentHTML('beforeend', '<li><br></li>');
      parent.insertAdjacentElement('afterend', olElement);
      parent.remove();
      event.preventDefault();
    }
  }
};

const mergeList = (selection) => {
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
};

const splitList = (selection) => {
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
    selection.collapse(pElement, 1);
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
};

const makeFont = (selection, symbol, font) => {
  const thisElement = selection.focusNode;
  if (
    (thisElement.data[thisElement.length - 1] ===
      thisElement.data[selection.focusOffset - 1] ||
      thisElement.data[selection.focusOffset] === ' ') &&
    thisElement.length !== 1 &&
    thisElement.data[selection.focusOffset - 2] !== ' ' &&
    thisElement.data[selection.focusOffset - 2] !== symbol
  ) {
    // 맨 뒤일 경우 or 뒤에 띄어쓰기가 있을 경우 or 뒤에 italic이 있을 경우
    // 앞으로 봐나가면 됨
    let currentCheckingNode = thisElement;
    let endIndex = selection.focusOffset - 2;
    while (currentCheckingNode != null) {
      const fontTag = document.createElement(font);
      if (currentCheckingNode.nodeName === '#text') {
        for (let i = endIndex; i >= 0; i--) {
          if (
            currentCheckingNode.data[i] === symbol &&
            (i === 0 ||
              currentCheckingNode.data[i - 1] === ' ' ||
              currentCheckingNode.data[i - 1] === symbol) &&
            currentCheckingNode.data[i + 1] !== ' '
          ) {
            const range = document.createRange();
            range.setStart(currentCheckingNode, i);
            range.setEnd(thisElement, selection.focusOffset);
            range.surroundContents(fontTag);

            fontTag.innerHTML = fontTag.innerHTML
              .replace(`<${font}>`, '')
              .replace(`</${font}>`, '');
            fontTag.innerHTML = fontTag.innerHTML.slice(1, -1);

            let nextSibling = fontTag.nextSibling;
            if (nextSibling.length === 0) {
              nextSibling = document.createTextNode(' ');
              fontTag.parentNode.insertBefore(nextSibling, null);
            }
            selection.collapse(nextSibling, 1);
            return;
          }
        }
      }
      currentCheckingNode = currentCheckingNode.previousSibling;
      if (currentCheckingNode != null) {
        endIndex = currentCheckingNode.length - 1;
      }
    }
  }

  if (
    (selection.focusOffset === 1 ||
      thisElement.data[selection.focusOffset - 2] === ' ') &&
    thisElement.data[selection.focusOffset] !== ' '
  ) {
    // 맨 앞일 경우 or 앞에 띄어쓰기가 있을 경우 or 앞에 italic이 있을 경우
    // 뒤로 봐나가면 됨
    let currentCheckingNode = thisElement;
    let startIndex = selection.focusOffset;
    while (currentCheckingNode != null) {
      const strong = document.createElement(font);
      if (
        currentCheckingNode.nodeName === '#text' &&
        currentCheckingNode.length !== 0
      ) {
        for (let i = startIndex; i < currentCheckingNode.length; i++) {
          if (
            currentCheckingNode.data[i] === symbol &&
            (i === currentCheckingNode.length - 1 ||
              currentCheckingNode.data[i + 1] === ' ' ||
              currentCheckingNode.data[i + 1] === symbol) &&
            currentCheckingNode.data[i - 1] !== ' '
          ) {
            const range = document.createRange();
            range.setStart(thisElement, selection.focusOffset - 1);
            range.setEnd(currentCheckingNode, i + 1);
            range.surroundContents(strong);

            strong.innerHTML = strong.innerHTML.slice(1, -1);
            strong.innerHTML = strong.innerHTML
              .replace(`<${font}>`, '')
              .replace(`</${font}>`, '');

            selection.collapse(
              strong.previousSibling,
              strong.previousSibling.length,
            );
            return;
          }
        }
      }
      currentCheckingNode = currentCheckingNode.nextSibling;
      if (currentCheckingNode != null) {
        startIndex = 0;
      }
    }
  }
};

const checkEmojiListOpenPossible = (setIsOpen, setInput) => {
  const selection = document.getSelection();
  const thisElement = selection.focusNode;

  let possible = false;
  const range = document.createRange();
  for (let i = selection.focusOffset - 3; i >= 0; i--) {
    if (thisElement.nodeValue[i] === ':') {
      range.setStart(thisElement, i + 1);
      possible = true;
      break;
    } else if (thisElement.nodeValue[i] === ' ') {
      possible = false;
      break;
    }
  }
  if (possible) {
    setIsOpen(true);
    range.setEnd(thisElement, selection.focusOffset);
    setInput(range.toString());
  }
};

const checkMentionListOpenPossible = (setIsOpen, setInput) => {
  const selection = document.getSelection();
  const thisElement = selection.focusNode;

  let possible = false;
  const range = document.createRange();
  for (let i = selection.focusOffset - 1; i >= 0; i--) {
    if (thisElement.nodeValue[i] === '@') {
      range.setStart(thisElement, i + 1);
      possible = true;
      break;
    } else if (thisElement.nodeValue[i] === ' ') {
      possible = false;
      break;
    }
  }
  if (possible) {
    setIsOpen(true);
    range.setEnd(thisElement, selection.focusOffset);
    setInput(range.toString());
  }
};

export const inputHandle = (
  e,
  input,
  setInput,
  value,
  setValue,
  isEmojiOpen,
  setIsEmojiOpen,
  isMentionOpen,
  setIsMentionOpen,
): void => {
  if (e.nativeEvent.data === '>') {
    const selection = document.getSelection();
    createBlockquote(selection);
  }

  if (e.nativeEvent.data === '*') {
    const selection = document.getSelection();
    makeFont(selection, '*', 'b');
  } else if (e.nativeEvent.data === '_') {
    const selection = document.getSelection();
    makeFont(selection, '_', 'em');
  } else if (e.nativeEvent.data === '~') {
    const selection = document.getSelection();
    makeFont(selection, '~', 's');
  } else if (e.nativeEvent.data === '`') {
    const selection = document.getSelection();
    makeFont(selection, '`', 'code');
  }

  if (e.nativeEvent.inputType === 'deleteContentBackward') {
    const selection = document.getSelection();
    if (selection.focusNode.nodeValue === ' ') {
      // 몇가지 시도를 해보기 위해 놔둠
      // selection.focusNode.nodeValue = ' ';
      // selection.focusNode.parentNode.appendChild(document.createElement('br'));
      // console.log(1);
      // if (document.queryCommandState('bold')) {
      //   document.execCommand('bold');
      // }
    }
  }

  checkMentionListOpenPossible(setIsMentionOpen, setInput);

  checkEmojiListOpenPossible(setIsEmojiOpen, setInput);
};

export const keydownHandle = (
  e,
  input,
  setInput,
  value,
  setValue,
  isEmojiOpen,
  setIsEmojiOpen,
  isMentionOpen,
  setIsMentionOpen,
): void => {
  if (e.code === 'Space') {
    const selection = document.getSelection();
    createList(selection, e);
  }

  if (e.code === 'Backspace') {
    const selection = document.getSelection();
    const currentNode = selection.focusNode;

    if (
      (currentNode.parentNode.nodeName === 'B' ||
        currentNode.parentNode.nodeName === 'EM' ||
        currentNode.parentNode.nodeName === 'S' ||
        currentNode.parentNode.nodeName === 'CODE') &&
      currentNode.nodeValue.length === 1
    ) {
      currentNode.parentNode.parentNode.insertBefore(
        document.createTextNode(' '),
        currentNode.parentNode,
      );
    }

    if (
      (<Element>currentNode).innerHTML === '<br>' &&
      currentNode.nodeName === 'P' &&
      currentNode.parentElement.firstElementChild === currentNode
    ) {
      e.preventDefault();
    }

    if (
      (<Element>currentNode).innerHTML === '<br>' &&
      currentNode.nodeName === 'P' &&
      currentNode.previousSibling != null &&
      currentNode.nextSibling != null &&
      currentNode.previousSibling.nodeName === currentNode.nextSibling.nodeName
    ) {
      mergeList(selection);
      e.preventDefault();
    } else if (
      (<Element>currentNode).innerHTML === '<br>' &&
      currentNode.nodeName === 'LI'
    ) {
      splitList(selection);
      e.preventDefault();
    } else if (
      (<Element>currentNode).innerHTML === '<br>' &&
      currentNode.nodeName === 'BLOCKQUOTE'
    ) {
      deleteBlockquote(selection);
      e.preventDefault();
    }
  }

  if (e.code === 'Backquote') {
    const selection = document.getSelection();
    const currentNode = selection.focusNode;
    if (
      currentNode.nodeName === '#text' &&
      currentNode.nodeValue.endsWith('``')
    ) {
      createAndDeleteCodeBlock(selection, e);
    }
  }
};

export const makeEmoji = (value) => {
  const selection = document.getSelection();
  const range = document.createRange();
  range.setEnd(selection.focusNode, selection.focusOffset);

  for (let i = selection.focusOffset - 1; i >= 0; i--) {
    if (selection.focusNode.nodeValue[i] === ':') {
      range.setStart(selection.focusNode, i);
      break;
    }
  }

  const img = document.createElement('img');
  img.alt = value.emoji;
  img.className = 'emoji';

  range.deleteContents();
  range.insertNode(img);
  selection.collapse(img.nextSibling, 0);
};

export const makeMention = (value) => {
  const selection = document.getSelection();
  const range = document.createRange();
  range.setEnd(selection.focusNode, selection.focusOffset);

  for (let i = selection.focusOffset - 1; i >= 0; i--) {
    if (selection.focusNode.nodeValue[i] === '@') {
      range.setStart(selection.focusNode, i);
      break;
    }
  }

  const span = document.createElement('span');
  span.className = 'c-member_slug--link';
  span.innerText = `@${value.name}`;

  range.deleteContents();
  range.insertNode(span);

  let nextSibling = span.nextSibling;
  if (nextSibling === null || nextSibling.length === 0) {
    nextSibling = document.createTextNode(' ');
    span.parentNode.insertBefore(nextSibling, null);
  }
  selection.collapse(nextSibling, 1);
};
