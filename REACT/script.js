// const h2 = React.createElement('h2', {className: 'h2heading'}, 'hello react');
// const root = ReactDOM.createRoot(document.querySelector('.root'));
// root.render(h2);


const container = React.createElement('div', { className: 'container' }, [
    React.createElement('section', { key: 1 }, [
        React.createElement('p', { key: 2 }, 'the library for web and native user'),
        React.createElement('p', { key: 3 }, 'they both are sibling'),
        React.createElement('form', { key: 4, className: 'form' }, [
            React.createElement('label', { key: 5, htmlFor: 'userName' }, 'userName'),
            React.createElement('input', { key: 6, className: 'userName', type: 'password',id: 'userName',placeholder: 'Enter your password'})
        ])
    ])
]);



const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(container);


// notes:-> for tag always work with id attributes not with class attribures
