export const ConditionalWrapper = ({wrapper, children, condition, fallback}) => condition ? wrapper(children && children) : fallback ? fallback(children && children) : children ? children : null