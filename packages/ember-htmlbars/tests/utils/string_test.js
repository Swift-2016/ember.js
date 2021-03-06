import SafeString from 'htmlbars-util/safe-string';
import { htmlSafe } from 'ember-htmlbars/utils/string';

QUnit.module('ember-htmlbars: SafeString');

QUnit.test('htmlSafe should return an instance of SafeString', function() {
  let safeString = htmlSafe('you need to be more <b>bold</b>');

  ok(safeString instanceof SafeString, 'should be a SafeString');
});

QUnit.test('htmlSafe should return an empty string for null', function() {
  let safeString = htmlSafe(null);

  equal(safeString instanceof SafeString, true, 'should be a SafeString');
  equal(safeString.toString(), '', 'should return an empty string');
});

QUnit.test('htmlSafe should return an empty string for undefined', function() {
  let safeString = htmlSafe();

  equal(safeString instanceof SafeString, true, 'should be a SafeString');
  equal(safeString.toString(), '', 'should return an empty string');
});
