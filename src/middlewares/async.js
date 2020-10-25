export default ({ dispatch }) => next => action => {
  // check to see if the action has a promise on its 'payload' property
  // if yes, wait for it to resolve
  // if no, send the action to the NEXT middleware
  if (!action.payload || !action.payload.then) {
    return next(action)
  }

  action.payload.then(function(response) {
    const newAction = { ...action, payload: response }
    dispatch(newAction)
  })
}
