import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PageShell = Page => {
  return props =>
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={1200}
        transitionName={'SlideIn'}
      >
        <Page {...props} />

      </ReactCSSTransitionGroup>
};
export default PageShell;