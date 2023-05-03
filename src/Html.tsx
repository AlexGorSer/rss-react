import React from 'react';

export const Html: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React-course</title>
        <link rel="shortcut icon" href="./src/assets/github.svg" type="image/x-icon" />
      </head>
      <body>
        <div id="root">{props.children}</div>
        <script type="module" src="/src/entry-client.tsx"></script>
      </body>
    </html>
  );
};
