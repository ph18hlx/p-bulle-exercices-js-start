//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this._isOpen = false;
    this._balance = 0;

    
    this._checkOpen = this._checkOpen.bind(this);
  }

  open() {
    if (this._isOpen) throw new ValueError(); 
    this._isOpen = true;
    this._balance = 0;
  }

  close() {
    this._checkOpen();
    this._isOpen = false;
  }

  deposit(amount) {
    this._checkOpen();
    if (amount <= 0) throw new ValueError();
    this._balance += amount;
  }

  withdraw(amount) {
    this._checkOpen();
    if (amount <= 0 || amount > this._balance) throw new ValueError();
    this._balance -= amount;
  }

  get balance() {
    this._checkOpen();
    return this._balance;
  }

  _checkOpen() {
    if (!this._isOpen) throw new ValueError();
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
