/**
 * Base HTML to be rendered
 * 
 */

 const Html = ({ body, title }) => `
    <!DOCTYPE html>
    <html>
        <head>
            <title>${title}</title>
        </head>
        <body>
            <div id="app">
                ${body}
            </div>
        </body>
    </html>
 `;

 export default Html;