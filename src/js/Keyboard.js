class Keyboard {
  constructor() {
    this.field = null;
    this.fieldArea = null;
    this.fieldText = '';
    this.cursorPos = 0;
    this.infoBlock = null;
    this.keyboard = null;
    this.ctrlKey = false;
    this.shiftKey = false;
    this.altKey = false;
    this.capsLockKey = false;
    this.keyboardLayout = null;
    this.keys = [
      [
        {
          key: {
            en: '`',
            ru: 'ё',
          },
          shiftKey: {
            en: '~',
            ru: 'Ё',
          },
          code: 'Backquote',
        },
        {
          key: '1',
          shiftKey: {
            en: '!',
            ru: '!',
          },
          code: 'Digit1',
        },
        {
          key: '2',
          shiftKey: {
            en: '@',
            ru: '"',
          },
          code: 'Digit2',
        },
        {
          key: '3',
          shiftKey: {
            en: '#',
            ru: '№',
          },
          code: 'Digit3',
        },
        {
          key: '4',
          shiftKey: {
            en: '$',
            ru: ';',
          },
          code: 'Digit4',
        },
        {
          key: '5',
          shiftKey: {
            en: '%',
            ru: '%',
          },
          code: 'Digit5',
        },
        {
          key: '6',
          shiftKey: {
            en: '^',
            ru: ':',
          },
          code: 'Digit6',
        },
        {
          key: '7',
          shiftKey: {
            en: '&',
            ru: '?',
          },
          code: 'Digit7',
        },
        {
          key: '8',
          shiftKey: {
            en: '*',
            ru: '*',
          },
          code: 'Digit8',
        },
        {
          key: '9',
          shiftKey: {
            en: '(',
            ru: '(',
          },
          code: 'Digit9',
        },
        {
          key: '0',

          shiftKey: {
            en: ')',
            ru: ')',
          },
          code: 'Digit0',
        },
        {
          key: '-',
          shiftKey: {
            en: '_',
            ru: '_',
          },
          code: 'Minus',
        },
        {
          key: '=',
          shiftKey: {
            en: '+',
            ru: '+',
          },
          code: 'Equal',
        },
        {
          key: 'Backspace',
          code: 'Backspace',
        },
      ],
      [
        {
          key: 'Tab',
          code: 'Tab',
        },
        {
          key: {
            en: 'q',
            ru: 'й',
          },
          shiftKey: {
            en: 'Q',
            ru: 'Й',
          },
          code: 'KeyQ',
        },
        {
          key: {
            en: 'w',
            ru: 'ц',
          },
          shiftKey: {
            en: 'W',
            ru: 'Ц',
          },
          code: 'KeyW',
        },
        {
          key: {
            en: 'e',
            ru: 'у',
          },
          shiftKey: {
            en: 'E',
            ru: 'У',
          },
          code: 'KeyE',
        },
        {
          key: {
            en: 'r',
            ru: 'к',
          },
          shiftKey: {
            en: 'R',
            ru: 'К',
          },
          code: 'KeyR',
        },
        {
          key: {
            en: 't',
            ru: 'е',
          },
          shiftKey: {
            en: 'T',
            ru: 'Е',
          },
          code: 'KeyT',
        },
        {
          key: {
            en: 'y',
            ru: 'н',
          },
          shiftKey: {
            en: 'Y',
            ru: 'Н',
          },
          code: 'KeyY',
        },
        {
          key: {
            en: 'u',
            ru: 'г',
          },
          shiftKey: {
            en: 'U',
            ru: 'Г',
          },
          code: 'KeyU',
        },
        {
          key: {
            en: 'i',
            ru: 'ш',
          },
          shiftKey: {
            en: 'I',
            ru: 'Ш',
          },
          code: 'KeyI',
        },
        {
          key: {
            en: 'o',
            ru: 'щ',
          },
          shiftKey: {
            en: 'O',
            ru: 'Щ',
          },
          code: 'KeyO',
        },
        {
          key: {
            en: 'p',
            ru: 'з',
          },
          shiftKey: {
            en: 'P',
            ru: 'З',
          },
          code: 'KeyP',
        },
        {
          key: {
            en: '[',
            ru: 'х',
          },
          shiftKey: {
            en: '{',
            ru: 'Х',
          },
          code: 'BracketLeft',
        },
        {
          key: {
            en: ']',
            ru: 'ъ',
          },
          shiftKey: {
            en: '}',
            ru: 'Ъ',
          },
          code: 'BracketRight',
        },
        {
          key: '\\',
          shiftKey: {
            en: '|',
            ru: '/',
          },
          code: 'Backslash',
        },
        {
          key: 'Del',
          code: 'Delete',
        },
      ],
      [
        {
          key: 'Caps lock',
          code: 'CapsLock',
        },
        {
          key: {
            en: 'a',
            ru: 'ф',
          },
          shiftKey: {
            en: 'A',
            ru: 'Ф',
          },
          code: 'KeyA',
        },
        {
          key: {
            en: 's',
            ru: 'ы',
          },
          shiftKey: {
            en: 'S',
            ru: 'Ы',
          },
          code: 'KeyS',
        },
        {
          key: {
            en: 'd',
            ru: 'в',
          },
          shiftKey: {
            en: 'D',
            ru: 'В',
          },
          code: 'KeyD',
        },
        {
          key: {
            en: 'f',
            ru: 'а',
          },
          shiftKey: {
            en: 'F',
            ru: 'А',
          },
          code: 'KeyF',
        },
        {
          key: {
            en: 'g',
            ru: 'п',
          },
          shiftKey: {
            en: 'G',
            ru: 'П',
          },
          code: 'KeyG',
        },
        {
          key: {
            en: 'h',
            ru: 'р',
          },
          shiftKey: {
            en: 'H',
            ru: 'Р',
          },
          code: 'KeyH',
        },
        {
          key: {
            en: 'j',
            ru: 'о',
          },
          shiftKey: {
            en: 'J',
            ru: 'О',
          },
          code: 'KeyJ',
        },
        {
          key: {
            en: 'k',
            ru: 'л',
          },
          shiftKey: {
            en: 'K',
            ru: 'Л',
          },
          code: 'KeyK',
        },
        {
          key: {
            en: 'l',
            ru: 'д',
          },
          shiftKey: {
            en: 'L',
            ru: 'Д',
          },
          code: 'KeyL',
        },
        {
          key: {
            en: ';',
            ru: 'ж',
          },
          shiftKey: {
            en: ':',
            ru: 'Ж',
          },
          code: 'Semicolon',
        },
        {
          key: {
            en: '\'',
            ru: 'э',
          },
          shiftKey: {
            en: '"',
            ru: 'Є',
          },
          code: 'Quote',
        },
        {
          key: 'Enter',
          code: 'Enter',
        },
      ],
      [
        {
          key: 'Shift',
          code: 'ShiftLeft',
        },
        {
          key: {
            en: 'z',
            ru: 'я',
          },
          shiftKey: {
            en: 'Z',
            ru: 'Я',
          },
          code: 'KeyZ',
        },
        {
          key: {
            en: 'x',
            ru: 'ч',
          },
          shiftKey: {
            en: 'X',
            ru: 'Ч',
          },
          code: 'KeyX',
        },
        {
          key: {
            en: 'c',
            ru: 'с',
          },
          shiftKey: {
            en: 'C',
            ru: 'С',
          },
          code: 'KeyC',
        },
        {
          key: {
            en: 'v',
            ru: 'м',
          },
          shiftKey: {
            en: 'V',
            ru: 'М',
          },
          code: 'KeyV',
        },
        {
          key: {
            en: 'b',
            ru: 'и',
          },
          shiftKey: {
            en: 'B',
            ru: 'И',
          },
          code: 'KeyB',
        },
        {
          key: {
            en: 'n',
            ru: 'т',
          },
          shiftKey: {
            en: 'N',
            ru: 'Т',
          },
          code: 'KeyN',
        },
        {
          key: {
            en: 'm',
            ru: 'ь',
          },
          shiftKey: {
            en: 'M',
            ru: 'Ь',
          },
          code: 'KeyM',
        },
        {
          key: {
            en: ',',
            ru: 'б',
          },
          shiftKey: {
            en: '<',
            ru: 'Б',
          },
          code: 'Comma',
        },
        {
          key: {
            en: '.',
            ru: 'ю',
          },
          shiftKey: {
            en: '>',
            ru: 'Ю',
          },
          code: 'Period',
        },
        {
          key: {
            en: '/',
            ru: '.',
          },
          shiftKey: {
            en: '?',
            ru: ',',
          },
          code: 'Slash',
        },
        {
          key: '▲',
          code: 'ArrowUp',
        },
        {
          key: 'Shift',
          code: 'ShiftRight',
        },
      ],
      [
        {
          key: 'Ctrl',
          code: 'ControlLeft',
        },
        {
          key: 'Win',
          code: 'MetaLeft',
        },
        {
          key: 'Alt',
          code: 'AltLeft',
        },
        {
          key: '',
          code: 'Space',
        },
        {
          key: 'Alt',
          code: 'AltRight',
        },
        {
          key: '◄',
          code: 'ArrowLeft',
        },
        {
          key: '▼',
          code: 'ArrowDown',
        },
        {
          key: '►',
          code: 'ArrowRight',
        },
        {
          key: 'Ctrl',
          code: 'ControlRight',
        },
      ],
    ];
  }

  createKeyboard() {
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');

    this.keys.forEach((x) => {
      const keyRow = document.createElement('div');
      keyRow.classList.add('keyboard__row');

      x.forEach((keyEl) => {
        const key = document.createElement('div');
        key.classList.add('key');
        key.dataset.code = keyEl.code;
        key.innerText = typeof keyEl.key === 'string' ? keyEl.key : keyEl.key[this.keyboardLayout];

        if (keyEl.code === 'Space') {
          key.classList.add('space');
        }

        if (keyEl.code.includes('Shift')) {
          key.classList.add('shift');
        }

        keyRow.append(key);
      });

      this.keyboard.append(keyRow);
    });
  }

  createTextField() {
    this.field = document.createElement('div');
    this.field.classList.add('field');

    this.fieldArea = document.createElement('textarea');
    this.fieldArea.classList.add('field__item');

    this.field.append(this.fieldArea);
  }

  createInfoBlock() {
    this.infoBlock = document.createElement('div');
    const textOS = document.createElement('p');
    textOS.innerText = 'Сделано в ОС Windows';

    const textLayout = document.createElement('p');
    textLayout.innerText = 'Смена языка ввода - \'Left Alt\' + \'Shift\'';

    this.infoBlock.append(textOS, textLayout);
  }

  generateDocument() {
    this.createTextField();
    this.createKeyboard();
    this.createInfoBlock();

    const container = document.createElement('div');
    container.classList.add('container');

    container.append(this.field, this.keyboard, this.infoBlock);

    document.body.append(container);
  }

  addDocumentKeyHandler() {
    this.fieldArea.addEventListener('click', () => {
      this.updateCursorPosition(this.fieldArea.selectionStart);
    });
    this.fieldArea.addEventListener('keydown', (e) => {
      e.preventDefault();
      this.keyDownListener(e);
    });

    document.addEventListener('keydown', (e) => {
      if (document.activeElement !== this.fieldArea) {
        this.keyDownListener(e);
      }
    });
    document.addEventListener('keyup', (e) => {
      const key = document.querySelector(`[data-code="${e.code}"]`);
      if (this.capsLockKey && e.code === 'CapsLock') {
        return;
      }
      if (key) {
        key.classList.remove('key_active');
      }
      if (e.code.includes('Shift')) {
        this.shiftPress(false);
      }
      if (e.code.includes('Control')) {
        this.ctrlPress(false);
      }
      if (e.code.includes('Alt')) {
        this.altPress(false);
      }
    });
  }

  addDocumentMouseHandler() {
    this.keyboard.addEventListener('mousedown', (e) => {
      e.preventDefault();
      if (e.target.classList.contains('key')) {
        if (e.target.classList.contains('key_active')) {
          e.preventDefault();
          return;
        }
        e.target.classList.add('key_active');
      }
    });
    this.keyboard.addEventListener('mouseup', (e) => {
      e.preventDefault();
      if (e.target.classList.contains('key')) {
        const { code } = e.target.dataset;
        const keyEl = this.getKeyEl(code);

        if (keyEl.code === 'CapsLock') {
          this.capsLockPress(!this.capsLockKey);
        }
        if (keyEl.code.includes('Arrow')) {
          const keyEvent = new KeyboardEvent('keydown', {
            code: keyEl.code,
          });
          this.field.dispatchEvent(keyEvent);
        }
        if (!(this.ctrlKey || this.altKey)) {
          this.updateFieldText(keyEl);
        }
        if (this.capsLockKey && keyEl.code === 'CapsLock') {
          return;
        }
        e.target.classList.remove('key_active');
      }
    });
    this.keyboard.addEventListener('mouseout', (e) => {
      if (e.target.classList.contains('key')) {
        const { code } = e.target.dataset;
        if (this.capsLockKey && code === 'CapsLock') {
          return;
        }
        if (e.target.classList.contains('key_active')) {
          e.target.classList.remove('key_active');
        }
      }
    });
  }

  keyDownListener(e) {
    const key = document.querySelector(`[data-code="${e.code}"]`);
    if (key === null) {
      return;
    }
    const keyRow = this.keys.find((arr) => arr.find((el) => el.code === e.code));
    const keyEl = keyRow.find((el) => el.code === e.code);

    if (!keyRow) {
      e.preventDefault();
      return;
    }
    if (e.code === 'Tab' || e.code.includes('Alt')) {
      e.preventDefault();
    }

    if (e.code.includes('Shift')) {
      this.shiftPress(true);
    }
    if (e.code.includes('Control')) {
      this.ctrlPress(true);
    }
    if (e.code.includes('Alt')) {
      this.altPress(true);
    }

    if (e.code === 'CapsLock') {
      this.capsLockPress(!this.capsLockKey);
    }

    key.classList.add('key_active');

    if (!(this.ctrlKey || this.altKey)) {
      this.updateFieldText(keyEl);
    }
  }

  updateFieldText(key) {
    let newText = '';
    switch (key.code) {
      case 'Backspace': {
        if (this.cursorPos === 0) {
          break;
        }
        this.fieldText = this.fieldText.slice(0, this.cursorPos - 1)
          + this.fieldText.slice(this.cursorPos);
        this.updateCursorPosition(this.cursorPos - 1);
        break;
      }
      case 'Tab':
        newText = '\t';
        break;
      case 'Space':
        newText = ' ';
        break;
      case 'Enter':
        newText = '\n';
        break;
      case 'Delete': {
        this.fieldText = this.fieldText.slice(0, this.cursorPos)
          + this.fieldText.slice(this.cursorPos + 1);
        break;
      }
      case (key.code.match(/Arrow/) || {}).input:
        this.arrowPress(key.code);
        return;
      case (key.code.match(/Meta|CapsLock|Alt|Control|Shift/) || {}).input:
        return;
      default: {
        if (this.shiftKey && key.shiftKey && !this.altKey) {
          newText = key.shiftKey[this.keyboardLayout];
        } else if (this.capsLockKey && key.shiftKey) {
          newText = (typeof key.key === 'string' ? key.key : key.key[this.keyboardLayout]).toUpperCase();
        } else {
          newText = typeof key.key === 'string' ? key.key : key.key[this.keyboardLayout];
        }
        break;
      }
    }

    this.fieldText = this.fieldText.slice(0, this.cursorPos)
      + newText
      + this.fieldText.slice(this.cursorPos);

    this.fieldArea.value = this.fieldText;
    this.updateCursorPosition(this.cursorPos + newText.length);
  }

  updateCursorPosition(n) {
    if (n < 0 || n > this.fieldArea.value.length) {
      return;
    }
    this.cursorPos = n;
    this.setCursorPosition(this.cursorPos);
  }

  arrowPress(code) {
    if (code === 'ArrowLeft') {
      this.updateCursorPosition(this.cursorPos - 1);
    } else if (code === 'ArrowRight') {
      this.updateCursorPosition(this.cursorPos + 1);
    } else if (code === 'ArrowUp') {
      this.setNewPositionByArrowPress('up');
    } else if (code === 'ArrowDown') {
      this.setNewPositionByArrowPress('down');
    }
  }

  setNewPositionByArrowPress(arrow) {
    const rows = this.fieldArea.value.split('\n');
    let currentPos = this.cursorPos;
    for (let i = 0; i < rows.length; i += 1) {
      const row = rows[i];
      if (row.length < currentPos) {
        currentPos -= row.length + 1;
      } else if (row.length >= currentPos) {
        if (i === 0 && arrow === 'up') {
          this.updateCursorPosition(0);
        } else if (i === rows.length - 1 && arrow === 'down') {
          this.updateCursorPosition(this.fieldArea.value.length);
        } else if (arrow === 'up') {
          const prevRow = rows[i - 1];
          if (currentPos + 1 > prevRow.length) {
            const newPos = this.cursorPos - currentPos - 1;
            this.updateCursorPosition(newPos);
          } else {
            const newPos = this.cursorPos - prevRow.length - 1;
            this.updateCursorPosition(newPos);
          }
        } else if (arrow === 'down') {
          const nextRow = rows[i + 1];
          if (currentPos > nextRow.length) {
            const newPos = this.cursorPos - currentPos + row.length + nextRow.length + 1;
            this.updateCursorPosition(newPos);
          } else {
            const newPos = this.cursorPos + row.length + 1;
            this.updateCursorPosition(newPos);
          }
        }
        break;
      }
    }
  }

  setCursorPosition(position) {
    this.fieldArea.setSelectionRange(position, position);
  }

  getKeyEl(code) {
    const keyRow = this.keys.find((arr) => arr.find((el) => el.code === code));
    return keyRow.find((el) => el.code === code);
  }

  getKeyboardLayout() {
    const lsKeyboardLayout = localStorage.getItem('keyboardLayout');
    if (lsKeyboardLayout) {
      this.keyboardLayout = lsKeyboardLayout;
    } else {
      this.keyboardLayout = 'ru';
    }
  }

  setKeyboardLayout() {
    this.keyboardLayout = this.keyboardLayout === 'ru' ? 'en' : 'ru';
    localStorage.setItem('keyboardLayout', this.keyboardLayout);
  }

  shiftPress(isActive) {
    this.shiftKey = isActive;
    if (isActive && this.altKey) {
      this.setKeyboardLayout();
    }
    this.reRender();
  }

  capsLockPress(isActive) {
    this.capsLockKey = isActive;
    this.reRender();
  }

  altPress(isActive) {
    this.altKey = isActive;
  }

  ctrlPress(isActive) {
    this.ctrlKey = isActive;
  }

  reRender() {
    this.keys.forEach((row) => {
      row.forEach((keyEl) => {
        const documentKey = this.keyboard.querySelector(`[data-code="${keyEl.code}"]`);
        if (this.shiftKey && keyEl.shiftKey && !this.altKey) {
          documentKey.innerText = keyEl.shiftKey[this.keyboardLayout];
        } else if (this.capsLockKey && keyEl.shiftKey) {
          documentKey.innerText = documentKey.innerText.toUpperCase();
        } else if (typeof keyEl.key !== 'string') {
          documentKey.innerText = keyEl.key[this.keyboardLayout];
        } else if (typeof keyEl.key === 'string') {
          documentKey.innerText = keyEl.key;
        }
      });
    });
  }

  init() {
    this.getKeyboardLayout();
    this.generateDocument();
    this.addDocumentKeyHandler();
    this.addDocumentMouseHandler();
  }
}

export default Keyboard;
