
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MetaTags from 'react-meta-tags';

class Meta extends React.Component {
 render() {
    return (
          <MetaTags>
            <title>Page</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="" />
          </MetaTags>
      )
  }
}

export default Meta;
