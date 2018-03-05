export default function (state = null, action) {
  console.log(action);
  switch (action.type) {
    case 'TOOL_INSTALLED':
      return action.payload
  }
  return state;
}
