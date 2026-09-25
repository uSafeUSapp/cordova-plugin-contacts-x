var exec = require('cordova/exec');

var contactsX = {
  ErrorCodes: {
    UnsupportedAction: 1,
    WrongJsonObject: 2,
    PermissionDenied: 3,
    NoContactFound: 5,
    SaveOrModify: 6,
    SecondDelete: 7,
    MultipleMatches: 8,
    NoMatches: 9,
    MatchFailed: 10,
    OtherMatchError: 11,
    NoNumberFound: 12,
    UnknownError: 13
  },

  find: function (success, error, options) {
    exec(success, error, 'ContactsX', 'find', [options]);
  },

  pick: function (success, error, nameOnly) {
    exec(success, error, 'ContactsX', 'pick', [Boolean(nameOnly)]);
  },

  save: function (contact, success, error) {
    exec(success, error, 'ContactsX', 'save', [contact]);
  },

  delete: function (id, phone, success, error) {
    exec(success, error, 'ContactsX', 'delete', [id,phone]);
  },

  deleteRawContact: function (rawId, success, error) {
    exec(success, error, 'ContactsX', 'deleteRawContact', [rawId]);
  },

  hasPermission: function (success, error) {
    exec(success, error, 'ContactsX', 'hasPermission', []);
  },

  requestPermission: function (success, error) {
    exec(success, error, 'ContactsX', 'requestPermission', [false]);
  },

  requestWritePermission: function (success, error) {
    exec(success, error, 'ContactsX', 'requestPermission', [true]);
  }
}

module.exports = contactsX;
