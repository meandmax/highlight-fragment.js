/**
 * returns the sequence with highlighted fragment if the pattern matches, else just the sequence
 *
 * @param  {string} sequence [description]
 * @param  {string} fragment [fragment which should be highlighted]
 *
 * @param  {string} pattern  [pattern describes which characters are allowed between the fragment characters
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp]
 *
 * @param  {string} htmlTag  [an html tag e.g strong, span, b]
 * @return {string}          [returns the sequence with higlighted fragment if the pattern matches, else just the sequence]
 */
export default function highlightFragment (sequence, fragment, pattern, htmlTag) {
    let result = new RegExp(fragment
        .split('')
        .join(pattern)
    ).exec(sequence);

    if (result && fragment) {
        return sequence.slice(0, result.index) + '<' + htmlTag + '>' + result[0] + '</' + htmlTag + '>' + sequence.slice(result.index + result[0].length);
    } else {
        return sequence;
    }
}
