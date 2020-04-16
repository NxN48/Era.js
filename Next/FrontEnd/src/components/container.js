const React = require('../../node_modules/react')
const Block = require('../components/blocks')
module.exports = function Container(props) {
    React.useEffect(() => {
        let el = document.querySelector('.container')
        el.scrollTop = el.scrollHeight
    })
    let pages = []
    for (let i = 0; i < props.children.length; i++) {
        const p = props.children[i];
        // console.log(p);
        if (i < props.children.length - 1) {
            p.disabled = true
        }
        p.key = i
        pages.push(
            React.createElement(
                Page,
                p
            )
        )
    }
    // console.log(pages);
    return (
        React.createElement(
            'div',
            { className: 'container' },
            pages
        )
    );
}
function Page(props) {
    let blocks = []
    for (let i = 0; i < props.children.length; i++) {
        const el = props.children[i];
        if (props.hasOwnProperty('disabled') && props.disabled) {
            el.disabled = true
        }
        blocks.push(Block(el))
    }
    if (props.hasOwnProperty('disabled') && props.disabled) {
        return (
            React.createElement(
                'div',
                { className: 'page disabled' },
                blocks
            )
        )
    } else {
        return (
            React.createElement(
                'div',
                { className: 'page' },
                blocks
            )
        )
    }

}