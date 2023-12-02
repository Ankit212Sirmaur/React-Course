`1`- JSX used to write html elements in JS and place them in inside virtual dom without any createElement or appendchild Elements
     this is internally handle like this 
     ```
      <div>
        <h1> heading</h1>
        <P> paragraph <p>
      </div>
     ```
`2`- it converts HTML tags into react elements i.e translated into regular JS at runtime
`3`- in JSX allow only one element in root if u want more element then put them inside a container.