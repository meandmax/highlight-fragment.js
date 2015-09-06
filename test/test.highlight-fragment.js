import test from 'tape';
import highlightFragment from '../index';

test('highlightFragment() is a function and returns an object', function (t) {
    t.plan(2);

    t.equal(typeof highlightFragment, 'function');
    t.equal(typeof highlightFragment('me - andmax', 'ean', '[- ]*', 'strong'), 'string');
});

test('highlightFragment() has to return the sequence with the highlighted fragment as a string', function (t) {
    t.plan(4);

    t.equal(highlightFragment('me - andmax', 'ean', '[- ]*', 'strong'), 'm<strong>e - an</strong>dmax');
    t.equal(highlightFragment('0163 - 3094512', '163', '[- ]*', 'strong'), '0<strong>163</strong> - 3094512');
    t.equal(highlightFragment('highlight-fragment', 'frag', '[- ]*', 'strong'), 'highlight-<strong>frag</strong>ment');
    t.equal(highlightFragment('0163 - 030309', '030', '[- ]*', 'strong'), '0163 - <strong>030</strong>309');
});

test('highlightFragment() has to return the sequence without any highlighted fragment', function (t) {
    t.plan(1);

    t.equal(highlightFragment('0163 - 3094512', '', '[- ]*', 'strong'), '0163 - 3094512');
});
