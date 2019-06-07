import React from 'react';
import PropTypes from 'prop-types';
import {VelocityComponent} from 'velocity-react';
import 'velocity-animate/velocity.ui';

const HiveAnimate = (props) => {
    const children = React.cloneElement(props.children, {
        style: {
            ...props.children.style,
            visibility: 'hidden'
        }
    });

    return <VelocityComponent ref={(ev) => props.setRef && props.setRef(ev)} {...props} children={children} />
}

HiveAnimate.propTypes = {
    children: PropTypes.element.isRequired
};

HiveAnimate.defaultProps ={
    animation          : 'transition.fadeIn',
    runOnMount         : true,
    targetQuerySelector: null,
    interruptBehavior  : 'stop',
    visibility         : 'visible',
    duration           : 300,
    delay              : 50,
    easing             : [0.4, 0.0, 0.2, 1],
    display            : null,
    setRef             : undefined
}

export default HiveAnimate;